package com.t4g.cnb.schedule;

import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * This service executes scheduled replication jobs
 */
public class ReplicationScheduler implements BundleActivator {

  /** Default log. */
  protected final Logger log = LoggerFactory.getLogger(this.getClass());

  public void start(BundleContext context) throws Exception {
    log.info("Activated, Replication Scheduler!");
  }

  public void stop(BundleContext context) throws Exception {
    log.info("Deactivated, Replication Scheduler!");
  }

}
