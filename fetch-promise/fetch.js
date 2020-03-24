const fetch = require("node-fetch");


function getTextFile() {
    fetch("text.txt")
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(err => console.error(err));

}


function getJsonFile() {
    fetch("ex.json")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));

}
// https://api.exchangeratesapi.io/latest

function getExternalApi() {
    fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => {
            console.log(data.rates.TRY)
        })
        .catch(err => console.error(err));
}



//getTextFile();
getJsonFile();
getExternalApi();
