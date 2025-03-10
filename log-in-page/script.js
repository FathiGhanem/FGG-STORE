let loginBox =document.querySelector('.login-btn');
let email = document.querySelector('.emailinput');
let pass = document.querySelector('.passinput');
let validP = document.querySelector('.valid p');
let validBox = document.querySelector('.valid');

function inValid(){
    loginBox.style.opacity='0';
    loginBox.style.visibility='hidden';
}
function emailValid(){
    
    if(email.value.length===0){
        validBox.style.display='none';
        return false;}
   
    else  if(email.value.includes("@") ){

        validBox.style.display='none';
        return true;
    }
    else {
        validP.textContent="please enter a valid email address";
        validBox.style.display='flex';
        inValid();
        return false;
    }
}
 function passValid(){
    if(pass.value.length === 0){
        validBox.style.display='none';
        return false;
    }
    else if(pass.value.length>=8)
        return true;
    else {
        validP.textContent="Password must be at least 8 characters long.";
        validP.style.fontSize='1.85rem'
        validBox.style.display='flex';
        inValid();
        return false;
    }
}

function valid (){
    if(emailValid() && passValid()){
        loginBox.style.opacity='1';
    loginBox.style.visibility='visible';}else{
        inValid();
    }
}
inValid();
email.addEventListener('change',valid);
pass.addEventListener('input',valid);

