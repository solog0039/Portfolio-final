const ProjectsMobile = [{
  Title1: 'My recent works',
  Image: 'assets/images/Placeholder.png',
  Title2: 'Multi-Post Stories',
  Description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the      industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  Tecnologies: ['CSS', 'HTML', 'bootstrap', 'Ruby'],
  Link: 'see my project',
},
{
  Name: 'Profesional Art Printing Data',
  Description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
  Tecnologies: ['HTML', 'bootstrap', 'Ruby'],
  Link: 'see my project',
},
{
  Title1: 'Multi-Post Stories',
  Close: '&times;',
  Tecnologies: ['HTML', 'bootstrap', 'Ruby'],
  Image: ['/assets/Portfolio.png', 'popup image'],
  Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  Links: [['https://www.google.com/', 'see live', '/assets/Icon.png', 'google'], ['https://github.com/', 'see source', '/assets/Vector.png', 'github']],
},
{
  Linkk: 'See Project',
},
{
  Titled1: 'Data Dashboard Healthcare',
  Titlew1: 'Website Protfolio',
  Titlepro: 'Profesional Art Printing Data More',
  Description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has  been the industrys standard',
  Tecnologies: ['HTML', 'bootstrap', 'Ruby'],
  Link: 'See Project',
}];

//  Project Section Card creator
const cardContainer1 = document.querySelector('#carddss');
const cardContainer = document.querySelector('#section-02');
cardContainer1.innerHTML += `<div class="h21-line">
<h1 class="h21">${ProjectsMobile[0].Title1}</h1>
<hr class="line">
</div>
<img class="main-image" src="${ProjectsMobile[0].Image}" alt="main image">
<div class="card-1">
<h2 class="multi-story">${ProjectsMobile[0].Title2}</h2>
<p class="p21">${ProjectsMobile[0].Description}</p>
<ul class="skills">
<li class="css-1 button">${ProjectsMobile[0].Tecnologies[0]}</li>
<li class="skill button">${ProjectsMobile[0].Tecnologies[1]}</li>
<li class="skill button">${ProjectsMobile[0].Tecnologies[2]}</li>
<li class="skill button">${ProjectsMobile[0].Tecnologies[3]}</li>
</ul>
</div>
<button class ="see-project-1" id="seeprojectt" onclick="popupp()">${ProjectsMobile[0].Link}</button>
`;

for (let i = 0; i < 6; i++) {
  const projectM = `<div class="card-2">
<h2 class="prof-art">${ProjectsMobile[1].Name} </h2>
<p class="p22">${ProjectsMobile[1].Description}</p>
<ul class="skils">
<li class="button">${ProjectsMobile[1].Tecnologies[0]}</li>
<li class="skil button">${ProjectsMobile[1].Tecnologies[1]}</li>
<li class="skil button">${ProjectsMobile[1].Tecnologies[2]}</li>
</ul>
</div>
<button class ="see-project-2" id="seeproject${[1]}" onclick="popupp()">${ProjectsMobile[1].Link}</button>
`;
  cardContainer.innerHTML += projectM;
}

// Get the popup mobile
const modal = document.getElementById('myModal');
modal.innerHTML = `<div class="modal-content">
<div class="modalHead-close">
<h2 class = "modalHeader" id="modalHeader">${ProjectsMobile[2].Title1}</h2>
<span class="close">${ProjectsMobile[2].Close}</span>
</div>
<div>
<ul id="modalTech" class ="modalTech">
  <li>${ProjectsMobile[2].Tecnologies[0]}</li>
  <li>${ProjectsMobile[2].Tecnologies[1]}</li>
  <li>${ProjectsMobile[2].Tecnologies[2]}</li>
</ul>
<img src="${ProjectsMobile[2].Image[0]}" alt="${ProjectsMobile[2].Image[1]}">
<p class = "modal-pm" >${ProjectsMobile[2].Description}</p>
<div class = "live-source">
<a href="${ProjectsMobile[2].Links[0][0]}">${ProjectsMobile[2].Links[0][1]}<img src="${ProjectsMobile[2].Links[0][2]}" alt="${ProjectsMobile[2].Links[0][3]}"></a>
<a href="${ProjectsMobile[2].Links[1][0]}">${ProjectsMobile[2].Links[1][1]} <img src="${ProjectsMobile[2].Links[1][2]}" alt="${ProjectsMobile[2].Links[1][1]}"></a>
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

const carddesk0 = document.querySelector('#card1D-recent');
const cardDesk = document.querySelector('#card123');
carddesk0.innerHTML += `<div class="desk-h21-line">
<h1 class="desk-h21">${ProjectsMobile[0].Title1}</h1>
<hr class="desk-line">
</div>
<div class="img-multi">
<img class="desk-main-image" src="${ProjectsMobile[0].Image}" alt="main image">

