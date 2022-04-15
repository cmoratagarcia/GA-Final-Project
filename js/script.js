/*Dropdown Menus.
Show menu 1 (Beers) and hide the other 2*/

let beerDropdown = document.getElementById("beer-dropdown");
let breweriesDropdown = document.getElementById("breweries-dropdown");
let signInDropdown = document.getElementById("sign-in-dropdown");

let beerMenu = document.getElementById("beer-menu");
let breweriesMenu = document.getElementById("breweries-menu");
let signInMenu = document.getElementById("sign-in-menu");


beerDropdown.addEventListener("mouseover", function() {
    beerMenu.classList.add("show");
    breweriesMenu.classList.remove("show");
    signInMenu.classList.remove("show");
})

/*Hide the menu when not hovering over the navigation*/
beerDropdown.addEventListener("mouseleave", function() {
    beerMenu.classList.remove("show");
})

/*Show menu 2 (Breweries) and hide the other 2*/
breweriesDropdown.addEventListener("mouseover", function() {
    beerMenu.classList.remove("show");
    breweriesMenu.classList.add("show");
    signInMenu.classList.remove("show");
})

/*Hide the menu when not hovering over the navigation*/
breweriesDropdown.addEventListener("mouseleave", function() {
    breweriesMenu.classList.remove("show");
})

/*Show menu 3 (Sign In) and hide the other 2*/
signInDropdown.addEventListener("mouseover", function() {
    beerMenu.classList.remove("show");
    breweriesMenu.classList.remove("show");
    signInMenu.classList.add("show");
})

/*Hide the menu when not hovering over the navigation*/
signInDropdown.addEventListener("mouseleave", function() {
    signInMenu.classList.remove("show");
})

/*Mobile side-menu*/
/* When you click on the hamburger icon, it shows the menu */
document.getElementById("hamburger-menu").addEventListener("click", function() {
    document.getElementById("side-menu").classList.add("mobile-show-menu");
})

/* When you click the X, it hides the menu*/
document.getElementById("menu-close").addEventListener("click", function() {
    document.getElementById("side-menu").classList.remove("mobile-show-menu");
})

/*Save button. When you click on the star button, it toggles between Save/Saved.*/
let saveButton = document.querySelectorAll(".save-button");

saveButton.forEach(item => {
    item.addEventListener("click", function(e) {
        let clickedItem = e.currentTarget;
        let text = clickedItem.innerText.trim();
        if (text == "Save") {
            clickedItem.innerHTML = "<i class='fa fa-solid fa-star'></i> Saved";
        } else {
            clickedItem.innerHTML = "<i class='far fa-regular fa-star'></i> Save";
        };
    })
})

/*Mobile dropdowns.
Show menu 1 (Beers) and hide the other 2*/
document.getElementById("mobile-beer-dropdown").addEventListener("click", function() {
    document.getElementById("beer-item").classList.toggle("hidden");
    document.getElementById("brewery-item").classList.add("hidden");
    document.getElementById("sign-in-item").classList.add("hidden");
})

/*Show menu 2 (Breweries) and hide the other 2*/
document.getElementById("mobile-breweries-dropdown").addEventListener("click", function() {
    document.getElementById("beer-item").classList.add("hidden");
    document.getElementById("brewery-item").classList.toggle("hidden");
    document.getElementById("sign-in-item").classList.add("hidden");
})

/*Show menu 3 (Sign In) and hide the other 2*/
document.getElementById("mobile-sign-in-dropdown").addEventListener("click", function() {
    document.getElementById("beer-item").classList.add("hidden");
    document.getElementById("brewery-item").classList.add("hidden");
    document.getElementById("sign-in-item").classList.toggle("hidden");
})

/*Sign up form*/
document.getElementById("sign-up-form").addEventListener("submit",
    function(event) {
        // event.preventDefault() prevents the browser from refreshing
        event.preventDefault();

        let password = document.getElementById("password");

        if (password.value.length < 8) {
            password.focus;
            document.getElementById("error").classList.remove("hidden");
            // Show an error message on the DOM
        } else {
            document.getElementById("sign-up-page").setAttribute('style', 'display: none');
            document.getElementById("success-modal").classList.remove("hidden");
        }
    }
);