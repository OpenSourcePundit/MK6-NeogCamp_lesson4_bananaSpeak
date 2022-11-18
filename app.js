var btnTranslate = document.querySelector("#btn-translate");
var x=1;

btnTranslate.addEventListener("click",function clickEventHandler(){
    x++;
    console.log("clicked "+x+" times")
})

/*
checking QUERYSELECTOR
 in browser console -- wrote  
 document                                            this gives the complete document also can write :
 document.body                                       this gives complete body attributes
 document.body.style.backgroundColor="green"         to ged background green
 */

