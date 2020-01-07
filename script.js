// Function to make the text "I'm right" from #1
const right = () => {
  document.getElementById("ans").innerHTML = "I'm right";
};

// Function to make the text "No, I'm right!" from #1
const noMe = () => {
  document.getElementById("ans").innerHTML = "No, I'm right!";
};

// Alert to the user that says, "Hey, I told you not to hover over me!" from #2
const dontHover = () => {
  alert("Hey, I told you not to hover over me!");
};

// Validate user password from #4
const validate = () => {
  if (document.getElementById("psw").value != 12345678) {
    alert("Password Incorrect!");
  } else {
    document.querySelector("h1").innerHTML = "Logged in";
  }
};

// Calculate volume based off radius for BONUS
const volume = () => {
  let r = document.getElementById("radius").value;

  if (isNaN(r)) {
    alert("Not a valid number!");
    document.getElementById("volume").innerHTML = "Not a Number";
  } else {
    document.getElementById("volume").innerHTML =
      (4 / 3) * Math.PI * Math.pow(r, 3);
  }
};

// Event listener for BONUS
document.getElementById("radius").addEventListener("change", volume);
