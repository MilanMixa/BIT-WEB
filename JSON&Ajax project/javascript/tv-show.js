let tvShowId = window.localStorage.id;
document.querySelector("h2").innerText = window.localStorage.show;
const tvImg = document.createElement("img");
let imgsrc = localStorage.getItem("tv-image")
tvImg.setAttribute("src", imgsrc);
document.querySelector(".imageDiv").append(tvImg)
const endpoint1 = `http://api.tvmaze.com/shows/${tvShowId}/seasons`;
let seasons = document.getElementById("seasonTitle");
let seasonDate = document.querySelector(".season-date");
let castCont = document.querySelector(".cast");
let cast = document.getElementById("castTitle");
let castUl = document.querySelector(".castList");
let showInfo = document.querySelector(".showInfo");

// REQUEST FOR SEASONS STARTS HERE

const xhr = new XMLHttpRequest();
xhr.open("GET", endpoint1, true)
xhr.onload = function () {
    const request1 = JSON.parse(xhr.responseText);
    console.log(request1);
    seasons.textContent = `Seasons (${request1.length})`

    seasonDate.innerHTML = ''
    request1.forEach(function (el) {
        let seasonList = document.createElement("li");
        let firstDate = el.premiereDate;
        let lastDate = el.endDate;

        seasonList.textContent = `${firstDate} ${lastDate}`
        seasonDate.append(seasonList)
    })
}
xhr.send();

// REQUEST FOR CAST STARTS HERE

const endpoint2 = `http://api.tvmaze.com/shows/${tvShowId}/cast`;
const xhr1 = new XMLHttpRequest();
xhr1.open("GET", endpoint2, true)
xhr1.onload = function () {
    const requst2 = JSON.parse(xhr1.responseText);
    castUl.innerHTML = ''
    requst2.forEach(function (el) {
        let castList = document.createElement("li");
        let castName = el.person.name;
        castList.textContent = castName;
        castUl.append(castList);
    })

}
xhr1.send()

// REQUEST FOR DETAILS STARTS HERE

showInfo.innerHTML = ''
const endpoint3 = `http://api.tvmaze.com/shows/${tvShowId}`;
const xhr2 = new XMLHttpRequest();
xhr2.open("GET", endpoint3, true);
xhr2.onload = function () {
    const request3 = JSON.parse(xhr2.responseText);
    console.log(request3);
    showInfo.innerHTML = request3.summary;
}
xhr2.send();