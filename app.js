var inputTxt = document.querySelector('#txt-area');
var btnTranslate = document.querySelector("#btn");
var outputTxt = document.querySelector("#output");

var url="https://api.funtranslations.com/translate/valyrian.json";

function generateURL(text){
    return url + "?text=" + text;

}

function clickHandler(){
    var text=inputTxt.value;
    fetch(generateURL(text))
    .then(response => response.json())
    .then(json => {
        var translatedTxt = json.contents.translated;
        outputTxt.innerText=translatedTxt;
    })
}

btnTranslate.addEventListener("click",clickHandler);


