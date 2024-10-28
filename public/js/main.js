const menuActive=document.querySelector('.menu');
const mLink=document.querySelectorAll('.m-nav-link');
const mobileNav=document.getElementById('m-nav');

// navのaタグ
const navWork=document.querySelectorAll('.link-work');
const navAbout=document.querySelectorAll('.link-about');
const navContact=document.querySelectorAll('.link-contact');

// navの移動先
// wrok
const idWork=document.getElementById('work');
const workTop=idWork.getBoundingClientRect().top;
// about
const idAbout=document.getElementById('profile');
const aboutTop=idAbout.getBoundingClientRect().top;
// contact
const idcontact=document.getElementById('contact');
const contactTop=idcontact.getBoundingClientRect().top;


// navのaタグをclickした時に書くconstのtopへ移動
// work
for (let i = 0; i < navWork.length; i++) {
    const navwork = navWork[i];
    navwork.addEventListener('click',()=>{
        menuActive.classList.remove('active');
        mobileNav.classList.remove('m-nav-open');
        window.scrollTo({
            top:workTop,
            left:0,
            behavior:"smooth",
        })
    });
}

// about
for (let i = 0; i < navAbout.length; i++) {
    const navabout = navAbout[i];
    navabout.addEventListener('click',()=>{
        menuActive.classList.remove('active');
        mobileNav.classList.remove('m-nav-open');
        window.scrollTo({
            top:aboutTop,
            left:0,
            behavior:"smooth",
        })
    });
}

// contact
for (let i = 0; i < navContact.length; i++) {
    const navcontact = navContact[i];
    navcontact.addEventListener('click',()=>{
        menuActive.classList.remove('active');
        mobileNav.classList.remove('m-nav-open');
        window.scrollTo({
            top:contactTop,
            left:0,
            behavior:"smooth",
        })
    });
}

// menuボタンを表示--Width>800pxで非表示にする
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


// fade-in スクロールイベント
window.addEventListener('scroll',()=>{
    const work=document.querySelector('.works-list');
    var workTop=work.offsetTop;
    if(window.scrollY + 640 > workTop){
        const workList=document.querySelectorAll('.work');
        for (let i = 0; i < workList.length; i++) {
            if(window.scrollY + 640 > workTop){
                setTimeout(() => {
                    workList[i].classList.add('work-show');
                }, i * 200);

            }
        }
    };

    const profile=document.querySelector('.profile-wrap');
    var profileTop=profile.offsetTop;
    if(window.scrollY + 640 > profileTop){
        const profileTextBody=document.querySelectorAll('.prorile-text-body')
        const profileText=document.querySelectorAll('.profile-text')
        const profileTextLine=document.querySelectorAll('.line')
        for (let i = 0; i < profileTextBody.length; i++) {
            if(window.scrollY + 640 > profileTop){
                profileText[i].classList.add('profile-text-active')
                profileTextLine[i].classList.add('line-active')
            }
        }
    }

    const sectionFadeIn=document.querySelectorAll('.work-fade-in-wrap');
    for (let i = 0; i < sectionFadeIn.length; i++) {
        const secFadeIn = sectionFadeIn[i];
        var sectionFadeInTop=secFadeIn.offsetTop;
        if(window.scrollY + 640 > sectionFadeInTop){
            const sectionFadeInItem=document.querySelectorAll('.section-fade-in-item');
            for (let i = 0; i < sectionFadeInItem.length; i++) {
                const secFadeInItem=sectionFadeInItem[i];
                if(window.scrollY + 640 > sectionFadeInTop){
                    setTimeout(() => {
                        secFadeInItem.classList.add('active');
                    }, i * 200);
                }
            }
        }
    }
    // console.log(sectionFadeIn);

});