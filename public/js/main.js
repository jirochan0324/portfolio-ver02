const menuActive=document.querySelector('.menu');
const mobileNav=document.getElementById('m-nav');

menuActive.addEventListener('click',()=>{
    menuActive.classList.toggle('active');
    mobileNav.classList.toggle('m-nav-open');

    // width>800pxの場合、mobileNavから.mobile-navを削除
    window.addEventListener('resize',()=>{
    const winWidth=window.innerWidth;
    if(winWidth>800){
        menuActive.classList.remove('active');
        mobileNav.classList.remove('m-nav-open');
    }
    })
});

// dade-in スクロールイベント
window.addEventListener('scroll',()=>{
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;
    const sections = document.querySelectorAll('.fadein-section');

    sections.forEach(function(fadein){
        const distanceToSection = fadein.offsetTop;
        if(scroll + windowHeight > distanceToSection){
            fadein.classList.add('fadein-active');
        }
    })
})