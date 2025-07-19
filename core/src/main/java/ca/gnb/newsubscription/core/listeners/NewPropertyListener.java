package ca.gnb.newsubscription.core.listeners;

import com.day.cq.commons.jcr.JcrConstants;
import com.day.cq.mailer.MessageGateway;
import com.day.cq.mailer.MessageGatewayService;
import com.day.cq.replication.ReplicationStatus;
import com.day.cq.replication.Replicator;
import com.day.cq.tagging.Tag;
import com.day.cq.tagging.TagManager;
import com.day.cq.wcm.api.NameConstants;
import com.t4g.cnb.utils.ResourceUtils;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.Calendar;
import javax.jcr.Node;
import javax.jcr.PathNotFoundException;
import javax.jcr.Property;
import javax.jcr.RepositoryException;
import javax.jcr.Session;
import javax.jcr.Value;
import javax.jcr.ValueFormatException;
import javax.jcr.observation.Event;
import javax.jcr.observation.EventIterator;
import javax.jcr.observation.EventListener;
import javax.jcr.observation.ObservationManager;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.mail.EmailException;
import org.apache.commons.mail.HtmlEmail;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.apache.sling.jcr.api.SlingRepository;
import org.osgi.service.component.ComponentContext;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Deactivate;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Component(immediate = true, service = EventListener.class)
public class NewPropertyListener implements EventListener {

  private static final String READ_SERVICE_NAME = "readService";

  private static final String WRITE_SERVICE_NAME = "writeService";

  public enum Status {
    ACTIVATED,
    DEACTIVATED,
    IN_PROGRESS,
    MODIFIED,
    NOT_ACTIVATED
  }

  Logger log = LoggerFactory.getLogger(this.getClass());
  private Session session;
  private ResourceResolver resolver;

  @Reference
  private ResourceResolverFactory resolverFactory;

  @Reference
  SlingRepository repository;

  @Reference
  private MessageGatewayService messageGatewayService;

  @Reference
  private Replicator replicator;

  private ObservationManager observationManager;

  @Activate
  public void activate(ComponentContext context) throws Exception {
    log.info("******* STARTING new subscription Observation *******");
    try {
      resolver = ResourceUtils.getWriteResourceResolver(resolverFactory);
      session = ResourceUtils.getServiceUserSession(resolver);
      session
        .getWorkspace()
        .getObservationManager()
        .addEventListener(
          this, // handler
          Event.PROPERTY_ADDED | Event.PROPERTY_CHANGED, // binary combination of event types
          "/content", // path
          true, // is Deep?
          null, // uuids filter
          null, // nodetypes filter
          false
        );
      log.info("******* LOADED new subscription Observation inside TRY *******");
    } catch (RepositoryException e) {
      log.error("unable to register session", e);
      throw new Exception(e);
    } catch (NullPointerException e) {
      log.error("Failed to retrieve from resource service", e);
    }
  }

  @Deactivate
  protected void deactivate(ComponentContext componentContext) {
    try {
      log.info("******* ENDING new subscription Observation *******");
      if (observationManager != null) {
        observationManager.removeEventListener(this);
        log.info("******* Removed JCR event subscription listener-inside TRY *******");
      }
    } catch (RepositoryException re) {
      log.error("******* Error removing the JCR event subscription listener *******", re);
    } finally {
      ResourceUtils.terminateSession(session);
      ResourceUtils.terminateResourceResolver(resolver);
      log.info("******* Removed JCR event subscription listener inside FINALLY*******");
    }
  }

