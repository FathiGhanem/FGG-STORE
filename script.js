let LogInNone = function(){
    
    document.querySelector('.log-in-frame').style.opacity='0';
    document.querySelector('.log-in-frame').style.visibility="hidden";
    document.querySelector('.content').style.opacity='1';
    document.querySelector('.content').style.pointerEvents = 'all';
}
let LogInBlock = function(){
    document.querySelector('.log-in-frame').style.opacity='1';
    document.querySelector('.log-in-frame').style.visibility='visible';
    document.querySelector('.content').style.opacity='.5';
    document.querySelector('.content').style.pointerEvents = 'none';
    
}

document.querySelector('.close-frame').addEventListener('click', LogInNone);
document.querySelector('.log-in-link').addEventListener('click', LogInBlock);

//--------------------------------------------------------------------//

let imgs1 =['img/promo1.png','img/spiderPromo.avif','img/AstroPromo.jpg','img/blackPromo.png'];
let imgs2 =['img/Rocket.png','img/noout.avif','img/calljpg.jpg','img/promo2.png'];
let promo = document.querySelector('.promos');
let imgs = promo.getElementsByTagName("img");

let rightIcon=document.querySelector('.right-icon');
let leftIcon=document.querySelector('.left-icon');

let changeRight = function(imgSet){
    for(let i =0 ;i<imgs.length;i++){
        imgs[i].src=imgSet[i];
    }
}
let promoRight = function(){
    rightIcon.style.opacity='0';
    rightIcon.style.visibility='hidden';
    leftIcon.style.opacity='1';
    leftIcon.style.visibility='visible';

    changeRight(imgs2);
    
    
}

rightIcon.addEventListener('click',promoRight);

let promoLeft = function(){
    leftIcon.style.opacity='0';
    leftIcon.style.visibility='hidden';
    rightIcon.style.opacity='1';
    rightIcon.style.visibility='visible';
    changeRight(imgs1);
    
    
 
}
leftIcon.addEventListener('click',promoLeft);

