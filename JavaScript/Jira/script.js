const addBtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");
let colors = ['lightpink', 'lightgreen', 'lightblue', 'black'];
let modalPriorityColor = colors[colors.length - 1];
let isModalPresent = false;
addBtn.addEventListener("click" , function() {
    if(!isModalPresent) {
        modalCont.style.display = "flex";
    }
    else{
        modalCont.style.display = "none";
    }
    isModalPresent = !isModalPresent;
})

const allPriorityColors = document.querySelectorAll(".priority-color");

console.log(allPriorityColors);

allPriorityColors.forEach(function (colorElement) {
    colorElement.addEventListener("click", function () {
        allPriorityColors.forEach(function (priorityColorElem) {
            priorityColorElem.classList.remove("active");
        });
        colorElement.classList.add("active");
    });
});

modalCont.addEventListener("keydown", function (e) {
    let key = e.key;
    if(key == "Shift"){
        createTicket(modalPriorityColor, text);
        modalCont.style.display = "none";
        isModalPresent = false;
    }
});