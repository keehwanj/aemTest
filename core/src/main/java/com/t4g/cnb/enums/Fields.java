package com.t4g.cnb.enums;

public enum Fields {
  ORG_INFORMATION("orginfo"),
  SVC_INFORMATION("serviceinfo"),
  CNTCT_INFORMATION("contactinfo"),
  ORGANIZATIONS("organizations"),
  ORGANIZATIONS_PROP("ORGANIZATIONS"),
  ORGANIZATION_PATH_PROP("ORGANIZATION_PATH"),
  SERVICES_PROP("SERVICES"),
  DEPARTMENT_ID("DEPTID"),
  ORGANIZATION_LEVEL("ORGLEVEL"),
  ORGANIZATION_ID("ORGID"),
  SERVICE_ID("SERVICEID"),
  SERVICES_ID("SERVICESID"),
  GENDER_MALE_FRE("Homme");

  private final String text;

  Fields(String text) {
    this.text = text;
  }

  public String text() {
    return this.text;
  }
}
