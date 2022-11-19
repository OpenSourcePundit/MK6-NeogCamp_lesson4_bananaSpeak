var btnTranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txtinput");
var outputDiv = document.querySelector("#output");
var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
btnTranslate.addEventListener("click",clickHandler);
function getTranslationURL(text){
    return serverURL+"?text="+text;
}
function clickHandler() {    
    var inputText = txtinput.value;
   fetch(getTranslationURL(inputText))
   .then(fuck => fuck.json())
   .then(fux1 => console.log(fux1.contents.translated))
}
