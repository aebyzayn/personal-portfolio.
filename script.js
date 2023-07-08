
window.addEventListener('scroll',()=>{
    // Progess Bar.................
    let progessBar = document.querySelectorAll('.inner-row');


    progessBar.forEach(progess =>{
        let rect = progess.getBoundingClientRect();
        if(rect.top < window.innerHeight && rect.bottom >= 0){
            let width = progess.getAttribute('width-data');
            progess.style.width = width + '%' 
        }
    });

    // Nav Bar.................
    let nav = document.querySelector('nav');
    nav.classList.toggle('nav-sroll',window.scrollY>0);


    // Active section toggler.................
    let navLinkA = document.querySelectorAll('.nav-links li a');
    let sections = document.querySelectorAll('section');

    sections.forEach(section=>{
        let up = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if(up >= offset && up < offset+height){
            navLinkA.forEach(link=>{
                link.classList.remove('active');
                document.querySelector('.nav-links li a[href*='+ id +']').classList.add('active');
            })
        }
    })
});  

// Dark & Light Mood Theme Toggler......
let nightmood = document.querySelector('.fa-moon');
let sunmood = document.querySelector('.fa-sun');

nightmood.addEventListener('click',()=>{
    document.querySelector('body').classList.add('nightmood');
    nightmood.style.display='none'
    sunmood.style.display='inline-block'
});
sunmood.addEventListener('click',()=>{
    document.querySelector('body').classList.remove('nightmood');
    nightmood.style.display='inline-block'
    sunmood.style.display='none'
});

// Phone Menu......
let menu = document.querySelector('nav button');

menu.addEventListener('click',()=>{
    let navlinks = document.querySelector('.nav-links');
    navlinks.classList.toggle('toggle');
})