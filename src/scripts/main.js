// this is the main file that pulls in all other modules
// you can require() bower components too!
var giphy = require("./giphy");

document.addEventListener('DOMContentLoaded', function () {
    
    // Create constants
    const btn = document.querySelector('#btnSubmit');
    const catInput = document.getElementById('catInput');
    
    // Fetch the cat action from the submit button click
    btn.addEventListener('click', () => {
        giphy.gifRequest(catInput.value);
    })

})