  public void onEvent(EventIterator it) {
    // START of try-catch
    try {
      // START while
      while (it.hasNext()) {
        Event event = it.nextEvent();
        log.info("******* Something has been added : {}", event.getPath());

        Property changedProperty = session.getProperty(event.getPath());
        String nodePath = changedProperty.getPath();
        log.info("******* New subscription node path : {}", nodePath);

        ResourceResolver resourceResolver = ResourceUtils.getWriteResourceResolver(resolverFactory);
        Node parent = changedProperty.getParent(); // jcr:content node
        //				if (parent.hasProperty("cq:lastReplicated")) {
        //					log.info("*******INSIDE of IF changedProperty.getParent() ******* {} ", changedProperty.getParent());
        //
        //				}
        // finding path like /content/gnb/en
        String event_node = changedProperty.getPath().toString();
        int index_0 = event_node.indexOf("/jcr:content");
        if (index_0 != -1) {
          //log.error("index_0 in onEvent: " + index_0);
          String sub_event_node = event_node.substring(0, index_0);

          String status_activation = getReplicationStatus(resourceResolver, sub_event_node);
          log.info("******* status_activation ******* {} ", status_activation);

          // START checking activation
          // if (changedProperty.getName().equalsIgnoreCase("cq:lastReplicated") &&
          // parent.hasProperty("cq:lastReplicated")) {
          if (
            status_activation.equals("ACTIVATED") &&
            changedProperty.getName().equalsIgnoreCase("cq:lastReplicated") &&
            parent.hasProperty("cq:lastReplicated")
          ) {
            log.info("******* Just after if statement for cq:lastReplicated *******  ");
            log.info("******* changedProperty.isModified() ******* {} ", changedProperty.isModified());
            log.info("******* changedProperty.getName() ******* {} ", changedProperty.getName().toString());
            log.info("******* changedProperty.isNew() ******* {} ", changedProperty.isNew());
            log.info("******* changedProperty.getPath() ******* {} ", changedProperty.getPath().toString());
            log.info("******* changedProperty.getParent() ******* {} ", changedProperty.getParent().toString());
            log.info("******* changedProperty.getString() ******* {} ", changedProperty.getString());

            @SuppressWarnings("unused")
            InetAddress inetAddress = InetAddress.getLocalHost();
            // String hostname = inetAddress.getHostName();
            // String localHost = inetAddress.getLocalHost().getHostName();
            // START GNB
            // START GNB dam asset
            if (nodePath.contains("/content/dam/gnb")) {
              if (nodePath.contains("/jcr:content")) {
                // String webPathDomain = "https://www2.gnb.ca" + hostname;
                String webPathDomain = "https://www2.gnb.ca";
                emailDAM(webPathDomain, resourceResolver, nodePath, event);
                log.info("******* GNB dam email done ******* {} ", nodePath);
              }
            }
            // END GNB dam asset
            // START GNB page
            else if (nodePath.contains("/content/gnb")) {
              if (nodePath.contains("/jcr:content")) {
                // String webPathDomain = "https://www2.gnb.ca" + hostname;
                String webPathDomain = "https://www2.gnb.ca";
                emailPAGE(webPathDomain, resourceResolver, nodePath, event);
                log.info("******* GNB page email done ******* {} ", nodePath);
              }
            }
            // END GNB page
            // END GNB

            // START SNB
            // START SNB dam asset
            else if (nodePath.contains("/content/dam/snb")) {
              if (nodePath.contains("/jcr:content")) {
                String webPathDomain = "https://www2.snb.ca";
                emailDAM(webPathDomain, resourceResolver, nodePath, event);
                log.info("******* SNB dam email done ******* {} ", nodePath);
              }
            }
            // END SNB dam asset
            // START SNB page
            else if (nodePath.contains("/content/snb")) {
              if (nodePath.contains("/jcr:content")) {
                String webPathDomain = "https://www2.snb.ca";
                emailPAGE(webPathDomain, resourceResolver, nodePath, event);
                log.info("******* SNB page email done ******* {}", nodePath);
              }
            }
            // END SNB page
            // END GNB

            // START ENB
            // START ENB dam asset
            else if (nodePath.contains("/content/dam/enb")) {
              if (nodePath.contains("/jcr:content")) {
                String webPathDomain = "https://www.electionsnb.ca";
                emailDAM(webPathDomain, resourceResolver, nodePath, event);
                log.info("******* ENB dam email done ******* {}", nodePath);
              }
            }
            // END SNB dam asset
            // START ENB page
            else if (nodePath.contains("/content/enb")) {
              if (nodePath.contains("/jcr:content")) {
                String webPathDomain = "https://www.electionsnb.ca";
                emailPAGE(webPathDomain, resourceResolver, nodePath, event);
                log.info("******* ENB page email done ******* {}", nodePath);
              }
            }
            // END ENB page
            // END ENB

            // START IMMIGRATION
            // START IMMIGRATION dam asset
            else if (nodePath.contains("/content/dam/wel-bien")) {
              if (nodePath.contains("/jcr:content")) {
                String webPathDomain = "https://www.welcomenb.ca";
                emailDAM(webPathDomain, resourceResolver, nodePath, event);
                log.info("******* Immigration dam email done ******* {}", nodePath);
              }
            }
            // END IMMIGRATION dam asset
            // START IMMIGRATION page
            else if (nodePath.contains("/content/wel-bien")) {
              if (nodePath.contains("/jcr:content")) {
                String webPathDomain = "https://www.welcomenb.ca";
                emailPAGE(webPathDomain, resourceResolver, nodePath, event);
                log.info("******* Immigration page email done ******* {}", nodePath);
              }
            }
            // END IMMIGRATION page
            // END IMMIGRATION

            // START MYID
            // START MYID dam asset
            else if (nodePath.contains("/content/dam/myid")) {
              if (nodePath.contains("/jcr:content")) {
                String webPathDomain = "https://myid.gnb.ca";
                emailDAM(webPathDomain, resourceResolver, nodePath, event);
                log.info("******* MYID dam email done ******* {}", nodePath);
              }
            }
            // END MYID dam asset
            // START MYID page
            else if (nodePath.contains("/content/myid-monid")) {
              if (nodePath.contains("/jcr:content")) {
                String webPathDomain = "https://myid.gnb.ca";
                emailPAGE(webPathDomain, resourceResolver, nodePath, event);
                log.info("******* MYID page email done ******* {}", nodePath);
              }
            }
            // END MYID page
            // END MYID

            // START Auditor General
            // START Auditor General dam asset
            else if (nodePath.contains("/content/dam/agnb-vgnb")) {
              if (nodePath.contains("/jcr:content")) {
                String webPathDomain = "https://www.agnb-vgnb.ca";
                emailDAM(webPathDomain, resourceResolver, nodePath, event);
                log.info("******* Auditor General dam email done ******* {}", nodePath);
              }
            }
            // ENDAuditor General dam asset
            // START Auditor General page
            else if (nodePath.contains("/content/agnb-vgnb")) {
              if (nodePath.contains("/jcr:content")) {
                String webPathDomain = "https://www.agnb-vgnb.ca";
                emailPAGE(webPathDomain, resourceResolver, nodePath, event);
                log.info("******* Auditor General page email done ******* {}", nodePath);
              }
            }
            // END Auditor General page
            // END Auditor General
            // START Workers' Compensation Appeals Tribunal
            // START WCAT dam asset
            else if (nodePath.contains("/content/dam/wcat")) {
              if (nodePath.contains("/jcr:content")) {
                String webPathDomain = "https://www.nbwcat-taatnb.ca";
                emailDAM(webPathDomain, resourceResolver, nodePath, event);
                log.info("******* WCAT dam email done ******* {}", nodePath);
              }
            }
            // END WCAT dam asset
            // START WCAT page
            else if (nodePath.contains("/content/wcat-taat")) {
              if (nodePath.contains("/jcr:content")) {
                String webPathDomain = "https://www.nbwcat-taatnb.ca";
                emailPAGE(webPathDomain, resourceResolver, nodePath, event);
                log.debug("******* WCAT page email done ******* {}", nodePath);
              }
            }
            // END WCAT page
            // END Workers' Compensation Appeals Tribunal

          }
        }

        // END checking activation
        ResourceUtils.terminateResourceResolver(resourceResolver);
      }
      // END while
    } catch (RepositoryException e) {
      log.error("Error in Property changedPrpperty", e);
    } catch (UnknownHostException e) {
      log.error("error in InetAddress inetAddress", e);
      e.printStackTrace();
    } catch (IllegalStateException e) {
      log.error("error in emailPAGE(webPathDomain, resourceResolver, nodePath, event)", e);
      e.printStackTrace();
    } catch (EmailException e) {
      log.error("error in emailPAGE(webPathDomain, resourceResolver, nodePath, event)", e);
      e.printStackTrace();
    } catch (NullPointerException e) {
      log.error("Failed to retrieve from resource service", e);
    }
    // END of try-catch
  }

