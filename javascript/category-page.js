const extraList = document.querySelectorAll(".xtra-list")
const viewAll = document.querySelector(".view-all")

viewAll.addEventListener("click", showHide);
function showHide() {

    let list = this.previousElementSibling;
    console.log(list.style.display)// empty string and none are not equal thing
    if (list.style.display === "" || list.style.display === "none") {
        list.style.display = "block"
        this.textContent = "Short List"
    }
    else {
        list.style.display = "none"
        this.textContent = "View All"
    }
}
// Fetch Data

const API_URL = "http://localhost:3000/";
const response = await fetch(API_URL + 'items');
const product = await response.json();
const productList = document.querySelector('#product-list');
//console.log(product);

//creat function to dislpay all products

function displayProducts(product) {
    productList.innerHTML = ''; // Clear the current list
    product.forEach(function (product) {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <p>${product.name}</p>
            <p>${product.price}</p>
            <button>Add to Cart</button>
        `;

        productDiv.addEventListener("click", productDetail);
        function productDetail() {
            window.location.assign(`/single-produkt.html?name=${product.name}`)
        };

        productList.appendChild(productDiv);
    });
}
//displayProducts(product); eta thakleo prob nai 20 product e show korbe karon nicher line a tai kora ase

// Event listener for the dropdown change (product count)
document.getElementById('product-count').addEventListener('change', function () {
    const selectedCount = parseInt(this.value);
    displayProducts(product.slice(0, selectedCount));
});
// Initial display of 20 products
displayProducts(product.slice(0, 20));


//dispplay products by category

const categories = Array.from(document.querySelectorAll(".category-page__left_ul_li"));
categories.forEach(category => category.addEventListener("click", showItems));
/*categories.forEach(function(category) {
    category.addEventListener("click",showItems )
});*/

function showItems() {
    const categoryName = this.textContent;
    const filteredProducts = product.filter(product =>
        product.category.slice(0, 2) === categoryName.slice(0, 2));
    displayProducts(filteredProducts);
    //console.log("filter", filteredProducts);
}
// Function to sort products by name, lowest price and highest price
function sortProducts(product, criteria) {
    let sortedProducts = [...product];
    if (criteria === 'lowest_price') {
        sortedProducts.sort((a, b) => parseFloat(a.price.replace(/[^0-9.-]+/g, "")) - parseFloat(b.price.replace(/[^0-9.-]+/g, ""))); // Ascending order
    } else if (criteria === 'highest_price') {
        sortedProducts.sort((a, b) => parseFloat(b.price.replace(/[^0-9.-]+/g, "")) - parseFloat(a.price.replace(/[^0-9.-]+/g, ""))); // Descending order
    } else if (criteria === 'name') {
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    }
    return sortedProducts;
}
// Event listener for the dropdown change (sort options)
document.getElementById('sort-options').addEventListener('change', function () {
    const sortCriteria = this.value;
    const sortedProducts = sortProducts(product, sortCriteria);
    const selectedCount = parseInt(document.getElementById('product-count').value);
    displayProducts(sortedProducts.slice(0, selectedCount));
});

// Function to filter products by price range
function filterProductsByPrice(products, minPrice, maxPrice) {
    return products.filter(product => {
        const price = parseFloat(product.price.replace(/[^0-9.-]+/g, ""));
        return price >= minPrice && price <= maxPrice;
    });
}
// Event listener for the price range selection
document.querySelectorAll('.category-page__left__li-shop_by-price').forEach(function (priceRange) {
    priceRange.addEventListener('click', function () {
        const minPrice = parseFloat(this.getAttribute('data-min'));
        const maxPrice = parseFloat(this.getAttribute('data-max'));
        const filteredProducts = filterProductsByPrice(product, minPrice, maxPrice);
        console.log("...", filteredProducts);
        displayProducts(filteredProducts);
    });
});


document.querySelector('.row_icon-white').addEventListener('click', function() {
            document.getElementById('product-list').classList.remove('product-list');
        });

        document.querySelector('.grid_icon-gold').addEventListener('click', function() {
            document.getElementById('product-list').classList.add('product-list');
        });

 



