var btnTranslate = document.querySelector("#btn-translate");
var x=1;

btnTranslate.addEventListener("click",() => {
        x++;
        console.log("clicked " + x + " times");
    })
//here right now its converted to arrow function
//Callback function  basically addEventListner is a callback function. we can make additional function and extract it out as well
