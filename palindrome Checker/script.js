const display = document.getElementById("display");
const result = document.getElementById("result");
const fail = document.querySelector("p");

const checkPalindrome = (e) => {
  e.preventDefault();
  const data = document.querySelector("input").value.trim();
  display.innerText = data;
  if (!data) {
    fail.style.display = "block";
    result.innerText = "";
  } else {
    fail.style.display = "none";
    let removeSpace = data.toLowerCase().replace(/[^a-z0-9]/g, "");
    // replace;
    // split;
    // rev;
    // join;
    let res = removeSpace.split("").reverse().join("");

    if (removeSpace == res) {
      result.innerText = `${data} is a Palindrome`;
    } else {
      result.innerText = `${res} is not a Palindrome`;
    }
  }
};
