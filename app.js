var btnTranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txtinput");
var outputDiv = document.querySelector("#output");
btnTranslate.addEventListener("click",clickHandler);

function clickHandler() {
   outputDiv.innerText="asasjsjsjs "+ txtinput.value;
}

    
/*working with fetch in console*/
var url="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=I am Shashank"
fetch(url)
.then(response=>response.json())
.then(json=>console.log(json))

SAME IS WRITTEN as

fetch(url)
.then(function responseHandler(response){return response.json()})
.then(function logJSON(json){console.log(json)})
