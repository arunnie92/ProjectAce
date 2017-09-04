package backend;

import java.sql.ResultSet;
import java.sql.SQLException;

public class User {

	private static DatabaseConnector user;
	
	public User(DatabaseConnector user) {
		super();
		this.user = user;
	}
	
	public void addUser(String query) throws SQLException{
		user.input(query);
	}
	
	public boolean validateUser(String email, String password) throws SQLException{
		ResultSet isValid = user.results("SELECT * FROM users WHERE email = " + email + " AND password = "+ password + ";");
		// do a different test beside null
		if (isValid != null) {
			return true;
		} else {
			return false;
		}
	}
	
	public void getUser(String query){
	}
	
	public void updateInformation(){}
	
	// double check if all query works
	public static boolean update(String category, String information, String email) throws SQLException {
		String query = "";
		boolean update = false;
		switch (category.toLowerCase()) {
			case "email":
				query = "UPDATE users SET EMAIL = " + information + " WHERE EMAIL = " + email;
				break;
			case "password":
				query = "UPDATE users SET PASSWORD = " + information + " WHERE EMAIL = " + email;
				break;
			case "gender": 
				query = "UPDATE users SET GENDER = " + information + " WHERE EMAIL = " + email;
				break;
			case "full_name":
				query = "UPDATE users SET FULL_NAME = " + information + " WHERE EMAIL = " + email;
				break;
			case "age":
				query = "UPDATE users SET AGE = " + information + " WHERE EMAIL = " + email;
				break;
			case "occupation":
				query = "UPDATE users SET OCCUPATION = " + information + " WHERE EMAIL = " + email;
				break;
			case "employer":
				query = "UPDATE users SET EMPLOYER = " + information + " WHERE EMAIL = " + email;
				break;
			case "major":
				query = "UPDATE users SET MAJOR = " + information + " WHERE EMAIL = " + email;
				break;
			case "university":
				query = "UPDATE users SET UNIVERSITY = " + information + " WHERE EMAIL = " + email;
				break;
			case "description":
				query = "UPDATE users SET DESCRIPTION = " + information + " WHERE EMAIL = " + email;
				break;
			default:
				query = "";
				break;
		}
		
		if (!query.isEmpty()) {
			update = user.input(query);
		}
		return update;
	}
	
	public void seeking(){}
	
	public void match(){}
	
	public void getMatches(){}
	
}
