let root=document.getElementById("root")
let pass=document.createElement("input");
pass.setAttribute('type','password');
let btn=document.createElement("button");
btn.addEventListener("click",()=>checkpass());
btn.innerHTML="Login"
function checkpass(){
    if(pass.value==="1234"){
        localStorage.setItem("admin",JSON.stringify(true))
        window.location.href="../admin/Admin.html"
    }
    else{
        alert("booooo you wrong?")
    }
}

root.append(pass);
root.append(btn)