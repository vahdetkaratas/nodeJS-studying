const fetch = require("node-fetch");
// npm install node-fetch --save


async function getCurrency(url) {

    const response = await fetch(url);

    const data = await response.json();

    return data;

}

getCurrency("https://api.exchangeratesapi.io/latest")
    .then((response) => console.log(response));