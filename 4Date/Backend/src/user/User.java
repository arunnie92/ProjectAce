package user;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import mongodb.DatabaseConnector;

public class User {
	
	public static void main(String[] args) {
		User user = new User();
	}
	
	// do i need both fields or just collection field?
	private DatabaseConnector database;
	private DBCollection users;
	
	public User() {
		this.database = new DatabaseConnector();
		this.users = database.getCollection("users");
	}
	
	public boolean createUser() {
		
		return true;
	}
	public void login() {}
	public void getUserInfo() {}
	public void deleteUserAccout() {}
	public void updatePassword() {}
	public void getInformation() {}
	public void updateInformatio() {}
	
	public void getUserMatches() {}
	public void addNewMatch() {}
	
	// add messages functions
	
}
