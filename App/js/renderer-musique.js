document.querySelector(".page-accueil").addEventListener("click", function () {
    let currentWindow = require('electron').remote.getCurrentWindow();
    currentWindow.loadFile('index-accueil.html');
});

document.querySelector(".page-parcourir").addEventListener("click", function () {
    let currentWindow = require('electron').remote.getCurrentWindow();
    currentWindow.loadFile('index-parcourir.html');
});

document.querySelector(".page-musique").addEventListener("click", function () {
    let currentWindow = require('electron').remote.getCurrentWindow();
    currentWindow.loadFile('index-musique.html');
});

let songs = require('electron').remote.getGlobal('sharedObject').song;
/**
 *
 */
let addTitle = '';


/**
 *
 * @type {string}
 */
let tdTitle = '';
for (let i in songs) {

    tdTitle += '<tr>';
    tdTitle += '<td></td>' ;
    tdTitle += '<td>' + songs[i].title + '</td>' ;
    tdTitle += '<td>' + songs[i].band + '</td>' ;
    tdTitle += '<td>' + songs[i].album + '</td>' ;
    tdTitle += '<td>' + songs[i].duration + '</td>' ;
    tdTitle += '</tr>';
}
document.querySelector('.tdTitle').innerHTML = tdTitle;
