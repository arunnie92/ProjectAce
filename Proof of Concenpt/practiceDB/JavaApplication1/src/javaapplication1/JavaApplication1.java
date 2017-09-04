/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javaapplication1;
import java.sql.*;
/**
 *
 * @author Owner
 */
public class JavaApplication1 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        try {
            Connection c = DriverManager.getConnection("jdbc:derby://localhost:1527/example_db", "arunn", "chanthirakanthan");
            Statement s = c.createStatement();
	    String query = "select * from people";
	    ResultSet result = s.executeQuery(query);
	    while(result.next()){	        
                System.out.println(result.getString("name"));        
            }
            c.close();
        }
	catch (Exception e) {
            System.out.println("String: " + e);
	}
    }
    
}
