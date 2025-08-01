package com.t4g.cnb.cq.wcm.foundation;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Iterator;
import java.util.NoSuchElementException;
import java.util.HashMap;

import javax.jcr.Node;
import javax.jcr.RepositoryException;
import javax.jcr.Session;

import org.apache.commons.collections.iterators.EmptyIterator;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.search.Predicate;
import com.day.cq.search.Query;
import com.day.cq.search.QueryBuilder;
import com.day.cq.search.SimpleSearch;
import com.day.cq.search.result.Hit;
import com.day.cq.search.result.SearchResult;
import com.day.cq.wcm.api.NameConstants;
import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.PageManager;
import com.day.text.Text;

/**
 * Creates a list from a resource for use in the list component.
 */
public class List {

    public static final Logger log = LoggerFactory.getLogger(List.class);

    public static final String DEFAULT_QUERY = "";

    public static final String URL_EXTENSION = ".html";

    public static final String TYPE_PROPERTY_NAME = "displayAs";

    public static final String SOURCE_PROPERTY_NAME = "listFrom";

    /**
     * Used to create a list from child pages.
     */
    public static final String SOURCE_CHILDREN = "children";

    /**
     * Used to create a list from a fixed selection of pages.
     */
    public static final String SOURCE_STATIC = "static";

    /**
     * Used to create a list from a search result.
     */
    public static final String SOURCE_SEARCH = "search";

    /**
     * Used to create a list from a querybuilder search result. Allows rendering of any node, not just pages.
     */
    public static final String SOURCE_QUERYBUILDER = "querybuilder";

    /**
     * Used for default rendering of the list items.
     */
    public static final String TYPE_DEFAULT = "default";

    public static final String PARENT_PAGE_PROPERTY_NAME = "parentPage";

    public static final String PAGES_PROPERTY_NAME = "pages";

    public static final String QUERY_PROPERTY_NAME = "query";

    public static final String SEARCH_IN_PROPERTY_NAME = "searchIn";

    public static final String LIMIT_PROPERTY_NAME = "limit";

    public static final String PAGE_MAX_PROPERTY_NAME = "pageMax";

    public static final String ORDER_BY_PROPERTY_NAME = "orderBy";

    public static final String ORDERED_PROPERTY_NAME = "ordered";

    public static final String SAVEDQUERY_PROPERTY_NAME = "savedquery";

    public static final String PAGE_START_PARAM_NAME = "start";

    public static final String PAGE_MAX_PARAM_NAME = "max";

    private String id;

    private SlingHttpServletRequest request;

    private java.util.List<Resource> resources;

    private java.util.List<Page> pages;

    private Iterator<Page> pageIterator;

    private Iterator<Node> nodeIterator;

    private boolean inited;

    private boolean ordered;

    private String source;

    private String query;

    private String startIn;

    private String type;

    private String orderBy;

    private Comparator<Page> orderComparator;

    private int limit = -1;

    private int pageMaximum = -1;

    private int pageStart = 0;

    private Resource resource;

    private ValueMap properties;

    /**
     * Creates a <code>List</code> instance based on the specified request.
     * @param request The request
     */
    public List(SlingHttpServletRequest request) {
        this.request = request;
        resource = request.getResource();
        generateId();
    }

