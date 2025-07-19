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
<h3>Search and Replace for Content(cq:tags):</h3>
	<br />
	<form name="purgewf" method="GET" action="">
		<table border="0">
			<tr>
				<td>Search Path:</td>
				<td><input type="text" size="60" name="search_path" value="<%=((pathToSearch != null) ? pathToSearch : "/content/gnb/en/news/search-and-replace")%>" width="100" /></td>
			</tr>

			<tr>
				<td>Search Element:</td>
				<td><input type="text" name="search_element" value="<%=((searchElement != null) ? searchElement : "cq:PageContent")%>" width="100" /></td>
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
            String query = "/jcr:root" + pathToSearch + "//element(*, "	+ searchElement + ")[fn:name() = 'jcr:content']";
            //String query = "/jcr:root/content/gnb/cnb_data/news_nouvelles/_x0032_008/_x0030_1//element(*, cq:Page)[fn:name() = 'jcr:content' and @cq:template = '/apps/gnb/templates/newsdata'] order by jcr:content/@onTime descending";




            //Multimedia
            //String query = "/jcr:root/content/gnb/cnb_data/news_nouvelles/_x0032_013//element(*, cq:Page)[fn:name() = 'metadata' and @dam:MIMEtype = 'image/jpeg']";

            //String query = "/jcr:root" + pathToSearch + "//*element(*, "+ searchElement + ")[@sling:resourceType = '"+ searchComponent + "'] ";
            //String query = "/jcr:root" + pathToSearch + "//*[jcr:contains(., '" + searchString + "%')]";
            //String query = "/jcr:root" + pathToSearch + "//element(*, "	+ searchElement + ")[@property = '"+ searchComponent + "'] ";

            //String query = "/jcr:root/content/gnb/cnb_data/news_nouvelles/_x0032_010//element(*, cq:PageContent)[@enDepartment = 'gnb-eng:organizations' ]";

			if (!updateRefs) 
            {%>
				<p>...This is a search replace preview run. Nothing will actually be changed.<p /><br />
			<%}%>

			<p><strong>Running query <%=query%></strong></p><br />

			<%
			Iterator<Resource> iter = resourceResolver.findResources(query,	"xpath");
			int save = 1000;
			int counter = 0;
			int totalprocessed = 0;
			int num=0;

            if (updateRefs)
            {
                ((Session) resourceResolver.adaptTo(Session.class)).save();
            }

			while (iter.hasNext()) 
            {							
                totalprocessed ++;
				Resource curRes = iter.next();
				Node n = curRes.adaptTo(Node.class);
					if (!n.isNodeType("cq:Page")) 
                    {
                        out.print("<br />");
                        out.print("<p>"+ ((updateRefs) ? "Updating " : "")+ n.getPath() + ":</p>");

						if (updateRefs) 
                        {
                        	n.setProperty("cq:tags", new Value[]{null});
                            num++;
						}
					if (counter == 500) 
                    {

                    	out.print("<p>Saving... please wait</p>");
						out.flush();
						if (updateRefs)
                            ((Session) resourceResolver.adaptTo(Session.class)).save();//causes issue
                        	counter = 0;                        
                        }//end of if


                     }


				counter++;

            }//end if outer while
            out.println("<p>Total changed : "+num+"</p>");            
            out.println("<p>Total : "+totalprocessed+"</p>");


            if (updateRefs)
            {
                ((Session) resourceResolver.adaptTo(Session.class)).save();
            }

		}
	%>
