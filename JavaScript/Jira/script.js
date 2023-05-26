var uid = new ShortUniqueId();
const addBtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");
const allPriorityColors = document.querySelectorAll(".priority-color");
let colors = ['lightpink', 'lightgreen', 'lightblue', 'black'];
let modalPriorityColor = colors[colors.length - 1];
let textAreaCont = document.querySelector(".textarea-cont");

const mainCont = document.querySelector(".main-cont");



let isModalPresent = false;
addBtn.addEventListener("click" , function() {
    if(!isModalPresent) {
        modalCont.style.display = "flex";
    }
    else{
        modalCont.style.display = "none";
    }
    isModalPresent = !isModalPresent;
});

//console.log(allPriorityColors);

allPriorityColors.forEach(function (colorElement) {
    colorElement.addEventListener("click", function () {
        allPriorityColors.forEach(function (priorityColorElem) {
            priorityColorElem.classList.remove("active");
        });
        colorElement.classList.add("active");
        modalPriorityColor = colorElement.classList[0];
    });
});

modalCont.addEventListener("keydown", function (e) {
    let key = e.key;
    if(key == "Shift"){
        console.log(modalPriorityColor);
        console.log(textAreaCont.value);
        createTicket(modalPriorityColor, textAreaCont.value);
        modalCont.style.display = "none";
        isModalPresent = false;
        textAreaCont.value = "";
        allPriorityColors.forEach(function (colorElem) {
            colorElem.classList.remove("active");
        })
    }
}); 

function createTicket(ticketColor, data, ticketId) {
    let id = ticketId || uid();
    let ticketCont = document.createElement("div"); 
    ticketCont.setAttribute("class", "ticket-cont");
    ticketCont.innerHTML = `
        <div class="ticket-color ${ticketColor}"></div>
        <div class="ticket-id">${id}</div>  
        <div class="task-area">${data}</div>
    `;

    mainCont.appendChild(ticketCont);

    if(!ticketId) {
        ticketArr.push({ticketColor, data, ticketId: id});
        localStorage.setItem("tickets", JSON.stringify(ticketArr));
    }
}