    private void initConfig() {
        // get config from content
        properties = resource.adaptTo(ValueMap.class);
        if (source == null) {
            try {
                source = properties.get(SOURCE_PROPERTY_NAME, SOURCE_STATIC);
            } catch (NullPointerException npe) {
                source = SOURCE_STATIC;
            }
        }
        if (query == null) {
            try {
                query = properties.get(QUERY_PROPERTY_NAME, DEFAULT_QUERY);
            } catch (NullPointerException npe) {
            }
        }
        if (startIn == null) {
            try {
                startIn = properties.get(SEARCH_IN_PROPERTY_NAME,
                                    Text.getAbsoluteParent(resource.getPath(), 1));
            } catch (NullPointerException npe) {
            }
        }
        if (type == null) {
            try {
                type = properties.get(TYPE_PROPERTY_NAME, TYPE_DEFAULT);
            } catch (NullPointerException npe) {
                type = TYPE_DEFAULT;
            }
        }
        if (orderBy == null) {
            try {
                orderBy = properties.get(ORDER_BY_PROPERTY_NAME, null);
            } catch (NullPointerException npe) {
            }
        }
        if (limit < 0) {
            try {
                limit = properties.get(LIMIT_PROPERTY_NAME, 100);
            } catch (NullPointerException npe) {
                limit = 100;
            }
        }
        if (pageMaximum < 0) {
            try {
                pageMaximum = properties.get(PAGE_MAX_PROPERTY_NAME, -1);
            } catch (NullPointerException npe) {
                pageMaximum = -1;
            }
        }
        try {
            ordered = properties.get(ORDERED_PROPERTY_NAME, ordered);
        } catch (NullPointerException npe) {
        }

        // get config from request parameters
        if (getParameter(PAGE_START_PARAM_NAME) != null) {
            try {
                pageStart = Integer.parseInt(getParameter(PAGE_START_PARAM_NAME));
            } catch (Throwable t) {
            }
        }
        if (getParameter(PAGE_MAX_PARAM_NAME) != null) {
            try {
                pageMaximum = Integer.parseInt(getParameter(PAGE_MAX_PARAM_NAME));
            } catch (Throwable t) {
            }
        }
    }

    @SuppressWarnings("unchecked")
    private boolean init() {
        if (!inited) {
            initConfig();

            // Note: this iter can also be set from the outside (setPageIterator())
            if (pageIterator == null) {
                try {
                    // advanced search = querybuilder
                    if (SOURCE_QUERYBUILDER.equals(source)) {
                        QueryBuilder queryBuilder = resource.getResourceResolver().adaptTo(QueryBuilder.class);
                        Session session = resource.getResourceResolver().adaptTo(Session.class);
                        if (session != null && queryBuilder != null) {
                            try {
                                Query query = queryBuilder.loadQuery(resource.getPath() + "/" + SAVEDQUERY_PROPERTY_NAME, session);
                                if (query != null) {
                                    query.setHitsPerPage(limit);
                                    SearchResult result = query.getResult();
                                    // store as both page and node iterator
                                    pageIterator = new HitBasedPageIterator(result.getHits().iterator());
                                    nodeIterator = result.getNodes();
                                }
                            } catch (Exception e) {
                                log.error("error loading stored querybuilder query from " + resource.getPath(), e);
                            }
                        }
                    // simple search
                    } else if (SOURCE_SEARCH.equals(source)) {
                        if (DEFAULT_QUERY.equals(query)) {
                            pageIterator = EmptyIterator.INSTANCE;
                        }
                        
                        SimpleSearch search = getSearch(resource.getPath());
                        search.setQuery(query);
                        search.setSearchIn(startIn);
                        // ensure we only get pages
                        search.addPredicate(new Predicate("type", "type").set("type", NameConstants.NT_PAGE));
                        search.setHitsPerPage(100000);
                        // run simple search
                        SearchResult result = search.getResult();
                        pageIterator = new HitBasedPageIterator(result.getHits().iterator());
                        
                    // list child pages
                    } else if (SOURCE_CHILDREN.equals(source)){
                        String path = properties.get(PARENT_PAGE_PROPERTY_NAME,
                                Text.getRelativeParent(resource.getPath(), 3));
                        try {
                            Page startPage = request.getResourceResolver().getResource(path).adaptTo(Page.class);
                            pageIterator = startPage.listChildren();
                        } catch (NullPointerException npe) {
                            log.error("error building list from child pages", npe);
                        }
                    // fixed list of pages
                    } else {
                        ArrayList<Page> staticPages = new ArrayList<Page>();
                        String[] statics = properties.get(PAGES_PROPERTY_NAME, new String[0]);
                        Resource pr = request.getResourceResolver().getResource(
                                Text.getRelativeParent(resource.getPath(), 3));
			
			// Get Page Manager through request.getResourceResolver().adaptTo(PageManager.class);
                        //PageManager pm = pr.adaptTo(Page.class).getPageManager();
			PageManager pm = request.getResourceResolver().adaptTo(PageManager.class);
                        for (int i = 0; i < statics.length; i++) {
                            Page p = pm.getPage(statics[i]);
                            if (p != null) {
                                staticPages.add(p);
                            }
                        }
                        pageIterator = staticPages.iterator();
                    }
                } catch (Exception e) {
                    log.error("error creating page iterator", e);
                }
            }
            
            pages = new ArrayList<Page>();
            resources = new ArrayList<Resource>();
            
            if (pageIterator == null) {
                return false;
            }

            // build list of pages and resources from page iterator
            while (pageIterator.hasNext()) {
                Page page = pageIterator.next();
                pages.add(page);
            }
            // apply sort order if present
            if (orderComparator != null) {
                Collections.sort(pages, orderComparator);
            } else if (orderBy != null) {
                Collections.sort(pages, new PageComparator<Page>(orderBy));
            }

            // apply limit
            if (pages.size() > limit) {
                pages = pages.subList(0, limit);
            }

            for (Page p : pages) {
                resources.add(p.getContentResource());
            }
            
            inited = true;

        }
        return true;
    }
    
