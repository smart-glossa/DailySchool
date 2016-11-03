package schoolwebsite;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

import org.json.JSONException;
import org.json.JSONObject;

public class schoolclass {
	public JSONObject register(String name,String email,String mobileNo,String location,String inst,String role,String website,String message) throws JSONException{
		JSONObject result=new JSONObject();
		try{
			Class.forName("com.mysql.jdbc.Driver");
			Connection con =DriverManager.getConnection("jdbc:mysql://localhost:3306/schoolwebsite","root","root");
			Statement statement = con.createStatement();
			String query= "Insert into register values('"+ name + "','" + email + "','" + mobileNo +"','" + location + "','" + inst + "','" + role + "','" + website + "','"+ message + "')";
			
			statement.execute(query);
			result.put("Status" , "1");
					
		}
		catch(Exception e){
			JSONObject error= new JSONObject();
			error.put("Status" , "0");
			error.put("Message",e.getMessage());
			return error;
			
			
		}
		return result;
		}
}
