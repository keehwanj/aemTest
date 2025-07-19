 var toggleParsys = function()
    {
        var that = {};
        var componentPath;

        that.setComponentPath = function(s)
        {
            componentPath = s;
        }

        that.hideParsys = function()
        {
            if (componentPath)
            {
                var parsysComp = CQ.WCM.getEditable(componentPath);

                if (parsysComp)
                {
                    parsysComp.hide();
                }
            }
        };

        that.showParsys = function()
        {
            if (componentPath)
            {
                var parsysComp = CQ.WCM.getEditable(componentPath);

                if (parsysComp)
                {
                    parsysComp.show();
                }
            }
        };

        return that;
    }();