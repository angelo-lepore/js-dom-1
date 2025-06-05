const onOffButton = document.querySelector(".on_off_button");
const btnOn = document.querySelector(".btnOn");
const btnOff = document.querySelector(".btnOff");

const lampOn = document.querySelector(".lampOn");
const lampOff = document.querySelector(".lampOff");

onOffButton.addEventListener("click", function(){

    lampOn.classList.toggle("d-none")
    lampOff.classList.toggle("d-none")
})

onOffButton.addEventListener("click", function(){

    btnOn.classList.toggle("d-none")
    btnOff.classList.toggle("d-none")
})
