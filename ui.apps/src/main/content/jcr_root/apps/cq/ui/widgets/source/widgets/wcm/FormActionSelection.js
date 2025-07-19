/*
 * Copyright 1997-2008 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */

/**
 * @class CQ.wcm.FormActionSelectionRedirectHelper
 * @extends CQ.Ext.util.Observable
 * Created for #31430 so that the name of the property that the dialog's 
 * redirectField edits varies according to which action is selected.
 * @constructor
 * Creates a new FormActionSelectionRedirectHelper.
 * @param {Object} dialog The parent dialog
 * @private
 */
CQ.wcm.FormActionSelectionRedirectHelper = CQ.Ext.extend(CQ.Ext.util.Observable, {
    redirectField: null,
    dialog: null,
    
    constructor : function(dialog) {
        if(dialog) {
            this.dialog = dialog;
            dialog.FormActionSelectionRedirectHelper = this;
            dialog.on("loadcontent", this.loadContentHandler);
        }
    },
    
    setRedirectField : function() {
        if(!this.redirectField) {
            var rf = this.dialog.find("componentId", "redirectField");
            if(rf && rf[0]) {
                this.redirectField = rf[0];
            }
        }
        return this.redirectField;
    },
    
    loadContentHandler : function(dialog, records, options, success) {
        var currentObj = dialog.FormActionSelectionRedirectHelper;
        if(success && currentObj.setRedirectField()) {
            // Make sure rf's value is in sync with its possibly
            // changed name
            currentObj.redirectField.setValue(records[0].get(currentObj.redirectField.name))
        }
    },
    
    /** Call this to setup the redirectField according to the
     *  currently selected action. The items parameter supplies
     *  the desired property name
     */
    updateRedirectField : function(dialog, items) {
        var rfn = items["cq:redirectFieldName"];
        var name = "./" + (rfn ? rfn : "redirect");
        var currentObj = dialog.FormActionSelectionRedirectHelper;
        if(currentObj && currentObj.setRedirectField()) {
            // change the field name
            // need to change it at the DOM level, just setting name
            // is not enough. If the field uses a hiddenName, its dom
            // won't have a "name" attribute so watch for that and complain.
            var el = currentObj.redirectField.getEl();
            if(el.dom.name) {
                currentObj.redirectField.name = name;
                el.dom.name = name;
            } else {
                throw("Unable to set redirect field name to " + name + ", no 'name' attribute in dom");
            } 
        } else {
            throw("Unable to access redirectField");
        }
    }
});

/**
 * @class CQ.wcm.FormActionSelection
 * @extends CQ.form.Selection
 * The FormActionSelection is a specific {@link CQ.form.Selection} to select
 * the action of the foundation's form start component. After the value has
 * been changed the content of the Action Configuration tab is adjusted.
 * @constructor
 * Creates a new FormActionSelection.
 * @param {Object} config The config object
 * @private
 */
CQ.wcm.FormActionSelection = CQ.Ext.extend(CQ.form.Selection, {

    /**
     * @cfg {String} tabId
     * The id of the tab to add the form action fields to.
     */
    tabId:null,

    /**
     * @cfg {String} workflowId
     * The id of the workflow selector widget, that's
     * only enabled for actions that use workflow
     */
    workflowId:null,

    /**
     * Loaded data
     */
    loadedData:null,
   
    /**
     * Helper for redirect field name manipulation
     */ 
    redirectHelper:null,
    

    constructor: function(config) {
        var defaults = {
            options:"/bin/wcm/foundation/forms/actions.json",
            type:"select",
            tabId:"cq5_form_action_config_panel",
            workflowId:"cq5_form_action_workflow_id"
        };

        CQ.Util.applyDefaults(config, defaults);
        CQ.wcm.FormActionSelection.superclass.constructor.call(this, config);
        this.tabId = config.tabId;
        this.workflowId = config.workflowId;
        this.addListener(CQ.form.Selection.EVENT_SELECTION_CHANGED, function(component, value) {
            this.notifyChange(value, false);
        });
        
        this.redirectHelper = new CQ.wcm.FormActionSelectionRedirectHelper(this.findParentByType("dialog"));
    },

    initComponent : function() {
        CQ.wcm.FormActionSelection.superclass.initComponent.call(this);
    },

    /**
     * Value changed - update config tab and enable workflow selection widget
     */
    notifyChange: function(value, loadWidgets) {
        var dialog = this.findParentByType("dialog");
        var configTab = dialog.find("componentId", this.tabId)[0];
        if ( configTab != null ) {
            var form = configTab.findParentByType("form").getForm();
            configTab.items.each(function(item, index, length) {
                form.remove(item);
                configTab.remove(item);
            }, this);
            form.cleanDestroyed();
            var workaroundRemoveLabels = CQ.Ext.DomQuery.select("div[class*='x-form-item']", configTab.getEl().dom);
            for (var x = 0; x < workaroundRemoveLabels.length; x++) {
                workaroundRemoveLabels[x].parentNode.removeChild(workaroundRemoveLabels[x]);
            }
            configTab.doLayout();
            var url = "/libs/foundation/components/form/actions/mail/dialog.infinity.json";
            url = CQ.utils.HTTP.addParameter(url, "id", value);
            response = CQ.utils.HTTP.get(url);
            var noItems = true;
            var needWorkflow = false;
            if (CQ.HTTP.isOk(response)) {
                var items = CQ.utils.Util.formatData(CQ.Util.eval(response));
                this.redirectHelper.updateRedirectField(dialog, items);
                for (var i in items) {
                    if (!items[i] || (typeof items[i] == "string") || (typeof items[i] == "boolean")) {
                        continue;
                    }
                    var wi = configTab.add(items[i]);
                    wi.setDisabled(this.disabled);
                    form.add(wi);
                    noItems = false;
                    configTab.doLayout();
                    wi.processRecord(this.loadedData);
                }
                configTab.doLayout();

                needWorkflow = items && items.usesWorkflow;
            }
            if(noItems) {
                configTab.add({
                    "xtype": "static",
                    "italic": true,
                    "small": true,
                    "style": "color:gray;",
                    "text": CQ.I18n.getMessage("No additional configuration options available")
                });
                configTab.doLayout();
            }

            // Disable workflow widget unless action needs it
            var workflowWidget = this.findParentByType("dialog").find("componentId", this.workflowId)[0];
            if(workflowWidget) {
                workflowWidget.setDisabled(!needWorkflow);
            }
        }
    },

    /**
     * Overwrite handling to get all loaded values
     */
    processRecord: function(record, path) {
        this.loadedData = record;
        CQ.wcm.FormActionSelection.superclass.processRecord.call(this, record, path);
    },

    /**
     * Overwrite handling of the initial case where value is not set yet.
     */
    setValue: function(value) {
        if (typeof value == "undefined" || value === null){
            value = "foundation/components/form/actions/store";
        }
        CQ.wcm.FormActionSelection.superclass.setValue.call(this, value);
        this.notifyChange(value, true);
    }
});

CQ.Ext.reg("formactionselection", CQ.wcm.FormActionSelection);
