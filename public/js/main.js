const menuActive=document.querySelector('.menu');
const mLink=document.querySelectorAll('.m-nav-link');
const mobileNav=document.getElementById('m-nav');


// menuボタンを表示--Width>720pxで非表示にする
menuActive.addEventListener('click',()=>{
    menuActive.classList.toggle('active');
    mobileNav.classList.toggle('m-nav-open');

    // width>720pxの場合、mobileNavから.mobile-navを削除
    window.addEventListener('resize',()=>{
    const winWidth=window.innerWidth;
    if(winWidth>720){
        menuActive.classList.remove('active');
        mobileNav.classList.remove('m-nav-open');
    }
    })
});



