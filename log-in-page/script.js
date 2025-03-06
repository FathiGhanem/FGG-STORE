let loginBox =document.querySelector('.login-btn');
let email = document.querySelector('.emailinput');
let pass = document.querySelector('.passinput');

loginBox.style.opacity='0';
loginBox.style.visibility='hidden';

let logIncheck = function(){

 if(email.value!="" &&  pass.value!=""){
    loginBox.style.opacity='1';
loginBox.style.visibility='visible';

}else{
    loginBox.style.opacity='0';
loginBox.style.visibility='hidden';
}
}


email.addEventListener('input', logIncheck);
pass.addEventListener('input', logIncheck);