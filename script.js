const right = () => {
  document.getElementById("ans").innerHTML = "I'm right";
};

const noMe = () => {
  document.getElementById("ans").innerHTML = "No, I'm right!";
};

const dontHover = () => {
  alert("Hey, I told you not to hover over me!");
};

const validate = () => {
  if (document.getElementById("psw").value != 12345678) {
    alert("Password Incorrect!");
  } else {
    document.querySelector("h1").innerHTML = "Logged in";
  }
};
