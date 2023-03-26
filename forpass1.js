// Select form elements
const form = document.querySelector('form');
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
const errorEmail = document.querySelector('#error-email');
const errorPassword = document.querySelector('#error-password');

// Add event listener to form on submit
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Check if email input is empty
  if (emailInput.value.trim() === '') {
    errorEmail.style.display = 'block';
  } else {
    errorEmail.style.display = 'none';
  }

  // Check if password input is empty
  if (passwordInput.value.trim() === '') {
    errorPassword.style.display = 'block';
  } else {
    errorPassword.style.display = 'none';
  }

  // Send form data to server using AJAX or fetch API
});