  // getting status of activation, deactivation, etc...
  private String getReplicationStatus(ResourceResolver resourceResolver, String path) {
    // TODO Auto-generated method stub
    log.info("1-Getting replication status for {}", path);

    if (path.contains(JcrConstants.JCR_CONTENT)) {
      path = StringUtils.substringAfter(path, JcrConstants.JCR_CONTENT) + JcrConstants.JCR_CONTENT;
    } else {
      path += "/" + JcrConstants.JCR_CONTENT;
    }

    log.info("2-Getting replication status for {}", path);

    ReplicationStatus status = replicator.getReplicationStatus(session, path);

    Status rStatus = Status.NOT_ACTIVATED;
    if (status != null) {
      if (status.isDeactivated()) {
        rStatus = Status.DEACTIVATED;
      } else if (status.isPending()) {
        rStatus = Status.IN_PROGRESS;
      } else if (status.isActivated()) {
        Calendar lastModified = getLastModified(resourceResolver, path);
        if (
          lastModified != null && status.getLastPublished() != null && lastModified.after(status.getLastPublished())
        ) {
          rStatus = Status.MODIFIED;
        } else {
          rStatus = Status.ACTIVATED;
        }
      }
    }

    log.info("Retrieved replication status {}", rStatus);
    return rStatus.toString();
  }

