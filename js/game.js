
let questions=[


{


q:"青岛工人运动纪念馆哪一年正式开馆？",

a:["2019年","2021年","2023年"],

right:1


},


{


q:"许振超创造了什么？",

a:["郝建秀工作法","振超效率","上青天"],

right:1


},


{


q:"青岛工匠日是哪一天？",

a:["7月26日","5月1日","10月1日"],

right:0


}



];



let index=0;

let score=0;



let q=document
.getElementById("question");


let options=document
.getElementById("options");



function load(){


q.innerHTML=

questions[index].q;


options.innerHTML="";



questions[index].a.forEach((x,i)=>{


let div=document
.createElement("div");


div.className="option";


div.innerHTML=x;



div.onclick=function(){


if(i===questions[index].right){

score+=10;

document
.getElementById("score")
.innerHTML=score;

}



index++;


if(index<questions.length){

load();

}

else{


finish();


}


}


options.appendChild(div);



});



}



function finish(){


q.innerHTML="挑战完成";


options.innerHTML="";


document
.getElementById("certificate")
.style.display="block";


}



load();