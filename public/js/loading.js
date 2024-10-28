window.addEventListener('DOMContentLoaded',()=>{
    const logoAnimate = document.getElementById('loading');
    setTimeout(()=>{
        logoAnimate.classList.add('loaded');
    },4000)
    setInterval(()=>{
        const pathList=document.querySelectorAll('.path');
        for (let i = 0; i < pathList.length; i++) {
            const path = pathList[i];
            pathList[i].classList.add('active');
        }
        console.log(pathList);

        const fvBoj=document.querySelector('.fv-job');
        fvBoj.classList.add('fv-job-animation')
    },4000)
});