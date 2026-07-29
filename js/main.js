//================
// 金色粒子
//================


for(let i=0;i<45;i++){


let dot=document.createElement("div");


dot.className="dot";


dot.style.left=
Math.random()*100+"%";


dot.style.animationDelay=
Math.random()*8+"s";


dot.style.animationDuration=
5+
Math.random()*8
+"s";


document.querySelector(".particles")
.appendChild(dot);


}





//================
// 页面进入
//================


function enterMuseum(){


document.body
.style.transition="1s";


document.body
.style.opacity="0";


setTimeout(()=>{


location.href=
"overview.html";


},1000);



}






//================
// 微信音乐启动
//================


let music=document
.getElementById("bgm");


document.body
.addEventListener(
"touchstart",
()=>{


music.play()
.catch(()=>{});


},
{
once:true
}

);