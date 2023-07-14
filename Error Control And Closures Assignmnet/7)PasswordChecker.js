// 7. Password Checker.
// Create a class called User with properties username and password. Implement a getter method for password
// that returns the password with all characters replaced by asterisks. Implement a setter method for password
// that checks if the new password is at least 8 characters long and contains at least one number and one
// uppercase letter. If the password is valid, set the new password. If not, log an error message.

class User {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
  
    getPassword() {
      return "*".repeat(this.password.length);
    }
  
    setPassword(newPassword) {
      if (newPassword.length < 8 || !/[0-9]/.test(newPassword) || !/[A-Z]/.test(newPassword)) {
        console.log("Invalid password");
      } else {
        this.password = newPassword;
      }
    }
  }
  
  const user = new User("User", "password123");
  console.log(user.getPassword()); 
  
  user.setPassword("newpassword");
  console.log(user.getPassword());