<div class="desk-card-1">
  <h2 class="desk-multi-story">${ProjectsMobile[0].Title2}</h2>
  <p class="desk-p21">${ProjectsMobile[0].Description}</p>
  <ul class="desk-skills">
    <li class="desk-css-1 button">${ProjectsMobile[0].Tecnologies[0]}</li>
    <li class="desk-skill button">${ProjectsMobile[0].Tecnologies[1]}</li>
    <li class="desk-skill button">${ProjectsMobile[0].Tecnologies[2]}</li>
    <li class="desk-skill button">${ProjectsMobile[0].Tecnologies[3]}</li>
  </ul>
  <button class="desk-see-project-1m" id="seeprojecty" onclick="popupd()">${ProjectsMobile[0].Link}</button>
</div>
</div>`;
const card1 = `<div class="desk-card-pro1 all-cards">
<button class="desk-see-project-1" id="seeprojectyy" onclick="popupd()">${ProjectsMobile[3].Linkk}</button>
</div>`;
cardDesk.innerHTML += card1;
const card2 = `<div class="desk-card-d1 all-cards">
<div class="no-hover">
<h2 class="desk-prof-art-dash">${ProjectsMobile[4].Titled1}</h2>
<p class="desk-p22-d">${ProjectsMobile[4].Description}</p>
<ul class="desk-skils-d">
<li class="desk-skil button-d">${ProjectsMobile[4].Tecnologies[0]}</li>
<li class="desk-skil button-d">${ProjectsMobile[4].Tecnologies[1]}</li>
<li class="desk-skil button-d">${ProjectsMobile[4].Tecnologies[2]}</li>
</ul>
</div>
<button class="desk-see-project-1c" onclick="popupd()">${ProjectsMobile[4].Link}</button>
</div>`;
cardDesk.innerHTML += card2;
const card3 = `<div class="desk-card-w1 all-cards">
<div class="no-hover">
<h2 class="desk-prof-art-w">${ProjectsMobile[4].Titlew1} </h2>
<p class="desk-w">${ProjectsMobile[4].Description}</p>
<ul class="desk-skils-d">
<li class="desk-button-d button-d">${ProjectsMobile[4].Tecnologies[0]}</li>
<li class="desk-skil button-d">${ProjectsMobile[4].Tecnologies[1]}</li>
<li class="desk-skil button-d">${ProjectsMobile[4].Tecnologies[2]}</li>
</ul>
</div>
<button class="desk-see-project-1c" onclick="popupd()">${ProjectsMobile[4].Link}</button>
</div>`;
cardDesk.innerHTML += card3;
const cardDesk2 = document.getElementById('card456');
const card4 = `<div class="desk-card-d1 all-cards">
<div class="no-hover">
<h2 class="desk-prof-art-dash">${ProjectsMobile[4].Titlepro}</h2>
<p class="desk-p22-d">${ProjectsMobile[4].Description}</p>
<ul class="desk-skils-d">
<li class="desk-skil button-d">${ProjectsMobile[4].Tecnologies[0]}</li>
<li class="desk-skil button-d">${ProjectsMobile[4].Tecnologies[1]}</li>
<li class="desk-skil button-d">${ProjectsMobile[4].Tecnologies[2]}</li>
</ul>
</div>
<button class="desk-see-project-1c" onclick="popupd()">${ProjectsMobile[4].Link}</button>
</div>`;
cardDesk2.innerHTML += card4;
const card5 = `<div class="desk-card-d1 all-cards">
<div class="no-hover">
<h2 class="desk-prof-art-dash">${ProjectsMobile[4].Titled1}</h2>
<p class="desk-p22-d">${ProjectsMobile[4].Description}</p>
<ul class="desk-skils-d">
<li class="desk-skil button-d">${ProjectsMobile[4].Tecnologies[0]}</li>
<li class="desk-skil button-d">${ProjectsMobile[4].Tecnologies[1]}</li>
<li class="desk-skil button-d">${ProjectsMobile[4].Tecnologies[2]}</li>
</ul>
</div>
<button class="desk-see-project-1c" onclick="popupd()">${ProjectsMobile[4].Link}</button>
</div>`;
cardDesk2.innerHTML += card5;
const card6 = `<div class="desk-card-w1 all-cards">
<div class="no-hover">
<h2 class="desk-prof-art-w">${ProjectsMobile[4].Titlew1} </h2>
<p class="desk-w">${ProjectsMobile[4].Description}</p>
<ul class="desk-skils-d">
<li class="desk-button-d button-d">${ProjectsMobile[4].Tecnologies[0]}</li>
<li class="desk-skil button-d">${ProjectsMobile[4].Tecnologies[1]}</li>
<li class="desk-skil button-d">${ProjectsMobile[4].Tecnologies[2]}</li>
</ul>
</div>
<button class="desk-see-project-1c" onclick="popupd()">${ProjectsMobile[4].Link}</button>
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
// window popup details
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
