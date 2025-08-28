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


//clear button...........
const historyList = document.getElementById("history-list")
const clearBtn = document.getElementById("clear-history");

function logCall(name,number){
   historyList.innerHTML = 
    '<div class="flex justify-between items-center border-b px-2 py-2">'+
     ' <div>'
       ' <span class="font-medium">${name}</span><br>'+
        '<span class="text-sm text-gray-600">${number}</span>'+
     ' </div>'+
    '</div>'
   + historyList.innerHTML;
}
clearBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});


let copyCount=0
let copyButtons = document.querySelectorAll(".copy-btn");
let callButtons = document.querySelectorAll(".call-btn");
let navbarCopy = document.getElementById("navbar-copy-btn")
let historyLists = document.getElementById("history-list");
for (let i = 0; i < copyButtons.length; i++) {
  copyButtons[i].addEventListener("click", function() {
    let number = this.getAttribute("data-number");
     navigator.clipboard.writeText(number);
     alert("Copied: " + number);
     copyCount++;
     navbarCopy.textContent = copyCount + " Copy"
      });
}

for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].addEventListener("click", function() {
    let number = this.parentElement.querySelector(".copy-btn").getAttribute("data-number");
    let time = new Date().toLocaleTimeString();
    
    let entry = document.createElement("p");
    entry.textContent = "Called " + number + " at " + time;
      if (historyLists.firstChild) {
      historyLists.insertBefore(entry, historyLists.firstChild);
    } else {
      historyLists.appendChild(entry);
    }
 });
};




    


  
    
  

 
