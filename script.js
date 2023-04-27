const togt = document.getElementById("cbox");
const html = document.getElementById("html");
togt.addEventListener("change", togth);
function togth(){
    if(togt.checked){
        html.dataset.togl = "dark";
    }
    else{
        html.dataset.togl = "light";
    }
}