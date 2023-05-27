/**
  * local storage funcitons are geting data from form and save it into brower
*/

// Get data from form feilds
function loadFormData() {
  let formData = localStorage.getItem('formData');

  if (formData) {
    formData = JSON.parse(formData);

    document.getElementById('name').value = formData.name;
    document.getElementById('lastName').value = formData.lastName;
    document.getElementById('email').value = formData.email;
    document.getElementById('message').value = formData.message;
  }
}

function storeFormData() {
  const formData = {
    name: document.getElementById('name').value,
    lastName: document.getElementById('lastName').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  localStorage.setItem('formData', JSON.stringify(formData));
}

// when page load it load form data from local storage
window.onload = function () {
  loadFormData();
};

// when any input field change it will save the data to local storage
const formFields = document.querySelectorAll('input, textarea');
formFields.forEach((field) => {
  field.addEventListener('input', () => {
    storeFormData();
  });
});

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
