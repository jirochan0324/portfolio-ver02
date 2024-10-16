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

// fade-in スクロールイベント
// window.addEventListener('scroll',()=>{
//     const item= document.querySelectorAll('.scroll-fade-in-list');

//     for(let i = 0 ; i < item.length; i++){
//         var tagetTop = item[i].offsetTop;

//         if(window.scrollY + 500 > tagetTop){
//             item[i].classList.add('scroll-fade-in-active');
//         }
//     }
// });