for(var i = 0; i < localStorage.length; i++){

    // Retrieve and parse the stored cart items from local storage
    const storedCartItems = localStorage.getItem(localStorage.key(i));

    // Check if the storedCartItems is not null (i.e., there is data in localStorage)
    if (storedCartItems) {
        // Parse the JSON string into an array
        const productArray = JSON.parse(storedCartItems);
        
        productArray.forEach(function(product, index){
        
            const itemContainer = document.createElement('div');
            itemContainer.innerHTML = `
                <div class="cart__container-items__list-product__container">
                    <div class="cart__container-items__list-product__image-container">
                        <img src="${product.img}" alt="product">
                    </div>
                        <p>${product.name}</p>
                </div>
                <div class="price__and__button-wrapper">
                    <div class="remove__button-container">
                        <button class="remove__button">x</button>
                    </div
                    <div class="cart__container-items__list-price__wrapper">
                        <p class="cart__container-items__list-price">${product.price}</p>
                    </div>
                </div>
                `;
            const itemWrapper = document.querySelector('#items__container');
            itemWrapper.appendChild(itemContainer);
            itemContainer.classList.add('cart__container-items__list-container');
            

            /* Total price */
            const totalPriceElement = document.querySelector('#total__price');
            const totalPriceNumber = Number(product.price.slice(1)); //Make product.price string to number
            let totalPrice =  Number(totalPriceElement.innerHTML); //totalPrice = nul as deafault
            totalPrice = totalPrice + totalPriceNumber; //Adds the total price
        
            console.log(totalPrice);
            totalPriceElement.innerHTML = `${totalPrice}`; 

            //localstorage.removeItem
            
            itemContainer.addEventListener('click', function(e){
                if(e.target.classList.contains('remove__button')){
                    localStorage.removeItem(e.target.parentElement.parentElement.previousElementSibling.children[1].innerHTML);
                    location.reload()
                    console.log(e.target.parentElement.parentElement.previousElementSibling.children[1].innerHTML);
                }
            })
            

            }
        );
    
    
};
}
// Dialog
const form = document.querySelector('#form');
const dialog = document.querySelector('#dialog');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from actually submitting
    dialog.showModal(); // Show the dialog box
    //timer
    setTimeout(function(){
        dialog.removeAttribute('open')

    }, 2000);
});




