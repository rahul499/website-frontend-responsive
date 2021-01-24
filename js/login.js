var exp_name = false;
var exp_email = false;
var exp_password = false
var exp_confirmpassword = false;
var exp_loginpassword = false;
var exp_loginname = false;



let container = document.getElementById('container')

toggle = () => {
	container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')
}

setTimeout(() => {
	container.classList.add('sign-in')
}, 200)

function myName() {
	var username = document.getElementById("name").value;
        var lblError = document.getElementById("nameError");
        lblError.innerHTML = "";
        var expr = /^[a-zA-Z0-9_]{5,15}$/;
				exp_name = expr.test(username);
        if (!exp_name) {
            lblError.innerHTML = "Only Alphabets, Numbers, Underscore and between 5 to 15 characters.";
        }
}

function myEmail() {
	var email = document.getElementById("email").value;
        var lblError = document.getElementById("emailError");
        lblError.innerHTML = "";
        var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
				exp_email = expr.test(email);
        if (!exp_email) {
            lblError.innerHTML = "You have entered an invalid email address!";
        }
}

function myPassword() {
	var password = document.getElementById("password").value;
        var lblError = document.getElementById("passwordError");
        lblError.innerHTML = "";
				exp_password = password.match(/[a-z]/g) && password.match(
									/[A-Z]/g) && password.match(
									/[0-9]/g) && password.match(
									/[^a-zA-Z\d]/g) && (password.length >= 8);
        if (!exp_password) {
            lblError.innerHTML = "At least 1 uppercase, lowercase, digit, special charcter, and minimum 8 characters";
        }
}

function myConfirmPassword() {
	var password = document.getElementById("password").value;
	var confirmpassword = document.getElementById("confirmpassword").value;
        var lblError = document.getElementById("confirmPasswordError");
        lblError.innerHTML = "";
				exp_confirmpassword = (password != confirmpassword);
				if (confirmpassword) {
          lblError.innerHTML = "Passwords do not match.";
        } else {
					lblError = "";
				}
}

function validate() {
	if(exp_name && exp_email && exp_password && exp_confirmpassword==false) {
    document.getElementById("confirmPasswordError").innerHTML="";
    	alert('User Registered Successfully');
  }
	else {
	alert('Wrong Details');
	return false;
}
}

function myLoginName() {
	var username = document.getElementById("login-username").value;
        var lblError = document.getElementById("loginNameError");
        lblError.innerHTML = "";
        var expr = /^[a-zA-Z0-9_]{5,15}$/;
				exp_loginname = expr.test(username);
        if (!exp_loginname) {
            lblError.innerHTML = "Only Alphabets, Numbers, Underscore and between 5 to 15 characters.";
        }
}

function myLoginPassword() {
	var password = document.getElementById("login-password").value;
        var lblError = document.getElementById("loginPasswordError");
        lblError.innerHTML = "";
				exp_loginpassword = password.match(/[a-z]/g) && password.match(
									/[A-Z]/g) && password.match(
									/[0-9]/g) && password.match(
									/[^a-zA-Z\d]/g) && (password.length >= 8);
        if (!exp_loginpassword) {
            lblError.innerHTML = "At least 1 uppercase, lowercase, digit, special charcter, and minimum 8 characters";
        }
}

function validateLogin() {
	var user = document.getElementById("login-username").value;
	var pwd = document.getElementById("login-password").value;
  if(exp_loginname && exp_loginpassword ) {
    if( (user=="Rahul1" && pwd=="Abcdef@4") || (user=="Vasu1" && password=="Abcdef@$") )
   {
      window.location.href = "index.html";
     return false;
   }
   else {
     alert('Wrong Username or Password');
     return false;
   }
  }
	else {
	alert('Wrong User Details');
	return false;
}

}
