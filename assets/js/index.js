window.addEventListener('DOMContentLoaded', ()=> {
    
    /* Toggle bar */
    const navBar = document.querySelector('nav');
    const toggleBtn = document.querySelector('.nav__toggle');
    
    toggleBtn.addEventListener('click', ()=> {
            navBar.classList.toggle('active');
    })


})

