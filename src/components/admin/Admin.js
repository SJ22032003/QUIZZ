let admin=JSON.parse(localStorage.getItem("admin"))

if(!admin){
    window.location.href="../loginAuth/LoginAuth.html";
}

let logout =document.getElementById("logout");

logout.addEventListener("click",()=>logoutplease())

function logoutplease(){
    localStorage.clear();
    window.location.href="../../../index.html"
}