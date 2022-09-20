window.addEventListener('DOMContentLoaded', ()=> {
    
    /* Toggle bar */
    const navBar = document.querySelector('nav');
    const toggleBtn = document.querySelector('.nav__toggle');
    
    /*show menu*/ 
    const overlay = document.querySelector('.overlay');
    const menu = document.querySelector('.nav__list');

    
    toggleBtn.addEventListener('click', ()=> {
            navBar.classList.toggle('active');
            overlay.classList.toggle('show');
           menu.classList.toggle('show');
    })


})

