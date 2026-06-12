let cartCount = 0;

const buttons = document.querySelectorAll(".add-cart");
const cartDisplay = document.getElementById("cart-count");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        cartDisplay.textContent = cartCount;

        alert("Product Added To Cart!");
    });
});