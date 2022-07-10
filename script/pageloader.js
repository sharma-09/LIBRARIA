function playloader() {
    setTimeout(loader, 5000);
}

function loader() {
    document.querySelector(".animation").style.display = "none";
    document.querySelector(".container").style.display = "block";
}