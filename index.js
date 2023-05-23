const ProjectsMobile = [{
  Name: 'Profesional Art Printing Data',
  Description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
  Tecnologies: ['HTML', 'bootstrap', 'Ruby'],
  Link: 'see my project',
},
{
  Name: 'Profesional Art Printing Data',
  Description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
  Tecnologies: ['HTML', 'bootstrap', 'Ruby'],
  Link: 'see my project',
},
{
  Name: 'Profesional Art Printing Data',
  Description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
  Tecnologies: ['HTML', 'bootstrap', 'Ruby'],
  Link: 'see my project',
},
{
  Name: 'Profesional Art Printing Data',
  Description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
  Tecnologies: ['HTML', 'bootstrap', 'Ruby'],
  Link: 'see my project',
},
{
  Name: 'Profesional Art Printing Data',
  Description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
  Tecnologies: ['HTML', 'bootstrap', 'Ruby'],
  Link: 'see my project',
},
{
  Name: 'Profesional Art Printing Data',
  Description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
  Tecnologies: ['HTML', 'bootstrap', 'Ruby'],
  Link: 'see my project',
}];

//  Project Section Card creator
const cardContainer = document.querySelector('#section-02');
for (let i = 0; i < ProjectsMobile.length; i++) {
  const projectM = `<div class="card-2">
  <h2 class="prof-art">${ProjectsMobile[i].Name}</h2>
  <p class="p22">${ProjectsMobile[i].Description}</p>
  <ul class="skils">
    <li class="button">${ProjectsMobile[i].Tecnologies[0]}</li>
    <li class="skil button">${ProjectsMobile[i].Tecnologies[1]}</li>
    <li class="skil button">${ProjectsMobile[i].Tecnologies[2]}</li>
  </ul>
  </div>
  <button class ="see-project-2" id="seeproject${[i]}" onclick="popupp()">${ProjectsMobile[i].Link}</button>
  `;
  cardContainer.innerHTML += projectM;
}

// Get the popup mobile
const modal = document.getElementById('myModal');
modal.innerHTML = `<div class="modal-content">
<div class="modalHead-close">
<h2 class = "modalHeader" id="modalHeader">Multi Post Stories</h2>
 <span class="close">&times;</span>
 </div>
 <div>
  <ul id="modalTech" class ="modalTech">
      <li>HTML</li>
      <li>Bootstrap</li>
      <li>Ruby on rails</li>
  </ul>
  <img src="/assets/Portfolio.png" alt="popup image">
  <p class = "modal-pm" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>
  <div class = "live-source">
  <a href="https://www.google.com/">see live <img src="/assets/Icon.png" alt="google"></a>
  <a href="https://github.com/">see source <img src="/assets/Vector.png" alt=""></a>
  </div>
</div>
</div>`;
const span = document.getElementsByClassName('close')[0];
function popupp() {
  modal.style.display = 'block';
}

function closee() {
  modal.style.display = 'none';
}
span.onclick = function () {
  closee();
};

const cardDesk = document.querySelector('#card123');
const card1 = `<div class="desk-card-pro1">
<button class="desk-see-project-1" id="seeprojectyy" onclick="popupd()">See Project</button>
</div>`;
cardDesk.innerHTML += card1;
const card2 = `<div class="desk-card-d1">
<h2 class="desk-prof-art-dash">Data Dashboard Healthcare</h2>
<p class="desk-p22-d">A daily selection of privately personalized reads; no accounts or sign-ups required. has
been the industry's standard</p>
<ul class="desk-skils-d">
<li class="desk-skil button-d">html</li>
<li class="desk-skil button-d">bootstrap</li>
<li class="desk-skil button-d">Ruby</li>
</ul>
</div>`;
cardDesk.innerHTML += card2;
const card3 = `<div class="desk-card-w1">
<h2 class="desk-prof-art-w">Website Protfolio </h2>
<p class="desk-w">A daily selection of privately personalized reads; no accounts or sign-ups required. has been
the industry's standard</p>
<ul class="desk-skils-d">
<li class="desk-button-d button-d">html</li>
<li class="desk-skil button-d">bootstrap</li>
<li class="desk-skil button-d">Ruby</li>
</ul>
</div>`;
cardDesk.innerHTML += card3;
const cardDesk2 = document.getElementById('card456');
const card4 = `<div class="desk-card-d1">
<h2 class="desk-prof-art-dash">Profesional Art Printing Data More</h2>
<p class="desk-p22-d">A daily selection of privately personalized reads; no accounts or sign-ups required. has
been the industry's standard</p>
<ul class="desk-skils-d">
<li class="desk-skil button-d">html</li>
<li class="desk-skil button-d">bootstrap</li>
<li class="desk-skil button-d">Ruby</li>
</ul>
</div>`;
cardDesk2.innerHTML += card4;
const card5 = ` <div class="desk-card-d2">
<h2 class="desk-prof-art-dash">Data Dashboard Healthcare</h2>
<p class="desk-p22-d">A daily selection of privately personalized reads; no accounts or sign-ups required. has
been the industry's standard</p>
<ul class="desk-skils-d">
<li class="desk-skil button-d">html</li>
<li class="desk-skil button-d">bootstrap</li>
<li class="desk-skil button-d">Ruby</li>
</ul>

</div>`;
cardDesk2.innerHTML += card5;
const card6 = ` <div class="desk-card-w1">
<h2 class="desk-prof-art-w">Website Protfolio </h2>
<p class="desk-w">A daily selection of privately personalized reads; no accounts or sign-ups required. has been
the industry's standard</p>
<ul class="desk-skils-d">
<li class="desk-button-d button-d">html</li>
<li class="desk-skil button-d">bootstrap</li>
<li class="desk-skil button-d">Ruby</li>
</ul>
</div>`;
cardDesk2.innerHTML += card6;

