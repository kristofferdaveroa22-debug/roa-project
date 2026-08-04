// Welcome message
window.onload = function () {
    alert("Welcome to the ASUS Demo Website!");
};

// Product buttons
const buttons = document.querySelectorAll(".product-card button");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        const product = this.parentElement.querySelector("h3").textContent;
        alert("You selected: " + product);
    });
});

// Contact form
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    alert("Thank you, " + name + "! Your message has been sent.");

    form.reset();
});