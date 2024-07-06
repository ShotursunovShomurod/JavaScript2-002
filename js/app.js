const sidebar = document.querySelector(".sidebar");
const btn = document.querySelector(".btn");
const faSolid = document.querySelector(".fa-solid.fa-xmark");
const header = document.querySelector(".header")
const btnTop = document.querySelector(".btnTop")
const faBars = document.querySelector(".fa-solid.fa-bars")
 


window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        header.classList.add("shrink");
    } else if (window.scrollY <= 0) {
        header.classList.remove("shrink");
        btnTop.style.bottom = "-40px";
    }

    if (window.scrollY > 100) {
        btnTop.style.bottom = "30px";
    }
});




faBars.addEventListener("dblclick", () => {
    sidebarOpen();
    console.log("Assalomu alaykum");
});

faSolid.addEventListener("click", sidebarExit);

btn.addEventListener("dblclick", () => {
    sidebarOpen();
    console.log("Assalomu alaykum");
});

function sidebarOpen() {
    sidebar.classList.toggle("show");
}

function sidebarExit() {
    sidebar.classList.remove("show");
}
