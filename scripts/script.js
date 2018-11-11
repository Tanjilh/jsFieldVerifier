var email, password, passwordMatch;

function constantCall() {
  let form = document.getElementById("form");
  console.log("this is the form element: ", form);

  if(email && password && passwordMatch) {
    // set the background color green
    form.style.backgroundColor = "#2ecc71";
  } else {
    // set the background color red
    form.style.backgroundColor = "#e74c3c";
    console.log("red")
  }
}


function checkEmail() {
  var inp = document.getElementById("emailInput").value;
  var emailPattern = /[a-zA-Z]+[@][a-z]+([.][a-z]+)+/;
  var result = emailPattern.test(inp);

    if (result) {
        document.getElementById("emailInput").style.borderColor = "#2ecc71";
        email = true;
    } else if (!result) {
        document.getElementById("emailInput").style.borderColor = "#e74c3c";
        email = false;
    }
}

function checkPassword() {
  let inp1= document.getElementById("password1").value;
  var passwordPattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{8,}/;
  var result1 = passwordPattern.test(inp1);

    if (result1 == 1) {
      document.getElementById("password1").style.borderColor = "#2ecc71";
      password = true;
    } else if (result1 == 0)  {
        document.getElementById("password1").style.borderColor = "#e74c3c";
        password = false;
    }
}

function confirmPassword() {
  let inp1 = document.getElementById("password1").value;
  let inp2 = document.getElementById("password2").value;

    if (inp1 == inp2) {
      document.getElementById("password2").style.borderColor = "#2ecc71";
      passwordMatch = true;
    } else if (inp1 !== inp2) {
        document.getElementById("password2").style.borderColor = "#e74c3c";
        passwordMatch = false;
    }

}
