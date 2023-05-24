const myNavv = document.getElementById('myNav');
function openNav() {
  myNavv.style.width = '100%';
}
function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}
const openNavv = document.getElementById('.myNav');
const closeNavv = document.getElementById('.myNav');
openNavv.addEventListener('click', openNav);
closeNavv.addEventListener('click', closeNav);

// data preserve
const contactForm = document.querySelector('.upper-form-desk');
const nameField = document.querySelectorAll('#Name');
const emailAddressField = document.querySelector('#useremail');
const messageField = document.querySelector('#msg');

contactForm.addEventListener('input', () => {
  const userData = {
    name: nameField.value,
    email: emailAddressField.value,
    message: messageField.value,
  };
  localStorage.setItem('userData', JSON.stringify(userData));
});
const userDataFromLocalStorage = JSON.parse(localStorage.getItem('userData'));
nameField.value = userDataFromLocalStorage.name;
emailAddressField.value = userDataFromLocalStorage.email;
messageField.value = userDataFromLocalStorage.message;