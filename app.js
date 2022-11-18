var btnTranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txtinput");
var outputDiv = document.querySelector("#output");
btnTranslate.addEventListener("click",clickHandler);

function clickHandler() {
   outputDiv.innerText="asasjsjsjs "+ txtinput.value;
}

    
