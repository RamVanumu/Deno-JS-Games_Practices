function generateOTP() {
  return Math.floor(100000 + Math.random() * 999999);
}

function validateOTP(enteredOTP, otp) {
  if (enteredOTP === otp) {
    return "OTP Verified Successfully.";
  }

  return "Wrong OTP. Please try again.";
}

function verifyOTP() {
  const otp = generateOTP();
  console.log('Your One Time Password is ' + otp);

  const enteredOTP = +prompt("Enter the OTP:");

  return validateOTP(enteredOTP, otp);
}

console.log(verifyOTP());
