package schoolwebsite;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONException;
import org.json.JSONObject;

/**
 * Servlet implementation class schoolservlet
 */
@WebServlet("/schoolservlet")
public class schoolservlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public schoolservlet() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String operation=request.getParameter("operation");
		schoolclass schoolObject=new schoolclass();
		if(operation.equals("register"))
		{
			String  name= request.getParameter("name");
			String email=request.getParameter("email");
			String mobileNo=request.getParameter("mobileNo");
			String location=request.getParameter("location");
			String inst=request.getParameter("inst");
			String role=request.getParameter("role");
			String website=request.getParameter("website");
			String message=request.getParameter("message");
			
			JSONObject result;
			try{
				result= schoolObject.register(name,email,mobileNo,location,inst,role,website,message);
				response.getWriter().print (result);
			}
			catch(JSONException e)
			
			{
			e.printStackTrace();
				
			}
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
