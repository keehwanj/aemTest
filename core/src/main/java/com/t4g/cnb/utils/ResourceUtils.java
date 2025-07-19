package com.t4g.cnb.utils;

import java.util.Collections;
import java.util.Map;
import javax.jcr.Session;
import org.apache.sling.api.resource.LoginException;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ResourceUtils {

  private static final Logger LOGGER = LoggerFactory.getLogger(ResourceUtils.class);

  private static final String WRITE_SERVICE_NAME = "writeService";

  public static Session getServiceUserSession(ResourceResolver resourceResolver) throws NullPointerException {
    if (resourceResolver == null) {
      throw new NullPointerException("Failed to retrieve session.");
    }
    return resourceResolver.adaptTo(Session.class);
  }

  public static ResourceResolver getWriteResourceResolver(ResourceResolverFactory resolverFactory)
    throws NullPointerException {
    ResourceResolver resolver = getResourceResolver(resolverFactory);

    if (resolver == null) {
      throw new NullPointerException("Failed to retrieve resource resolver.");
    }
    return resolver;
  }

  public static void terminateResourceResolver(ResourceResolver resourceResolver) {
    if (resourceResolver != null) {
      resourceResolver.close();
    }
  }

  public static void terminateSession(Session session) {
    if (session != null) {
      session.logout();
    }
  }

  private static ResourceResolver getResourceResolver(ResourceResolverFactory resolverFactory) {
    ResourceResolver resolver = null;
    Map<String, Object> authInfo;
    try {
      authInfo = Collections.singletonMap(ResourceResolverFactory.SUBSERVICE, WRITE_SERVICE_NAME);
      resolver = resolverFactory.getServiceResourceResolver(authInfo);
    } catch (LoginException e) {
      LOGGER.error("Login Exception while getting resource resolver", e);
    }
    return resolver;
  }
}