// Get the popup mobile
const modalD = document.getElementById('myModalD');
modalD.innerHTML = `<div class="modal-contentD">
<div class="modalHead-closeD">
<h2 class = "modalHeaderD" id="modalHeader">Keeping track of hundreds  of components website</h2>
 <span class="closeD">&times;</span>
 </div>
 <div class = "desk0">
  <ul id="modalTech" class = "modalTech">
      <li>HTML</li>
      <li>Bootstrap</li>
      <li>Ruby on rails</li>
  </ul>
  <div class ="desk1">
  <img src="assets/PortfolioD.png" alt="popup image">
  <div class ="desk2">
  <p>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.<br>

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.
  </p>
  <div class = "live-sourceD">
  <a href="https://www.google.com/">see live <img src="assets/Icon.png" alt="google"></a>
  <a href="https://github.com/">see source <img src="/assets/VectorDD.png" alt=""></a>
  </div>
  </div>
  </div>
</div>
</div>`;
const btn0d = document.getElementById('seeprojecty');
const btn1d = document.getElementById('seeprojectyy');
const spand = document.getElementsByClassName('closeD')[0];
function popupd() {
  modalD.style.display = 'block';
}
function closseed() {
  modalD.style.display = 'none';
}
spand.onclick = function () {
  closseed();
};
// form validation
const formField = document.querySelector('.upper-form');
const userName = document.querySelector('#name');
const emailinput = document.querySelector('#email');
const textArea = document.querySelector('.messages-m');
const errorMessage = document.querySelector('.error-message');
const reg = /^([a-z0-9_\-.]+)@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
formField.addEventListener('submit', (events) => {
  events.preventDefault();
  if (userName.value.trim() === '') {
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'name can not be empty';
  } else if (emailinput.value.trim() === '') {
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'email can not be empty';
  } else if (!emailinput.value.match(reg)) {
    emailinput.style.borderColor = 'red';
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'email is not valid, please enter a valid email all in lower case';
  } else if (textArea.value.trim() === '') {
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'text area can not be empty';
  } else {
    errorMessage.style.display = 'none';
    formField.submit();
  }
});
// form validation desk
const formFiel = document.querySelector('.upper-form-desk');
const userNamed = document.querySelector('#named');
const emailinputd = document.querySelector('#emaild');
const textAread = document.querySelector('#messages');
const errorMessaged = document.querySelector('.error-messaged');
const regd = /^([a-z0-9_\-.]+)@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
formFiel.addEventListener('submit', (events) => {
  if (userNamed.value.trim() === '') {
    errorMessaged.style.display = 'block';
    errorMessaged.textContent = 'name can not be empty';
  } else if (emailinputd.value.trim() === '') {
    errorMessaged.style.display = 'block';
    errorMessaged.textContent = 'email can not be empty';
  } else if (!emailinputd.value.match(regd)) {
    emailinputd.style.borderColor = 'red';
    errorMessaged.style.display = 'block';
    errorMessaged.textContent = 'Email is not valid, please enter a valid email all in lower case';
  } else if (textAread.value.trim() === '') {
    errorMessaged.style.display = 'block';
    errorMessaged.textContent = 'text area can not be empty';
  } else {
    errorMessaged.style.display = 'none';
    formFiel.submit();
  }
  events.preventDefault();
});
