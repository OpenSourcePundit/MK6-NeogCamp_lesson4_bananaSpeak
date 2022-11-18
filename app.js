var btnTranslate = document.querySelector("#btn-translate");
var x=1;

btnTranslate.addEventListener("click",clickHandler())


function clickHandler() {
        x++;
        console.log("clicked " + x + " times from external function");
    };
//Callback function  basically addEventListner is a callback function. we can make additional function and extract it out as well
