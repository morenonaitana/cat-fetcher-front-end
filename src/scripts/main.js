// this is the main file that pulls in all other modules
// you can require() bower components too!
var example = require("./example");
var giphy = require("./giphy");

example.welcome();

document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('#btnSubmit');
    const catInput = document.getElementById('catInput');
    btn.addEventListener('click', () => {
        giphy.gifRequest(catInput.value);
    })
})
