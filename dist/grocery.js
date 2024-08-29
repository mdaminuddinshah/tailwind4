let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let lists = document.querySelectorAll(".lists");
let list = document.querySelector("#list");

let currentIndex = 0;
let lefts = -12;

next.addEventListener("click", () => {

    if(currentIndex < lists.length - 1){
        currentIndex +=1
    };

    let checkleft = lists[currentIndex].offsetLeft;
    list.style.left = [-checkleft + lefts] + "px";
});

prev.addEventListener("click", () => {
    if(currentIndex > 0){
        currentIndex -=1
    } 

    let checkleft2 = lists[currentIndex].offsetLeft;
    list.style.left = -checkleft2 + "px";
});