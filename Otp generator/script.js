//   const input1 = document.getElementById("input1");
//   const input2 = document.getElementById("input2");
//   const input3 = document.getElementById("input3");
//   const input4 = document.getElementById("input4");

const otpSuccessTrigger = document.getElementById("otpSuccessTrigger");
const otpFailTrigger = document.getElementById("otpFailTrigger");
const otpExpiredTrigger = document.getElementById("otpExpiredTrigger");

let opt = null;
let optTimeOut = null;

const otpGenerator = () => {
  otp = Math.floor(1000 + Math.random() * 9000);
  console.log(`Generated OTP: ${otp}`);
  console.log("Generated OTP:", 1000 + Math.random() * 9000);

  if (otpTimeout) {
    clearTimeout(otpTimeout);
  }

  otpTimeout = setTimeout(() => {
    otp = null;
    alert("OTP has expired!");
    otpExpiredTrigger.style.display = "block";
    otpSuccessTrigger.style.display = "none";
    otpFailTrigger.style.display = "none";
  }, 15000);

  otpExpiredTrigger.style.display = "none";
};

let verifyOtp = (e) => {
  e.preventDefault();
  const userOtp = document.getElementById("input").value;

  if (!otp) {
    otpExpiredTrigger.style.display = "block";
    otpSuccessTrigger.style.display = "none";
    otpFailTrigger.style.display = "none";
  } else if (userOtp === otp.toString()) {
    otpSuccessTrigger.style.display = "block";
    otpFailTrigger.style.display = "none";
    otpExpiredTrigger.style.display = "none";
  } else {
    otpSuccessTrigger.style.display = "none";
    otpFailTrigger.style.display = "block";
    otpExpiredTrigger.style.display = "none";
  }
};
