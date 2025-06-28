const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  checkInputs();
});

function checkInputs() {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();
  const password2Val = password2.value.trim();

  if(usernameVal === '') {
    setErrorFor(username, 'Username is required');
  } else {
    setSuccessFor(username);
  }

  if(emailVal === '') {
    setErrorFor(email, 'Email is required');
  } else if (!isValidEmail(emailVal)) {
    setErrorFor(email, 'Email is not invalid');
  } else {
    setSuccessFor(email);
  }

  if(passwordVal === '') {
    setErrorFor(password, 'Password is required');
  } else if (passwordVal.length < 6) {
    setErrorFor(password, 'Password must be at least 6 characters');
  } else {
    setSuccessFor(password);
  }

  if(password2Val === '') {
    setErrorFor(password2, 'Password2 is required');
  } else if(password2Val !== passwordVal) {
    setErrorFor(password2, 'Passwords do not match');
  } else {
    setSuccessFor(password2);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
  formControl.className = 'form-control error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
