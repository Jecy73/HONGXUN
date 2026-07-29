
const cards=document
.querySelectorAll(".card");


cards.forEach(card=>{


card.onclick=function(){


this.style.transform=
"scale(1.05)";


this.style.boxShadow=
"0 0 25px #d5ad55";



setTimeout(()=>{


this.style.transform="";


},800);



}



});
