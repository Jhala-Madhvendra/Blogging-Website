function validateForgotForm() {
	var email = document.getElementById("email").value;
	var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (!email.match(emailPattern)) {
		document.getElementById("email-error").innerHTML = "Please enter a valid email address.";
		document.getElementById("email-error").style.display = "inline";
		return false;
	} else {
		document.getElementById("email-error").style.display = "none";
		return true;
	}
}

function validateResetForm() {
	var password = document.getElementById("password").value;
	var confirm_password = document.getElementById("confirm-password").value;

	if (password.length < 8) {
		document.getElementById("password-error").innerHTML = "Password must be at least 8 characters.";
		document.getElementById("password-error").style.display = "inline";
		return false;
	} else {
		document.getElementById("password-error").style.display = "none";
	}

	if (password != confirm_password) {
		document.getElementById("confirm-password-error").innerHTML = "Passwords do not match.";
		document.getElementById("confirm-password-error").style.display = "inline";
		return false;
	} else {
        document.getElementById("confirm-password-error").innerHTML = "Passwords successfully created.";
		document.getElementById("confirm-password-error").style.display = "none";
        /* alert("Password created successfully!"); */
		return true;
	}
}