  // getting last modified date
  private Calendar getLastModified(ResourceResolver resourceResolver, String pageContentPath) {
    // TODO Auto-generated method stub
    Resource pageContent = resourceResolver.getResource(pageContentPath);
    Calendar lastModified = null;
    if (pageContent != null) {
      lastModified = pageContent.getValueMap().get(NameConstants.PN_PAGE_LAST_MOD, Calendar.class);
    }
    return lastModified;
  }

  // START emailPage method
  @SuppressWarnings("unused")
  private void emailPAGE(String webPathDomain, ResourceResolver resourceResolver, String nodePath, Event event)
    throws EmailException, ValueFormatException, IllegalStateException, PathNotFoundException, RepositoryException {
    /// START
    int leng_page = nodePath.length();
    int index_page = nodePath.indexOf("/jcr:content");
    String page_sub = nodePath.substring(0, index_page + 12);
    // String web_path = "https://www2.gnb.ca" + nodePath.substring(0, index_page) +
    // ".html";
    String web_path = webPathDomain + nodePath.substring(0, index_page) + ".html";

    // Property contentProperty = session.getProperty(page_sub);
    Resource res = resourceResolver.getResource(page_sub);

    Node node = null;
    String title = ""; // title
    String jcrTitle = ""; // jcr:title property -3
    String navTitle = ""; // navTitle property -2
    String pageTitle = ""; // pageTitle property -1

    String subscription = ""; // subscription property
    String subscriptionID = ""; // subscriptionID property

    if (res != null) {
      node = res.adaptTo(Node.class);

      // setting title
      if (node.hasProperty("jcr:title")) {
        jcrTitle = node.getProperty("jcr:title").getValue().getString();
      }
      if (node.hasProperty("navTitle")) {
        navTitle = node.getProperty("navTitle").getValue().getString();
      }
      if (node.hasProperty("pageTitle")) {
        pageTitle = node.getProperty("pageTitle").getValue().getString();
      }
      title = pageTitle != "" ? pageTitle : navTitle != "" ? navTitle : jcrTitle;

      if ((node.hasProperty("subscription")) && (node.hasProperty("subscriptionID")) && (node.hasProperty("cq:tags"))) {
        subscription = node.getProperty("subscription").getValue().getString();
        subscriptionID = node.getProperty("subscriptionID").getValue().getString();
        boolean nullCheck = subscriptionID == null || subscriptionID.isEmpty();

        Property cqtag = node.getProperty("cq:tags");
        Value[] values = cqtag.getValues();

        //this is to check null for tagTitle
        TagManager tm = resourceResolver.adaptTo(TagManager.class);
        String tagTitle = null;
        for (Value value : values) {
          Tag tag = tm.resolve(value.toString());
          if (tag != null) {
            if (tagTitle == null) {
              tagTitle = tag.getTitle() + "<br/>";
            } else {
              tagTitle = tagTitle + " " + tag.getTitle() + "<br/>";
            }
          }
        }

        if (subscription.equalsIgnoreCase("true") && !nullCheck && tagTitle != null) {
          sendingEmail(resourceResolver, values, event, web_path, title, subscription, subscriptionID);
        }
      }
    }
    log.debug("******* emailPAGE subscription END: {} *******", title);
    ///// END

  }

  // END of emailPAGE method

