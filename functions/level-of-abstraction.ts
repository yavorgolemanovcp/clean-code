 //high level of abstraction
 function registerUser(userData) {
    validateUserData(userData);
    saveUserToDatabase(userData);
    sendWelcomeEmail(userData.email);
  }


// Low level of abstraction:
 function isPalindrome(inputString) {
    const cleanedString = inputString.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let startPointer = 0;
    let endPointer = cleanedString.length - 1;

    while (startPointer < endPointer) {
        if (cleanedString[startPointer] !== cleanedString[endPointer]) {
            return false;
        }
        startPointer++;
        endPointer--;
    }
    return true;
}


export function ngOninit() {
	//Lines of code ...
}

