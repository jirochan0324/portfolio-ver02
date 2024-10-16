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

// img-frip
const fripImg=document.querySelector('.profile-img-wrap');
fripImg.addEventListener("mouseover",()=>{
    fripImg.classList.add('frip');
});
fripImg.addEventListener("mouseout",()=>{
    fripImg.classList.remove('frip');
});
console.log(fripImg);



window.addEventListener('scroll',()=>{
    const item= document.querySelector('.policy-wrap');
    var tagetTop = item.offsetTop;
    if(window.scrollY + 500 > tagetTop){
        document.querySelector('.my-policy').classList.add('show');
        document.querySelector('.my-policy-text').classList.add('show');
    };
});