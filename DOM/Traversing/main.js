function select(){
    var oneLi = document.getElementsByClassName('active');
    oneLi[0].classList.remove('active');
}
select();

function selectFirst(){
    var first = document.querySelector("div").firstElementChild.firstElementChild.nextElementSibling;
    first.className = "active";
};

selectFirst();