    private void generateId() {
        String path = resource.getPath();
        String rootMarker = "jcr:content/";
        int root = path.indexOf(rootMarker);
        if (root >= 0) {
            path = path.substring(root + rootMarker.length());
        }
        id = path.replace('/', '_');
    }

    private SimpleSearch getSearch(String path) {
        try {
            Resource res = request.getResourceResolver().getResource(path);
            SimpleSearch search = res.adaptTo(SimpleSearch.class);
            if (search != null) {
                return search;
            }
        } catch (Exception e) {}
        if (path.lastIndexOf("/") > 0) {
            return getSearch(Text.getRelativeParent(path, 1));
        }
        return null;
    }

    private String getParameter(String name) {
        return request.getParameter(id + "_" + name);
    }

    /**
     * Returns the list items as resources.
     * @return The resources
     * @deprecated use {@link List#getPages()} instead
     */
    public Iterator<Resource> getResources() {
        return init() && resources.size() > 0 ? resources.iterator() : null;
    }

    /**
     * Returns the list items as pages, respecting both starting index and
     * maximum number of list items if specified.
     * @return The pages
     */
    public Iterator<Page> getPages() {
        if (init() && pages.size() > 0) {
            ArrayList<Page> plist = new ArrayList<Page>();
            int c = 0;
            for (int i = 0; i < pages.size(); i++) {
                if (i < pageStart) {
                    continue;
                }
                plist.add(pages.get(i));
                c++;
                if (pageMaximum > 0 && c == pageMaximum) {
                    break;
                }
            }
            return plist.iterator();
        } else {
            return null;
        }
    }

    /**
     * Returns the list as nodes. This is only the case when an advanced search
     * is run, ie. the {@link #setSource(String) source} is
     * {@link #SOURCE_QUERYBUILDER}. Otherwise <code>null</code> will be
     * returned.
     * 
     * @return the nodes of a querybuilder search result or <code>null</code>
     * @since 5.3
     */
    public Iterator<Node> getNodes() {
        return init() ? nodeIterator : null;
    }

    /**
     * States whether the list is ordered.
     * @return <code>true</code> if list is ordered, <code>false</code> otherwise
     */
    public boolean isOrdered() {
        return ordered;
    }

    /**
     * States whether the list is empty.
     * @return <code>true</code> if list is empty, <code>false</code> otherwise
     */
    public boolean isEmpty() {
        return init() ? resources.size() == 0 : true;
    }

    /**
     * Returns the number of list items.
     * @return The size of the list
     */
    public int size() {
        return init() ? resources.size() : 0;
    }

