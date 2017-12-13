// this is the main file that pulls in all other modules
// you can require() bower components too!
var giphy = require("./giphy");

document.addEventListener('DOMContentLoaded', function () {
    
    // Create constants
    const btn = document.querySelector('#btnSubmit');
    const catInput = document.getElementById('catInput');

    catInput.addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode;
        if (key === 13) { // 13 is enter
            giphy.gifRequest(catInput.value);
        }
    });
    
    // Fetch the cat action from the submit button click
    btn.addEventListener('click', () => {
        giphy.gifRequest(catInput.value);
    })

})
