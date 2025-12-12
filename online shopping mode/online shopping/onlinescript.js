let cart = [];
let total = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    total += price;

    updateCartUI();
}

function updateCartUI() {
    const cartList = document.getElementById('cartList');
    const totalAmount = document.getElementById('totalAmount');

    cartList.innerHTML = ""; // Clear old items

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - ₹${item.price}`;
        cartList.appendChild(li);
    });

    totalAmount.textContent = `Total: ₹${total}`;
}
