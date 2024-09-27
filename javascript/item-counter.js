const itemCounterContainer = document.querySelector('#shopping__cart-items__number-container');

if(localStorage.length >= 1){
    const itemCounter = document.createElement('p');
    itemCounter.innerHTML = localStorage.length
    itemCounterContainer.appendChild(itemCounter);
    itemCounter.classList.add('shopping__cart-items__number');
}