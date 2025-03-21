document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();
    clearErrors();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
  
    let isValid = true;
  
    const usernamePattern = /^[a-zA-Z0-9]+$/;
    if (username.length < 3 || !usernamePattern.test(username)) {
        showError("usernameError", "Username must be at least 3 characters long and contain only letters and numbers.");
        isValid = false;
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showError("emailError", "Please enter a valid email address.");
        isValid = false;
    }
  
    
    if (isValid) {
        alert("Registration successful!");
    }
  });
  
  function clearErrors() {
    document.querySelectorAll(".error").forEach(error => {
        error.style.display = "none";
        error.innerText = "";
    });
  }
  
  function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
    errorElement.style.display = "block";
  }