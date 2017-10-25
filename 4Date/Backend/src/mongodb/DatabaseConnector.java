package mongodb;

import java.net.UnknownHostException;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.MongoClient;

public class DatabaseConnector {

	private DB database;
	
	public DatabaseConnector() {
		try {
			database = ((new MongoClient("localhost", 27017))
							.getDB("4date"));
			System.out.println("Successfully connected to mongodb 4Date database.");
		} catch (UnknownHostException e) {
			System.out.println(e);
		}
	}

	public DB getDatabase() {
		return database;
	}

	public void setDatabase(DB database) {
		this.database = database;
	}
	
	public DBCollection getCollection(String collection) {
		System.out.println("Successfully using " + collection + " collection in the "
				+ database.toString() + " database.");
		return database.getCollection(collection);
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}
}
