let arrow = document.getElementsByClassName("icon_link");

for(let i=0; i<arrow.length; i++){
    arrow[i].addEventListener("click", (e) => {
        // console.log(e);
        // console.log(e.target);
        let arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("showMenu");
        // arrowParent.classList.toggle("show")
    })
}

// function openNav() {
//     document.getElementById("navigation").style.visibility = "visible";
//     // document.getElementById("container").style.background = "rgba(0, 0, 0, 0.2)";
// }


const mainMenu = document.querySelector(".navigation");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const container = document.getElementById("container");

// openMenu.addEventListener('click', show);
// closeMenu.addEventListener('click', close);

function show(){
    mainMenu.style.width = "250px";
    mainMenu.style.display = "block";
    document.body.style.backgroundColor = "rgba(104, 99, 99, 0.35)";
    document.body.style.opacity = "0.9";
}

function hide(){
    mainMenu.style.width = "0";
    mainMenu.style.display = "none"
    document.body.style.backgroundColor = "white";
    document.body.style.opacity = "1";
}

