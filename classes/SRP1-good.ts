
class User {
  private name:string;
  private email:string;
  // Getters and setters
}

class UserRepository {
  saveUser(User user): void {
      // Save the user to a database
  }
}

class UserPrinter {
  public printUserDetails(User user): void {
      // Print user details to the console
  }
}