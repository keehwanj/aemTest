package com.t4g.cnb.schedule;

import com.t4g.cnb.utils.CacheLoad;
import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoadingScheduler implements BundleActivator {

  /** Default log. */
  protected final Logger log = LoggerFactory.getLogger(this.getClass());

  public void start(BundleContext context) throws Exception {
    log.info("Activated, Loading Cache!");
    log.info("Initializing Departments Cache...!");
    //CacheLoad cl = new CacheLoad();
    //cl.initDeptMap();
  }

  public void stop(BundleContext context) throws Exception {
    log.info("Deactivated, Loading Cache!");
  }
}
