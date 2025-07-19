package com.t4g.cnb.tag;

import com.t4g.cnb.utils.ResourceUtils;
import javax.jcr.Session;
import javax.jcr.observation.*;
import javax.jcr.observation.Event;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.apache.sling.jcr.api.SlingRepository;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Component(service = TagAudit.class, immediate = true)
public class TagAudit implements EventListener {

  /** Default log. */
  protected final Logger log = LoggerFactory.getLogger(this.getClass());

  @Reference
  private SlingRepository repository; //It's being unused, should remove it during 1B milestone.

  @Reference
  private ResourceResolverFactory resolverFactory;

  public void bindRepository(SlingRepository repository) throws Exception {
    log.info("Getting repository for tag audit");
    this.repository = repository;
    activate();
  }

  private Session session;

  private ResourceResolver resolver;

  public void activate() {
    log.info("Registering tag audit event listener");
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
            Event.NODE_ADDED |
            Event.NODE_REMOVED |
            Event.PROPERTY_CHANGED |
            Event.PROPERTY_ADDED |
            Event.PROPERTY_REMOVED,
            "/content/cq:tags",
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
    log.info("Tag changed");
    try {
      while (events.hasNext()) {
        Event event = events.nextEvent();
        String message = "";
        if (event.getType() == Event.NODE_ADDED) {
          message = "added the tag";
        } else if (event.getType() == Event.NODE_REMOVED) {
          message = "removed the tag";
        } else if (event.getType() == Event.PROPERTY_CHANGED) {
          message = "changed property";
        } else if (event.getType() == Event.PROPERTY_ADDED) {
          message = "added property";
        } else if (event.getType() == Event.PROPERTY_REMOVED) {
          message = "removed property";
        } else {
          message = "performed some action on";
        }

        log.info(event.getUserID() + " " + message + " " + event.getPath());
      }
    } catch (Exception e) {
      log.error("Error in TagAudit");
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
      log.info("Shutting Down Tag audit");
    } catch (Exception e) {
      try {
        log.error("Error deactivating Tag Audit\nsession: " + session);
        log.error("WorkSpace: " + session.getWorkspace());
        log.error("ObservationManager: " + session.getWorkspace().getObservationManager());
        log.error("error: " + e.getMessage());
      } catch (Exception ex) {}
    }
  }
}
