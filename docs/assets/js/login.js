// layer
let btn = document.querySelector('.btns');
let layer = document.querySelector('.layer');

btn.onclick = function(){
  if(layer.classList.contains('translate-x-0')){
    layer.classList.remove('translate-x-0');
    layer.classList.add('translate-x-full');
    btn.textContent= 'Sign in';
  }else{
    layer.classList.add('translate-x-0');
    layer.classList.remove('translate-x-full');
    btn.textContent= 'Login';
  }
}


let sign_errors = [];
let login_errors = [];
// form 
let signInForm = document.querySelector('#signInForm');
let loginForm = document.querySelector('#loginForm');

// events
signInForm.onsubmit = function(e){
  e.preventDefault();
  handleSignInputs()
}
loginForm.onsubmit = function(e){
  e.preventDefault();
  handleLoginInputs()
}



// functions 

function handleSignInputs() {
  let firstName = document.querySelector('#firstName').value
  let firstNameError = document.querySelector('#firstName-error')
  let lastName = document.querySelector('#lastName').value
  let lastName_error = document.querySelector('#lastName_error')
  let email = document.querySelector('#email').value
  let email_error = document.querySelector('#email_error')
  let number = document.querySelector('#number').value
  let number_error = document.querySelector('#number_error')
  let bio = document.querySelector('#bio').value
  let bio_error = document.querySelector('#bio_error')
  let signPassword = document.querySelector('#signPassword').value
  let signPassword_error = document.querySelector('#signPassword_error')
  // first name condition
  if (!firstName || firstName.length <= 2) {
      sign_errors['firstName_error'] = 'please enter a correct value and least than 2 letters'
      firstNameError.textContent = sign_errors['firstName_error'];
  }else{
      sign_errors['firstName_error'] = ''
      localStorage.setItem('firstName' , firstName)
      firstNameError.textContent = sign_errors['firstName_error'];
  }
  // last name condition
   if (!lastName || lastName.length <= 2) {
      sign_errors['lastName_error'] = 'please enter a correct value and least than 2 letters'
      lastName_error.textContent = sign_errors['lastName_error'];
  }else{
      sign_errors['lastName_error'] = ''
      localStorage.setItem('lastName' , lastName)
      lastName_error.textContent = sign_errors['lastName_error'];
  }
  // email condition
   if (!email || !email.includes('@')) {
      sign_errors['email_error'] = 'please enter a correct value and contain @'
      email_error.textContent = sign_errors['email_error'];
  }else{
      sign_errors['email_error'] = ''
      localStorage.setItem('email' , email)
      email_error.textContent = sign_errors['email_error'];
  }
  // number condition
  if (!number || number.length<10 ) {
      sign_errors['number_error'] = 'please enter a correct value and must be at most 10 number'
      number_error.textContent = sign_errors['number_error'];
  }else{
      sign_errors['number_error'] = ''
      number_error.textContent = sign_errors['number_error'];
  }
  //bio condition
   if (!bio || bio.length <= 10 || bio.length >= 100 ) {
      sign_errors['bio_error'] = 'please enter a correct value and must be at most 100 letter'
      bio_error.textContent = sign_errors['bio_error'];
  }else{
      sign_errors['bio_error'] = ''
      bio_error.textContent = sign_errors['bio_error'];
  }
 
   //password condition
  if (!signPassword || !signPassword[0].toUpperCase() ) {
      sign_errors['signPassword_error'] = 'please enter a correct value and must be at most 10 number'
      signPassword_error.textContent = sign_errors['signPassword_error'];
  }else{
      sign_errors['signPassword_error'] = ''
      localStorage.setItem('signPassword' , signPassword)
      signPassword_error.textContent = sign_errors['signPassword_error'];
  }
}

function handleLoginInputs() {
  let loginEmail = document.querySelector('#loginEmail').value
  let publicError = document.querySelector('#publicError')
  let loginPassword = document.querySelector('#loginPassword').value
  var fname = localStorage.getItem('firstName')
  var lname = localStorage.getItem('lastName')
  var email = localStorage.getItem('email')
  var signPassword = localStorage.getItem('signPassword')
  let data = {
    name : fname + " " + lname,
    email  :email,
    password : signPassword,
  }
  console.log('name in storage :' + data.name + 'email : ' + data.email + 'password : ' + data.password);
  
  console.log('_________________________________________________________');
  console.log('email : ' + loginEmail + 'password : ' + loginPassword);

  
  if (loginEmail === data.email && loginPassword === data.password) {
    window.location = 'http://127.0.0.1:5501/src/index.html'
  }else{
    login_errors['publicError'] = 'يوجد خطأ في الادخال القيمة خاطئة'
    publicError.textContent = login_errors['publicError']
  }
}