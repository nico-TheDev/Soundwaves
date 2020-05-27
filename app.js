const menu = document.querySelector('.menu');
const mobile = document.querySelector('.mobile');

menu.addEventListener('click',function(){
    mobile.classList.toggle('showNav');
});