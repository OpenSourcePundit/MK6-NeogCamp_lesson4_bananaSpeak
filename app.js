var btnTranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txtinput");
var outputDiv = document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/minion.json"
//var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslationURL(text){    //get mdified GET url including text
    return serverURL+"?text="+text;
}

function errorHandler(error){ //errorhandling using catch , this is a callback function
    console.log("Error Occured"+error);
    alert("Error Occured, Please try after sometime")
}

function clickHandler() {    
    var inputText = txtinput.value; //extracting inputText
    //fetch using translation URL, calling server for processing
   fetch(getTranslationURL(inputText)) 
   .then(fuck => fuck.json())
   .then(fux1 => {var translatedText=fux1.contents.translated;
    outputDiv.innerText=translatedText;}) //output as innertext
    .catch(errorHandler)
   }

   btnTranslate.addEventListener("click",clickHandler);
