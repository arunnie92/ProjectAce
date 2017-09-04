package backend;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DatabaseConnector {
	
	private static Connection connect;
	private static Statement s;
	private static ResultSet data;
	
	public DatabaseConnector(String dbName) throws ClassNotFoundException{
		try {
			s = null;
			data = null;
			Class.forName("com.mysql.jdbc.Driver");
			connect = DriverManager.getConnection("jdbc:mysql://localhost:3306/ace", "root", "password");
			System.out.println("Connected");
		} catch (Exception e) {
			System.out.println(e);
		}	
	}
	
	public ResultSet results(String query) throws SQLException {
		data = null; 
		s = connect.createStatement();
		try {
			data = s.executeQuery(query);
		} catch (Exception e) {
			System.out.println(e);
		}
		return data;
	}
	
	//used for insert or update information
	public boolean input(String query) throws SQLException {	
		s = connect.createStatement();
		try {
			if(s.executeUpdate(query) != 0) {
				return true;
			}
		} catch (Exception e) {
			System.out.println(e);
		}
		s = null;
		closeConnection();
		return false;
	}
	
	public static void resetConnection() {
		try {
			Class.forName("com.mysql.jdbc.Driver");
			connect = DriverManager.getConnection("jdbc:mysql://localhost:3306/ace", "root", "password");
			System.out.println("Connected");
		} catch (Exception e) {
			System.out.println(e);
		}
	}
	
	public Connection getConnection() {
		return connect;
	}
	
	public void closeConnection() throws SQLException {
		connect.close();
	}

}
