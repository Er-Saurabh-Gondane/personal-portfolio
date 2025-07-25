const menu_t = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navbar-links')
menu_t.addEventListener('click',()=>{
    nav.classList.toggle('show');
})
// light theme
const themeToggle = document.querySelector('.toggle-theme');
const body = document.body;
const themeIcon = document.querySelector('.toggle-theme i');

themeToggle.addEventListener('click',()=>{
    body.classList.toggle('light-mode')
})

 document.querySelectorAll('.progress-value').forEach(bar => {
    const percent = bar.getAttribute('data-percent');
    bar.style.setProperty('--progress-width', percent + '%');
  });