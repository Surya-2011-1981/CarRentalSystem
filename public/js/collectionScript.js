let icon = document.querySelector("#menu-icon");
let list = document.querySelector("ul");
// let show_menu = document.querySelector(".icon");
// let hide_menu = document.querySelector(".close-icon");
icon.onclick = () => {
    list.classList.toggle("active");
};
