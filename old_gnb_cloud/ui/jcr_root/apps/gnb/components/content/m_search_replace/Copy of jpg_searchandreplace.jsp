<%@include file="/libs/foundation/global.jsp"%>
<%@page session="false"
	import="javax.jcr.*,
        com.day.cq.wcm.api.Page,
        com.day.cq.wcm.api.PageManager,
        org.apache.sling.api.resource.Resource,
        com.day.cq.wcm.commons.WCMUtils,
        com.day.cq.wcm.api.NameConstants,
        com.day.cq.wcm.api.designer.Designer,
        com.day.cq.wcm.api.designer.Design,
        com.day.cq.wcm.api.designer.Style,
        org.apache.sling.api.resource.ValueMap,
        com.day.cq.wcm.api.components.ComponentContext,
        com.day.cq.wcm.api.components.EditContext,
        java.util.Date, java.text.SimpleDateFormat, 
        java.text.FieldPosition, java.text.ParsePosition,
        java.util.Iterator,
        java.util.regex.Pattern,
        java.util.regex.Matcher,
        javax.jcr.Property,
        javax.jcr.Node,
        javax.jcr.PropertyType,
        javax.jcr.Session,
        javax.jcr.PropertyIterator,
        javax.jcr.Value,
        javax.jcr.ValueFactory,
        org.apache.jackrabbit.value.ValueFactoryImpl"%>

<%@taglib prefix="sling" uri="http://sling.apache.org/taglibs/sling/1.0"%>
<%@taglib prefix="cq" uri="http://www.day.com/taglibs/cq/1.0"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<sling:defineObjects />

