// change icon (dark mode)
const mode = document.querySelector('.mode');
const icon = document.querySelector('.fa-moon');
const Lion = document.querySelector('.lion-shadow');

mode.addEventListener('click', function(){
    document.body.classList.toggle('dark-mode');

    if(document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            Lion.classList.add('lion-dark');
    }
    else{
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        Lion.classList.remove('lion-dark');


        
    }
})

// chage toggle btn navber
const bars = document.querySelector('.toggle-btn');
const navbar = document.querySelector('header .Navbar');

bars.addEventListener('click', function(){
    if(bars.classList.contains('fa-bars')){
        bars.classList.remove('fa-bars');
        bars.classList.add('fa-xmark');
        navbar.classList.add('slide')
    }
    else{
        bars.classList.remove('fa-xmark');
        bars.classList.add('fa-bars');
        navbar.classList.remove('slide');
    }
})