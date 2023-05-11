const togt = document.getElementById("cbox");
const html = document.getElementById("html");
togt.addEventListener("change", togth);
function togth(){
    if(togt.checked){
        html.dataset.togl = "dark";
        localStorage.setItem('theme','dark')
    }
    else{
        html.dataset.togl = "light";
        localStorage.setItem('theme','light')
    }
}

const theme = localStorage.getItem('theme')
if(theme == 'light' || !theme){
    html.dataset.theme = 'light';
}
else {
    html.dataset.theme = 'dark';
    document.getElementById('cbox').checked = true;
}
togth()