<%
boolean updateRefs 		= false;
String pathToSearch 	= request.getParameter("search_path");
String searchString 	= request.getParameter("search_string");
String replaceString 	= request.getParameter("replace_string");
String searchComponent 	= request.getParameter("search_component");
String searchType 		= request.getParameter("search_type");
String searchElement 	= request.getParameter("search_element");
%>
<h3>Search and Replace Script:</h3>
	<br />
	<form name="purgewf" method="GET" action="">
		<table border="0">
			<tr>
				<td>Search Path:</td>
				<td><input type="text" size="100" name="search_path" value="<%=((pathToSearch != null) ? pathToSearch : "/content/gnb/cnb_data/news_nouvelles")%>" width="100" /></td>
			</tr>
			<tr>
				<td>Search Component:</td>
				<td><input type="text" size="100" name="search_component" value="<%=((searchComponent != null) ? searchComponent : "gnb/components/page/newsdata")%>" width="100" /></td>
			</tr>
			<tr>
				<td>Search Element:</td>
				<td><input type="text" name="search_element" value="<%=((searchElement != null) ? searchElement : "cq:PageContent")%>" width="100" /></td>
			</tr>
			<tr>
				<td>Search Type: (static or dynamic)</td><td><input type="text" name="search_type" value="<%=((searchType != null) ? searchType : "static")%>" width="100" /></td>
			</tr>
			<tr>
				<td>Search String:</td>
				<td><input type="text" size="70" name="search_string" value="<%=((searchString != null) ? searchString : "gnb-eng:")%>" width="100" /> Dynamic Example: sab=\"[0-9]*\"</td>
			</tr>
			<tr>
				<td>Replace String:</td>
				<td><input type="text" size="70" name="replace_string" value="<%=((searchString != null) ? replaceString : "active-gnb-eng:")%>" width="100" /></td>
			</tr>
			<tr>
				<td>Replace?</td>
				<td><input type="checkbox" name="update_references" value="1" />
                    <input type="hidden" name="runupdate" value="1" />
                </td>
			</tr>
			<tr>
				<td colspan=2><input type="submit" value="Search/Replace" /></td>
			</tr>
		</table>
	</form>
	<%
		if (request.getParameter("update_references") != null) {
        	updateRefs = true;//not replace
		}

		if (request.getParameter("runupdate") != null) {
            //News release
            //String query = "/jcr:root" + pathToSearch + "//element(*, "	+ searchElement + ")[@sling:resourceType = '"+ searchComponent + "'] ";

            //Multimedia
            //String query = "/jcr:root/content/dam/gnb/multimedia/_x0032_006/_x0030_1//element(*, nt:unstructured)[fn:name() = 'metadata' and @dam:MIMEtype = 'image/jpeg']";
            String query = "/jcr:root/content/dam/gnb/Departments//element(*, nt:unstructured)[fn:name() = 'metadata' and @dc:format = 'image/jpeg']";
            //String query = "/jcr:root/content/dam/gnb/Departments//element(*, nt:unstructured)[fn:name() = 'metadata' and @dc:format = 'application/pdf']";            
            //String query = "/jcr:root/content/dam/gnb/multimedia//element(*, nt:unstructured)[fn:name() = 'metadata' and @dam:MIMEtype = 'image/jpeg']";


            //String query = "/jcr:root" + pathToSearch + "//*element(*, "+ searchElement + ")[@sling:resourceType = '"+ searchComponent + "'] ";
            //String query = "/jcr:root" + pathToSearch + "//*[jcr:contains(., '" + searchString + "%')]";
            //String query = "/jcr:root" + pathToSearch + "//element(*, "	+ searchElement + ")[@property = '"+ searchComponent + "'] ";

            //String query = "/jcr:root/content/gnb/cnb_data/news_nouvelles/_x0032_010//element(*, cq:PageContent)[@enDepartment = 'gnb-eng:organizations' ]";

			if (!updateRefs) {%>
				<p>...This is a search replace preview run. Nothing will actually be changed.<p /><br />
			<%}%>

			<p><strong>Running query <%=query%></strong></p><br />

			<%
			Iterator<Resource> iter = resourceResolver.findResources(query,	"xpath");
			int save = 1000;
			int counter = 0;
			int totalprocessed = 0;

            if (updateRefs){
                //((Session) resourceResolver.adaptTo(Session.class)).save();
            }

			while (iter.hasNext()) {
				Resource curRes = iter.next();
				Node n = curRes.adaptTo(Node.class);
				Property p = null;

				try {
					if (!n.isNodeType("cq:Page")) {%>
						<br />
						<%="<p>"+ ((updateRefs) ? "Updating " : "")+ n.getPath() + ":</p> "%>
						<%
						PropertyIterator propIter = n.getProperties();
						Pattern pat = Pattern.compile(searchString);

						while (propIter.hasNext()) {

							Property prop = propIter.nextProperty();
							if (prop.getType() == PropertyType.STRING) {
								String propStr = null;
								if (prop.getDefinition().isMultiple()) {
									Value[] values = prop.getValues();

									for (int i = 0; i < values.length; i++) {
										propStr = values[i].getString();
										final ValueFactory vf = ValueFactoryImpl.getInstance();
										if (searchType.equals("dynamic")) {
											Matcher m = pat.matcher(propStr);
											final Value propertyValue = vf.createValue(m.replaceAll(replaceString));
											values[i] = propertyValue;
										}

                                        else {
											final Value propertyValue = vf.createValue(propStr.replaceAll(searchString,replaceString));
											values[i] = propertyValue;
										}
                                        if (!propStr.startsWith("[")){
    
                                        out.print("<p>"+propStr+"</p>");
                                        out.print("<p>"+values[i].getString()+"</p>");
                                        out.print("<p>"+prop.getName()+"</p>");
                                        out.print("<br/>");

                                        }
                                        if (!propStr.startsWith("[")){
                                        	if (!propStr.matches(values[i].getString())) //causes an issue
                                        	{%>
												<%="<p> &nbsp;&nbsp;"	+"<strong>"+ prop.getName()+"</strong>" + ": "	+ propStr + " => "+ values[i].getString()+"-111</p>"%>
											<%}
                                        }


                                        /**

                                        if (!propStr.matches(values[i].getString())) //causes an issue
                                        {%>
											<%="<p> &nbsp;&nbsp;"	+"<strong>"+ prop.getName()+"</strong>" + ": "	+ propStr + " => "+ values[i].getString()+"-111</p>"%>
										<%}
                                        **/

										if (updateRefs) 
                                        {
                                            prop.setValue(values);
										}

                                    }//end of for 

                                }//end of inner if 
                                else {
									propStr = prop.getString();

                                    String value = propStr.replaceAll(searchString, replaceString);


									if (!propStr.equals(value)) 
                                    {%>
										<%="<p> &nbsp;&nbsp;"	+"<strong>"+ prop.getName()+"</strong>" + ": "	+ propStr + " => " + value	+"-222</p>"%>
									<%}

                                    if (updateRefs) {
                                        //prop.setValue(value);
									}

                                }//end of inner else
							}

                        }//end if inner while


						++counter;
						if (updateRefs) 
                        {%>
							<p><strong>- Updated</strong></p>
						<%}

						if (counter == 500) 
                        {
                            //counter = 0;
                        %>
							<p>Saving... please wait</p><%
							out.flush();
							if (updateRefs)
                                ((Session) resourceResolver.adaptTo(Session.class)).save();//causes issue
							totalprocessed += counter;
                        }//end of if

					}
                }//end if try 

                catch (Exception e) 
                {
					//log.error("Error deleting " +  n.getPath(), e);
					%>
					<p><strong> Error updating <%=n.getPath() + " : " + e.getMessage()%></strong></p><%
                }//end of catch

            }//end if outer while

            if (updateRefs)
            {
                ((Session) resourceResolver.adaptTo(Session.class)).save();
            }

			totalprocessed += counter;%>
			<br /> <p><strong>Total<%=((updateRefs) ? " Updated" : "")%>:<%=totalprocessed%>, Done</strong></p>
	<%
		}
	%>
