var btnTranslate = document.querySelector("#btn-translate");
var x=0;
var txtinput = document.querySelector("#txtinput");
/*console.log("hey thats it"+text1);//We can also read this value by inspect and the store it as global variable(textarea), the use "variable.value"*/
btnTranslate.addEventListener("click",clickHandler());


function clickHandler() {
        x++;
        console.log("clicked " + x + " times from external function");
        console.log(" hey thats it ",txtinput.value);
    };

