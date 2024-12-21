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
    if(window.scrollY + 480 > carrierTop){
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

    const hobby=document.querySelector('.hobby-list');
    var hobbyTop=hobby.offsetTop;
    if(window.scrollY + 640 > hobbyTop){
        const hobbyList=document.querySelectorAll('.hobby-img-wrap');
        for (let i = 0; i < hobbyList.length; i++) {
            var hobbyTop = hobbyList[i].offsetTop;
            if(window.scrollY + 640 > hobbyTop){
                setTimeout(() => {
                    hobbyList[i].classList.add('hobby-img-wrap-show');
                }, i * 200);
            }
        }
    };
});


// fv-song-fadein-
// document.addEventListener("DOMContentLoaded", () => {
//     const boxes = document.querySelectorAll(".fv-song-list");
//     let currentIndex = 0;

//     function activateBox() {
//         // Remove "active" class from all boxes
//         boxes.forEach(box => box.classList.remove("active"));

//         // Add "active" class to the current box
//         boxes[currentIndex].classList.add("active");

//         // Increment index and reset if it reaches the end
//         currentIndex = (currentIndex + 1) % boxes.length;
//     }

//     // Call the function every 2 seconds
//     setInterval(activateBox, 24000);

//     // Initialize the first box as active
//     activateBox();
// });