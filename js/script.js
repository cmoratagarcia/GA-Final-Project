/*Dropdown Menus.
Show menu 1 (Beers) and hide the other 2*/
document.getElementById("beer-dropdown").addEventListener("mouseover", function() {
    document.getElementById("beer-menu").classList.add("show");
    document.getElementById("breweries-menu").classList.remove("show");
    document.getElementById("sign-in-menu").classList.remove("show");
})

/*Hide the menu when not hovering over the navigation*/
document.getElementById("beer-dropdown").addEventListener("mouseleave", function() {
    document.getElementById("beer-menu").classList.remove("show");
})

/*Show menu 2 (Breweries) and hide the other 2*/
document.getElementById("breweries-dropdown").addEventListener("mouseover", function() {
    document.getElementById("beer-menu").classList.remove("show");
    document.getElementById("breweries-menu").classList.add("show");
    document.getElementById("sign-in-menu").classList.remove("show");
})

/*Hide the menu when not hovering over the navigation*/
document.getElementById("breweries-dropdown").addEventListener("mouseleave", function() {
    document.getElementById("breweries-menu").classList.remove("show");
})

/*Show menu 3 (Sign In) and hide the other 2*/
document.getElementById("sign-in-dropdown").addEventListener("mouseover", function() {
    document.getElementById("beer-menu").classList.remove("show");
    document.getElementById("breweries-menu").classList.remove("show");
    document.getElementById("sign-in-menu").classList.add("show");
})

/*Hide the menu when not hovering over the navigation*/
document.getElementById("sign-in-dropdown").addEventListener("mouseleave", function() {
    document.getElementById("sign-in-menu").classList.remove("show");
})

/*Mobile side-menu*/
/* When you click on the hamburger icon, it shows the menu */
document.getElementById("hamburger-menu").addEventListener("click", function() {
    document.getElementById("side-menu").classList.add("show-menu");
})

/* When you click the X, it hides the menu*/
document.getElementById("menu-close").addEventListener("click", function() {
    document.getElementById("side-menu").classList.remove("show-menu");
})

/*Save button. When you click on the star button, it toggles between Save/Saved. 
This is the best option I have come up with so far. It changes to Saved but doesn't change back.*/


let saveButton = document.querySelectorAll(".save-button");

saveButton.forEach(item => {
    item.addEventListener("click", function() {
        if (saveButton.innerHTML == "<i class='far fa-regular fa-star'></i> Save") {
            item.innerHTML = "<i class='fa fa-solid fa-star'></i> Saved";
        } else {
            saveButton.innerHTML = "<i class='far fa-regular fa-star'></i> Save";
        };
    })
})