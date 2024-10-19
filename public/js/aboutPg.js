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

window.addEventListener('scroll',()=>{
    const carrier= document.querySelector('.carrier');
    var carrierTop=carrier.offsetTop;
    if(window.scrollY + 500 > carrierTop){
        const carrierList = document.querySelectorAll('.carrier-list');
        for(let i = 0 ; i < carrierList.length; i++){
            var carrierTop = carrierList[i].offsetTop;
            if(window.scrollY + 480 > carrierTop){
                setTimeout(() => {
                    carrierList[i].classList.add('carrier-list-active');
                }, i * 200);
            }
        }
    };

    const item= document.querySelector('.policy-wrap');
    var tagetTop = item.offsetTop;
    if(window.scrollY + 640 > tagetTop){
        document.querySelector('.my-policy').classList.add('show');
        document.querySelector('.my-policy-text').classList.add('show');
    };
});