  // START emailDAM method
  private void emailDAM(String webPathDomain, ResourceResolver resourceResolver, String nodePath, Event event)
    throws ValueFormatException, IllegalStateException, PathNotFoundException, RepositoryException, EmailException {
    /////// START
    // tricky part in finding /metadata node for resource
    int index_page = nodePath.indexOf("/jcr:content");
    String page_sub = nodePath.substring(0, index_page + 12) + "/metadata";
    // String web_path = "https://www2.gnb.ca" + nodePath.substring(0, index_page);
    String web_path = webPathDomain + nodePath.substring(0, index_page);
    Resource res = resourceResolver.getResource(page_sub);
    Node node = null;
    String title = ""; // title
    String damTitleE = "Title-EN"; // jcr:title property -3
    String damTitleF = "Title-FR"; // navTitle property -2
    String subscription = ""; // subscription property
    String subscriptionID = ""; // subscriptionID property
    @SuppressWarnings("unused")
    String cq_lastReplicated = ""; // subscriptionID property
    if (res != null) {
      node = res.adaptTo(Node.class);
      // setting title
      if (node.hasProperty("dam:title_E")) {
        damTitleE = node.getProperty("dam:title_E").getValue().getString();
      }
      if (node.hasProperty("dam:title_F")) {
        damTitleF = node.getProperty("dam:title_F").getValue().getString();
      }
      title = damTitleE + " / " + damTitleF;
      if ((node.hasProperty("subscription")) && (node.hasProperty("subscriptionID")) && (node.hasProperty("cq:tags"))) {
        subscription = node.getProperty("subscription").getValue().getString();
        subscriptionID = node.getProperty("subscriptionID").getValue().getString().trim();
        boolean nullCheck = subscriptionID == null || subscriptionID.isEmpty();

        Property cqtag = node.getProperty("cq:tags");
        Value[] values = cqtag.getValues();

        //this is to check null for tagTitle
        TagManager tm = resourceResolver.adaptTo(TagManager.class);
        String tagTitle = null;

        for (Value value : values) {
          Tag tag = tm.resolve(value.toString());
          if (tag != null) {
            if (tagTitle == null) {
              tagTitle = tag.getTitle() + "<br/>";
            } else {
              tagTitle = tagTitle + " " + tag.getTitle() + "<br/>";
            }
          }
        }

        if (subscription.equalsIgnoreCase("true") && !nullCheck && tagTitle != null) {
          sendingEmail(resourceResolver, values, event, web_path, title, subscription, subscriptionID); //
        }
      }
    }
    //// END
    log.debug("******* emailDAM subscription END: {} *******", title);
  }

  // END of emailDAM method

  // START sendingEmail method
  private void sendingEmail(
    ResourceResolver resourceResolver,
    Value[] values,
    Event event,
    String web_path,
    String title,
    String subscription,
    String subscriptionID
  ) throws EmailException, RepositoryException {
    log.info("******* START sendingEmail subscription *******");
    // getting tags
    TagManager tm = resourceResolver.adaptTo(TagManager.class);
    String tagTitle = null;

    for (Value value : values) {
      Tag tag = tm.resolve(value.toString());
      if (tag != null) {
        if (tagTitle == null) {
          tagTitle = tag.getTitle() + "<br/>";
        } else {
          tagTitle = tagTitle + " " + tag.getTitle() + "<br/>";
        }
      }
    }

    ////// START
    /** START of Email setting **/
    // Declare a MessageGateway service
    MessageGateway<HtmlEmail> messageGateway;

    // Set up the Email message
    // Email email = new SimpleEmail();
    HtmlEmail email = new HtmlEmail();
    // setting language
    String language = "bilingual";
    if (web_path.contains("/fr/")) {
      language = "fr";
    } else if (web_path.contains("/en/")) {
      language = "en";
    }

    // Set the mail values
    String emailToRecipients1 = "subscriptions@gnb.ca";
    String emailToRecipients3 = "keehwan.jee@snb.ca";
    String emailCcRecipients = "keehwan.jee@gmail.com";
    String emailCcRecipients2 = "Jerry.LeBlanc@snb.ca";
    String emailFrom = "No-Reply@gnb.ca";

    email.addTo(emailToRecipients1);
    email.addTo(emailToRecipients3);
    email.addCc(emailCcRecipients);
    email.addCc(emailCcRecipients2);

    email.setSubject("GNB Subscription Service");
    //email.setFrom(emailToRecipients1);
    email.setFrom(emailFrom);

    StringBuilder message = new StringBuilder();
    message.append("This message is to inform you that this is an email for subscription.");
    message.append("<br/>");
    message.append("<br/>");
    message.append("------------------------");
    message.append("<br/>");
    message.append("<br/>");
    message.append("Language : " + language);
    message.append("<br/>");
    message.append("Event path : " + event.getPath());
    message.append("<br/>");
    message.append("Web address : " + web_path);
    message.append("<br/>");
    message.append("Page title : " + title);
    message.append("<br/>");
    message.append("Subscription : " + subscription);
    message.append("<br/>");
    message.append("Subscription ID : " + subscriptionID);
    message.append("<br/>");
    message.append("Type : " + "PUBLISH");
    message.append("<br/>");
    message.append("Tags : <br/>" + tagTitle);
    message.append("<br/>");

    email.setHtmlMsg(message.toString());

    // Inject a MessageGateway Service and send the message
    messageGateway = messageGatewayService.getGateway(HtmlEmail.class);

    // Check the logs to see that messageGateway is not null
    messageGateway.send((HtmlEmail) email);
    log.info("******* END sendingEmail subscription *******");
    /** END of Email setting **/
    /// END
  }
  // END sendingEmail method

}
