let root=document.getElementById("root")
let pass=document.createElement("input");
pass.setAttribute('type','password');
let btn=document.createElement("button");
btn.classList.add('btnAdmin');
btn.addEventListener("click",()=>checkpass());
btn.innerHTML="Login"
function checkpass(){
    if(pass.value=="1234"){
        localStorage.setItem("admin",JSON.stringify(true))
        window.location.href="../admin/Admin.html"
    }

    else{
        // alert("booooo you wrong?")
        let alr = document.createElement('div');
        alr.setAttribute('role','alert')
        alr.classList.add('alert');
        alr.classList.add('alert-warning');
        alr.classList.add('animate__animated', 'animate__headShake');
        alr.innerHTML = 'Wrong Password! Try Again';
        root.append(alr);
        
    }
}

root.append(pass);
root.append(btn)