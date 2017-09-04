package database;

import java.sql.*;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			String driver = "com.mysql.jdbc.Driver";
			String url = "jdbc:mysql://localhost:3306/ace";
			String username = "root";
			String password = "password";
			Class.forName(driver); 
			Connection conn = DriverManager.getConnection(url,username,password);
			System.out.println("Connected");
			
			Statement s = conn.createStatement();
            String query = "select * from testUser";
            ResultSet result = s.executeQuery(query);
            while(result.next()){
                System.out.println(result.getString("id"));
            }
            conn.close();
			
		} catch(Exception e){
			System.out.println(e);
		} 
	}
	
	

}
