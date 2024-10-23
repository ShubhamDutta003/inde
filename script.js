// script.js
document.addEventListener("DOMContentLoaded", () => {
    const cartBtn = document.getElementById('cart-btn');
    const cartItemsDiv = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const modal = document.getElementById('cart-modal');
    const closeModalBtn = document.querySelector('.close-btn');
    const productFilter = document.getElementById('product-filter');

    let cart = [];
    let total = 0;

    // Function to add item to cart
    function addToCart(name, price) {
        cart.push({ name, price });
        total += price;
        cartCount.textContent = cart.length;
        updateCart();
    }

    // Function to update cart details
    function updateCart() {
        cartItemsDiv.innerHTML = '';
        cart.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItemsDiv.appendChild(itemDiv);
        });
        cartTotal.textContent = total.toFixed(2);
    }

    // Add event listeners to 'Add to Cart' buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const productDiv = e.target.closest('.product');
            const name = productDiv.getAttribute('data-name');
            const price = parseFloat(productDiv.getAttribute('data-price'));
            addToCart(name, price);
        });
    });

    // Show modal on clicking cart
    cartBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Close modal
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Product filter
    productFilter.addEventListener('input', (e) => {
        const filterText = e.target.value.toLowerCase();
        document.querySelectorAll('.product').forEach(product => {
            const name = product.getAttribute('data-name').toLowerCase();
            product.style.display = name.includes(filterText) ? 'block' : 'none';
        });
    });
});
