//navbar heart-icon ...

const heartCount =document.getElementById("heart-count")
const cardHearts =document.querySelectorAll(".card-heart")

let heartCounts=0;
for (let i =0; i<cardHearts.length;i++){
cardHearts[i].addEventListener("click",function(){
heartCounts++;
heartCount.textContent=heartCounts;
}

)
}

//call-button ...........

let coins=100
document.getElementById("coin-count").innerText=coins;
let buttons =document.querySelectorAll(".call-btn")

buttons.forEach(button=>{
    button.addEventListener("click",function(){
let card= button.closest(".card")
let name =card.querySelectorAll("h3")[0].innerText
let num = card.querySelectorAll("h3")[1].innerText
if (coins<20){
    alert("coin-finised!")
    return;
}
coins -=20
document.getElementById("coin-count").innerText=coins
alert ("calling" + name + "("+num+")")
document.getElementById("history-list").innerHTML+=name +"-"+num+"<br>"

    })
});