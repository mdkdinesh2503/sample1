// Responsive menu bar script starts here 

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

// Form submit response starts here 

// It will redirect to the Home Page after submitting the form
$(document).ready(function () {
  $("form").submit(function () {
    alert("Great Job !");
  });
});