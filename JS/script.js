const params = new URLSearchParams(window.location.search); //gets query parameter from url 
const index = params.get("id"); // gets index from url

//if id exists, product is displayed
if (index != null) {
    showProduct(index);
}

function showProduct(index) {
    const products = document.getElementsByClassName("product"); //gets elements with class name product

    for (var i = 0; i < products.length; i++) //loops through each product
        { 
        // Hide everything
        products[i].style.display = "none";

        // Show the matching product
        if (products[i].getAttribute("data-index") == index) {
            products[i].style.display = "flex";
        }
    }
}
