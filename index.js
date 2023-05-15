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