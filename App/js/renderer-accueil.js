document.querySelector(".page-accueil").addEventListener("click", function() {
   let currentWindow = require('electron').remote.getCurrentWindow();
   currentWindow.loadFile('index-accueil.html');
});

document.querySelector(".page-parcourir").addEventListener("click", function() {
    let currentWindow = require('electron').remote.getCurrentWindow();
    currentWindow.loadFile('index-parcourir.html');
});

document.querySelector(".page-musique").addEventListener("click", function() {
    let currentWindow = require('electron').remote.getCurrentWindow();
    currentWindow.loadFile('index-musique.html');
});
