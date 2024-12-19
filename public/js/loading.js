window.addEventListener('DOMContentLoaded',()=>{
    const logoAnimate = document.getElementById('loading');
    setTimeout(()=>{
        logoAnimate.classList.add('loaded');
    },3200)
});