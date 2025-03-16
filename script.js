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
document.querySelector('.reg-icon').addEventListener('click', LogInBlock);

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

//-------------------------Most Orderd Section------------------------//
let mostOrderdGames = [
    {name: 'Crew', price: '5$', img: 'img/orderd/crew.jpg', details: "bla bla bla bla bla bla bla bla bla", SalesCount: "322", Categ: "Fortnite"},
    {name: 'Vbucks', price: '30$', img: 'img/orderd/vbucks.webp', details: "bla bla bla bla bla bla bla bla bla", SalesCount: "67", Categ: "Fortnite"},
    {name: 'itemShop Gifts', price: '8$', img: 'img/orderd/gifts.webp', details: "bla bla bla bla bla bla bla bla bla", SalesCount: "43", Categ: "Fortnite"},
    {name: 'Playstation Store', price: '7.5$', img: 'img/orderd/psnStore.png', details: "bla bla bla bla bla bla bla bla bla", SalesCount: "220", Categ: "Playstation"},
    {name: 'Playstation Plus', price: '20$', img: 'img/orderd/plus.png', details: "bla bla bla bla bla bla bla bla bla", SalesCount: "143", Categ: "Playstation"},
    {name: 'GamePass Ultimate', price: '50$', img: 'img/orderd/ultimate.webp', details: "bla bla bla bla bla bla bla bla bla", SalesCount: "112", Categ: "Xbox"},
    {name: 'GamePass Core', price: '32$', img: 'img/orderd/core.jpg', details: "bla bla bla bla bla bla bla bla bla", SalesCount: "121", Categ: "Xbox"},
    {name: 'GamePass PC', price: '25$', img: 'img/orderd/pcgamepass.png', details: "bla bla bla bla bla bla bla bla bla", SalesCount: "171", Categ: "Xbox"},
    {name: 'Xbox Store', price: '7.5$', img: 'img/orderd/xboxGiftCards.png', details: "bla bla bla bla bla bla bla bla bla", SalesCount: "290", Categ: "Xbox"},
];

let mostOrderdGames_SORTED = mostOrderdGames.sort((a,b)=>{
    return b.SalesCount - a.SalesCount ;
});
let categ = document.getElementById("most-categ-list");
let mostOrderdCardsDiv = document.querySelector(".most-orderd-cards");
let categories = new Set();
let currentIndex = 0;
let priceRadio = document.getElementById("price");
let soldRadio = document.getElementById("sold");
let nameRadio = document.getElementById("name");

priceRadio.addEventListener('change', function() {
    if (priceRadio.checked) {
        mostOrderdGames_SORTED=mostOrderdGames_SORTED.sort((a,b)=>{
            let priceA = parseInt(a.price.replace('$', ''));
            let priceB = parseInt(b.price.replace('$', ''));
            return priceA - priceB;
        })
        
        displayMostOredersCard(mostOrderdGames_SORTED);
    }
});
soldRadio.addEventListener('change', function() {
    if (soldRadio.checked) {
        mostOrderdGames_SORTED=mostOrderdGames_SORTED.sort((a,b)=>{
            return b.SalesCount - a.SalesCount ;
        })
        
        displayMostOredersCard(mostOrderdGames_SORTED);
    }
});

nameRadio.addEventListener('change',function(){
    if(nameRadio.checked){
        mostOrderdGames_SORTED = mostOrderdGames_SORTED.sort((a, b) => a.name.localeCompare(b.name));
    }
    displayMostOredersCard(mostOrderdGames_SORTED);
})




mostOrderdGames.forEach(game => {
    categories.add(game.Categ);
});

categories.forEach(c => {
    let option = document.createElement('option');
    option.value = c;
    option.textContent = c; 
    categ.appendChild(option);
});


categ.addEventListener('change',function(){
    let selectedCategory = categ.value;
    if(selectedCategory==="All"){
        mostOrderdGames_SORTED=mostOrderdGames;
    }
    else{
        mostOrderdGames_SORTED = mostOrderdGames.filter(game => game.Categ === selectedCategory);
        
    }
    displayMostOredersCard(mostOrderdGames_SORTED);
    
})



function displayMostOredersCard(games) {
    mostOrderdCardsDiv.style.transform="";
    currentIndex=0;
    mostOrderdCardsDiv.innerHTML=``;
    games.forEach(game => {
        let card = document.createElement("div");
        card.classList.add("mostOrderdCard");
        card.innerHTML = `
        <div class='front'>
            <p class="details"> ! </p>
            <img src="${game.img}">
            <p class="card-title">${game.name}</p>
            <p class="price">Price: ${game.price}</p>
            <p class="price">Sales Count: ${game.SalesCount}</p>
            <div class="add-to">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="fav">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                <button> Add to Cart </button>
            </div>
        </div>
        <div class="back" style="display: none">
            <p class="the-details">${game.details}</p>
            <button class="back-btn">Go Back</button>
        </div>
        `;
        mostOrderdCardsDiv.appendChild(card);
    });

    
    let mostOrderdCards = document.querySelectorAll(".mostOrderdCard");
    mostOrderdCards.forEach(card => {
        let detailsBtn = card.querySelector(".details");
        let front = card.querySelector(".front");
        let back = card.querySelector(".back");
        let backBtn = card.querySelector(".back-btn");
        
        detailsBtn.addEventListener("click", () => {
            card.style.transform = "rotateY(180deg)";
            front.style.display = "none";
            back.style.display = "flex";
        });
        backBtn.addEventListener("click", () => {
            card.style.transform = "rotateY(0deg)";
            front.style.display = "flex";
            back.style.display = "none";
        });
    });
}

displayMostOredersCard(mostOrderdGames_SORTED);

let card = document.querySelector(".mostOrderdCard");
let cardWidth = card.offsetWidth + 50;
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

function updateSlide() {
    let offset = -(currentIndex * cardWidth);
    mostOrderdCardsDiv.style.transform = `translateX(${offset}px)`;
    mostOrderdCardsDiv.style.transition = "transform 0.5s ease-in-out";
}

nextBtn.addEventListener("click", () => {
    if (currentIndex < mostOrderdGames_SORTED.length - 3) { 
        currentIndex++;
        updateSlide();
    }
});

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) { 
        currentIndex--;
        updateSlide();
    }
});