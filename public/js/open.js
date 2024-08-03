const url=document.getElementById("linkOpen");
url.onclick=function(event){
    event.preventDefault()
    const href=event.target.href;
    open(href,"a")
}