function LogInNone(){
    
    document.querySelector('.log-in-frame').style.opacity='0';
    document.querySelector('.log-in-frame').style.visibility="hidden";
    document.querySelector('.content').style.opacity='1';
    document.querySelector('.content').style.pointerEvents = 'all';
}
function LogInBlock(){
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

function change (imgSet){
    for(let i =0 ;i<imgs.length;i++){
        imgs[i].src=imgSet[i];
        imgs[i].style.animationName = '';
    }
    opOne();
}

function opZeroRight(){

    for(let i =1 ;i<imgs.length;i++){
    imgs[i].style.animationDuration='1s';
    imgs[i].style.animationName='opZero';}
  
}
function opOne (){

    for(let i =0 ;i<imgs.length;i++){
    imgs[i].style.animationDuration='1s';
    imgs[i].style.animationName='opOne';}
  
}
function opZeroLeft(){

    for(let i =0 ;i<imgs.length-1;i++){
    imgs[i].style.animationDuration='1s';
    imgs[i].style.animationName='opZero';}
  
}

function promoRight(){
    imgs[0].style.animationDuration='1s';
    imgs[0].style.animationName='moveRight';
    rightIcon.style.opacity='0';
    rightIcon.style.visibility='hidden';
    leftIcon.style.opacity='1';
    leftIcon.style.visibility='visible';
    
    setTimeout(()=>change(imgs2),1000);
    opZeroRight();
    

}

function promoLeft (){
    imgs[imgs.length-1].style.animationDuration='1s';
    imgs[imgs.length-1].style.animationName='moveLeft';
    leftIcon.style.opacity='0';
    leftIcon.style.visibility='hidden';
    rightIcon.style.opacity='1';
    rightIcon.style.visibility='visible';
    setTimeout(()=>change(imgs1),1000);
    opZeroLeft();
    
}
rightIcon.addEventListener('click',promoRight);
leftIcon.addEventListener('click',promoLeft);
