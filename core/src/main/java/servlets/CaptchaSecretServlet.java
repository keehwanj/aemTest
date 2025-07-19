package servlets;

import com.day.text.Text;
import com.google.gson.JsonObject;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.Servlet;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.apache.sling.servlets.annotations.SlingServletResourceTypes;
import org.osgi.service.component.annotations.Component;

@Component(service = { Servlet.class })
@SlingServletResourceTypes(
  resourceTypes = "gnb/servlets/captchaSecretServlet",
  methods = "GET",
  extensions = "json",
  selectors = "captcha"
)
public class CaptchaSecretServlet extends SlingSafeMethodsServlet {

  JsonObject json = new JsonObject();

  @Override
  protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {
    String captchaKey = request.getParameter("id");
    String hours = "" + (System.currentTimeMillis() / (60 * 1000));
    String captcha = (Text.md5("" + (captchaKey + hours))).substring(1, 6);
    json.addProperty("captcha", captcha);
    PrintWriter out = response.getWriter();
    response.setContentType("application/json");
    response.setCharacterEncoding("UTF-8");
    out.print(json.toString());
    out.flush();
  }
}
