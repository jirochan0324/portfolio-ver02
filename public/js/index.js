window.addEventListener('DOMContentLoaded',()=>{
    const logoAnimate = document.getElementById('loading');
    setTimeout(()=>{
        logoAnimate.classList.add('loaded');
    },3200)
    setInterval(()=>{
        const pathList=document.querySelectorAll('.path');
        for (let i = 0; i < pathList.length; i++) {
            const path = pathList[i];
            pathList[i].classList.add('active');
        }
        console.log(pathList);
        const fvBoj=document.querySelector('.fv-job');
        fvBoj.classList.add('fv-job-animation')
    },3200)
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