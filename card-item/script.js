// العناصر المنتجة
const products = [
    { id: 1, name: 'منتج 1', price: 100 },
    { id: 2, name: 'منتج 2', price: 200 },
    { id: 3, name: 'منتج 3', price: 150 },
];

const productList = document.getElementById('productList');
const cartList = document.getElementById('cart');

// عرض المنتجات
function displayProducts() {
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>السعر: ${product.price} ريال</p>
            <button onclick="addToCart(${product.id})">أضف إلى السلة</button>
        `;
        productList.appendChild(productDiv);
    });
}

// إضافة المنتجات إلى سلة المشتريات
function addToCart(productId) {
    const selectedProduct = products.find(product => product.id === productId);
    if (selectedProduct) {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${selectedProduct.name} - ${selectedProduct.price} ريال`;
        cartList.appendChild(cartItem);
    }
}

// تنفيذ دالة عرض المنتجات
displayProducts();
