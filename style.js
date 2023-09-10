let burger= document.querySelector('.burger');
let navbar=document.querySelector('.navbar');
let navlist=document.querySelector('.nav-list');
let rightnav=document.querySelector('.rightnav');
burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav');
    navlist.classList.toggle('v-class');
    rightnav.classList.toggle('v-class');
});


