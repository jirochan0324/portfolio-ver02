window.onload = function() {
    const logoAnimate = document.getElementById('loading');
    setTimeout(()=>{
        logoAnimate.classList.add('loaded');
    },4500)
}