function generatePassword(length) {
  const passwordCharacterSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
  let password = '';
  
  for (let passwordSize = 0; passwordSize < length; passwordSize++) {
    const randomIndex = Math.floor(Math.random() * passwordCharacterSet.length);
    password += passwordCharacterSet[randomIndex];
  }
  
  return password;
}

function generatedPassword() {
  const length = +prompt("Enter the password length:");
  const password = generatePassword(length);

  return password;
}

console.log('Your generated password is: ' + generatedPassword());
