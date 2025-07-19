package com.t4g.cnb.tag;

import com.t4g.cnb.utils.ResourceUtils;
import java.util.ArrayList;
import javax.jcr.Property;
import javax.jcr.Session;
import javax.jcr.Value;
import javax.jcr.observation.*;
import javax.jcr.observation.Event;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.apache.sling.jcr.api.SlingRepository;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Component(service = TaggingAudit.class, immediate = true)
public class TaggingAudit implements EventListener {

  /** Default log. */
  protected final Logger log = LoggerFactory.getLogger(this.getClass());

  @Reference
  private SlingRepository repository; //It's being unused, should remove it during 1B milestone.

  @Reference
  private ResourceResolverFactory resolverFactory;

  public void bindRepository(SlingRepository repository) throws Exception {
    log.info("Getting repository for tagging audit");
    this.repository = repository;
    activate();
  }

  private Session session;
  private ResourceResolver resolver;

  public void activate() {
    log.info("Registering tagging audit event listener");
    resolver = null;
    try {
      if (session == null) {
        resolver = ResourceUtils.getWriteResourceResolver(resolverFactory);
        session = ResourceUtils.getServiceUserSession(resolver);
        // set up observation listener
        session
          .getWorkspace()
          .getObservationManager()
          .addEventListener(
            this,
            Event.PROPERTY_CHANGED | Event.PROPERTY_ADDED | Event.PROPERTY_REMOVED,
            "/content",
            true,
            null,
            null,
            true
          );
        log.info("Event Listener Registered");
      }
    } catch (Exception e) {
      log.error("Unable to retrieve session. ", e);
    }
  }

  public void onEvent(EventIterator events) {
    ArrayList list;
    if (events.getSize() > 1) {
      list = new ArrayList((int) events.getSize());
    } else {
      list = new ArrayList();
    }
    try {
      while (events.hasNext()) {
        Event event = events.nextEvent();
        boolean alreadyFound = false;
        for (int i = 0; i < list.size(); i++) {
          if (event.getPath().equals(list.get(i))) {
            alreadyFound = true;
          }
        }
        if (!alreadyFound) {
          list.add(event.getPath());
          if (event.getPath().endsWith("cq:tags")) {
            String message = "";
            if (event.getType() == Event.PROPERTY_CHANGED) {
              message = "modified tag(s) from";
            } else if (event.getType() == Event.PROPERTY_ADDED) {
              message = "modified tag(s) from";
            } else if (event.getType() == Event.PROPERTY_REMOVED) {
              message = "modified tag(s) from";
            } else {
              message = "performed some action on";
            }
            String path = event.getPath();
            if (path.endsWith("/jcr:content/cq:tags")) {
              path = path.substring(0, path.length() - "/jcr:content/cq:tags".length());
            }
            if (path.endsWith("/jcr:content/metadata/cq:tags")) {
              path = path.substring(0, path.length() - "/jcr:contentmetadata/cq:tags".length());
            }
            log.info(event.getUserID() + " " + message + " " + path);
            log.info("The current tags are as follows:");

            if (
              session.itemExists(event.getPath()) &&
              session.getItem(event.getPath()) != null &&
              ((Property) session.getItem(event.getPath())).getValues() != null
            ) {
              Property prop = (Property) session.getItem(event.getPath());
              Value[] values = prop.getValues();
              for (int i = 0; i < values.length; i++) {
                log.info(values[i].getString());
              }
            } else {
              log.info("no tags");
            }
          }
        }
      }
    } catch (Exception e) {
      log.error("Error in TaggingAudit: " + e.getMessage());
    }
  }

  /**
   *
   *
   * deactivate
   */
  public void deactivate(SlingRepository repository) {
    try {
      session.getWorkspace().getObservationManager().removeEventListener(this);
      ResourceUtils.terminateSession(session);
      ResourceUtils.terminateResourceResolver(resolver);
      log.info("Shutting Down Tagging audit");
    } catch (Exception e) {
      try {
        log.error("Error deactivating Tagging Audit\nsession: " + session);
        log.error("WorkSpace: " + session.getWorkspace());
        log.error("ObservationManager: " + session.getWorkspace().getObservationManager());
        log.error("error: " + e.getMessage());
      } catch (Exception ex) {}
    }
  }
}
