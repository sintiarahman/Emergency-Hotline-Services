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