const search = document.getElementById("search");
const searchResult = document.getElementById("search-result");

search.addEventListener("keyup", function (event) {
  searchResult.innerHTML = "";

  const endpoint = `https://api.tvmaze.com/search/shows?q=${search.value}`;
  const xhr = new XMLHttpRequest();
  let response;
  xhr.open("GET", endpoint, true);
  xhr.onload = function () {
    response = JSON.parse(xhr.responseText);

    let allResults = response;
    allResults.forEach((el, index) => {
      if (index > 9) return;
      let mainLi = document.createElement("li");
      mainLi.textContent = el.show.name;
      mainLi.addEventListener("click", function (event) {
        window.localStorage.setItem("id", el.show.id);
        window.localStorage.setItem("show", el.show.name);
        window.localStorage.setItem("tv-image", el.show.image.original);

        document.location = "tv-show.html";
        window.location = "tv-show.html";
        document.querySelector("h1").innerText = el.show.name;
        const tvImg = document.getElementsByTagName("img");
        tvImg[0].setAttribute("src", el.show.image.original);
        document.querySelector(".imageDiv").append(tvImg[0]);
      });
      searchResult.append(mainLi);
    });
  };
  xhr.send();
});