    /**
     * States whether the list is paginating, i.e. has a starting index
     * and/or a maximum numbe rof list items per page defined.
     * @return <code>true</code> if list is paginating, <code>false</code> otherwise
     */
    public boolean isPaginating() {
        return pageStart > 0 || (pageMaximum > 0 && size() > pageMaximum);
    }

    /**
     * Returns the starting index for list items on this page.
     * Used for pagination.
     * @return The start index of
     */
    public int getPageStart() {
        return pageStart;
    }

    /**
     * Returns the maximum of list items to return per page.
     * Used for pagination.
     * @return The maximum per page
     */
    public int getPageMaximum() {
        return pageMaximum;
    }

    /**
     * Returns the link to the page with the next set of list items.
     * Used for pagination.
     * @return The link to the next page
     */
    public String getNextPageLink() {
        if (isPaginating() && pageMaximum > 0) {
            if (pageStart + pageMaximum < size()) {
                int start = pageStart + pageMaximum;
                PageLink link = new PageLink(request);
                link.setParameter(PAGE_START_PARAM_NAME, start);
                return link.toString();
            }
        }
        return null;
    }

    /**
     * Returns the link to the page with the previous set of list items.
     * Used for pagination.
     * @return The link to the previous page
     */
    public String getPreviousPageLink() {
        if (isPaginating()) {
            if (pageStart > 0) {
                int start = pageMaximum > 0 && pageStart > pageMaximum ?
                        pageStart - pageMaximum : 0;
                PageLink link = new PageLink(request);
                link.setParameter(PAGE_START_PARAM_NAME, start);
                return link.toString();
            }
        }
        return null;
    }

    /**
     * Sets the source for the list. The value can be one of:
     * <ul>
     * <li>{@link #SOURCE_CHILDREN}</li>
     * <li>{@link #SOURCE_SEARCH}</li>
     * <li>{@link #SOURCE_STATIC}</li>
     * <li>{@link #SOURCE_QUERYBUILDER}</li>
     * </ul>
     * This is an optional setter, the default value will be
     * taken from the property defined by {@link #SOURCE_PROPERTY_NAME}.
     * @param src The list source
     */
    public void setSource(String src) {
        source = src;
    }

    /**
     * Sets the query for the search.
     * @param q The query
     */
    public void setQuery(String q) {
        query = q;
    }

    /**
     * Sets the the of the page to start searching on.
     * @param start The start page path
     */
    public void setStartIn(String start) {
        startIn = start;
    }

    /**
     * Returns the type of the list. This can be used to select the
     * script that renders the list items.
     * @return The list type
     */
    public String getType() {
        return type;
    }

    /**
     * Sets the type of the list.
     * This is an optional setter, the default value will be
     * taken from the property defined by {@link #TYPE_PROPERTY_NAME}.
     * @param t The list type
     */
    public void setType(String t) {
        type = t;
    }

    /**
     * Sets the comparator used to order the list with.
     * This is an optional setter and overrides #setOrderBy(String).
     * @param obc The comparator to order the list with
     */
    public void setOrderComparator(Comparator<Page> obc) {
        orderComparator = obc;
    }

    /**
     * Sets the property to order the list by.
     * This is an optional setter, the default value will be
     * taken from the property defined by {@link #ORDER_BY_PROPERTY_NAME}.
     * @param ob The property to order the list by
     */
    public void setOrderBy(String ob) {
        orderBy = ob;
    }

    /**
     * Sets the list style (numbered or not).
     * This is an optional setter, the default value will be <code>false</code>
     * @param o <code>true</code> if list should be rendered with numbered items,
     *          <code>false</code> otherwise
     */
    public void setOrdered(boolean o) {
        ordered = o;
    }

    /**
     * Sets the limit for list items.
     * This is an optional setter, the default value will be
     * taken from the property defined by {@link #LIMIT_PROPERTY_NAME}.
     * @param l The limit
     */
    public void setLimit(int l) {
        limit = l;
    }

    /**
     * Sets the maximum list items to return. Enables pagination.
     * This is an optional setter, the default value will be
     * taken from the property defined by {@link #PAGE_MAX_PROPERTY_NAME}.
     * @param pm The maximum number of pages per page
     */
    public void setPageMaximum(int pm) {
        pageMaximum = pm;
    }

    /**
     * Sets the starting index to be respected when returning
     * list items. Used when paginating.
     * @param psi The starting index (defaults to 0).
     */
    public void setPageStart(int psi) {
        pageStart = psi;
    }


    /**
     * Sets the page iterator to generate the list from.
     * @param iter The iterator
     */
    public void setPageIterator(Iterator<Page> iter) {
        pageIterator = iter;
        setSource(SOURCE_STATIC);
    }

    /**
     * Compares pages with eachother by property.
     */
    public class PageComparator<P extends Page> implements Comparator<P> {

        private String property;
        
        private boolean isDateProperty;

        /**
         * Creates a <code>PageComparator</code> instance using the
         * specified property for comparison.
         * @param prop The name of the property
         */
        public PageComparator(String prop) {
            property = prop;
            isDateProperty = isDate(prop);
        }

        /**
         * {@inheritDoc}
         */
        public int compare(P p1, P p2) {
            int comp = getKey(p1).compareTo(getKey(p2));
            return (comp != 0 && isDateProperty) ? -comp : comp;
        }

        private String getKey(P p) {
            return p.getProperties().get(property, "");
        }

        private boolean isDate(String prop) {
            return prop.matches("jcr:created") ||
                    prop.matches("cq:lastModified") ||
                    prop.matches("cq:lastPublished");
        }
    }

    /**
     * A helper class to create links with query parameters.
     */
    private class PageLink {

        private String path;
        private HashMap<String, Object> params;

        public PageLink(SlingHttpServletRequest request) {
            path = request.getPathInfo();
            initParams(request.getQueryString());
        }

        public void addParameter(String name, Object value) {
            name = prefixName(name);
            params.put(name, value);
        }

        public void setParameter(String name, Object value) {
            name = prefixName(name);
            if (params.containsKey(name)) {
                params.remove(name);
            }
            addParameter(name, value);
        }

        public String toString() {
            String url = path;
            for (String param : params.keySet()) {
                url = appendParam(url, param, params.get(param));
            }
            return url;
        }

        private String prefixName(String name) {
            if (!name.startsWith(id + "_")) {
                name = id + "_" + name;
            }
            return name;
        }

        private void initParams(String query) {
            params = new HashMap<String, Object>();
            String[] pairs = Text.explode(query, '&');
            for (String pair : pairs) {
                String[] param = Text.explode(pair, '=', true);
                params.put(param[0], param[1]);
            }
        }

        private String appendParam(String url, String name, Object value) {
            char delim = url.indexOf('?') > 0 ? '&' : '?';
            return new StringBuffer(url)
                    .append(delim)
                    .append(name)
                    .append('=')
                    .append(value).toString();
        }

    }


    /**
     * A helper class that iterates over the pages behind a hit iterator.
     */
    private class HitBasedPageIterator implements Iterator<Page> {
        
        private Iterator<Hit> hits;
        private Page nextPage;

        public HitBasedPageIterator(Iterator<Hit> hits) {
            this.hits = hits;
            this.nextPage = seek();
        }

        public boolean hasNext() {
            return nextPage != null;
        }

        public Page next() {
            if (!hasNext()) {
                throw new NoSuchElementException();
            }
            
            Page page = nextPage;
            nextPage = seek();
            return page;
        }

        private Page seek() {
            while (hits != null && hits.hasNext()) {
                try {
                    return hits.next().getResource().adaptTo(Page.class);
                } catch (RepositoryException e) {
                    log.error("Could not get page behind search result hit", e);
                }
            }

            return null;
        }

        public void remove() {
            throw new UnsupportedOperationException();
        }
        
    }}
