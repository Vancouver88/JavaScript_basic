'use strict';

const openCart = document.querySelector('.basket');
const cartInfo = document.querySelector('.cart__info');
const cartCount = document.querySelector('.cart__count');
const cartProducts = document.querySelector('.cart__info__top');
const cartTotalPrice = document.querySelector('.cart__total')

openCart.addEventListener('click', function () {
    cartInfo.classList.toggle('hidden');
});

/**
 *Функция увеличения счетчика товаров над корзиной
 */
function increaseCartCount() {
    cartCount.textContent++;
}

//Создаем корзину как объект, в которую мы будет "складывать" товары 
//по клику на кнопку
let cart = {};

/**
 *Функция добавляет товар в объект "корзина"
 *а если он там уже находится - то увеличивает его количество на 1
 *
 * @param {number} productId
 */
function addProductIntoCart(productId) {
    if (productId in cart) {
        cart[productId]++;
    }
    if (!(productId in cart)) {
        cart[productId] = 1;
    }
}

/**
 *Функция добавляет товар в корзину, отрисовывая его, если его еще нет в корзине
 *а если он там есть, то увеличивает его количество и стоимость
 *
 * @param {number} productId
 */
function drawProductInCart(productId) {
    let productExist = document.querySelector(`.product__count[data-productId="${productId}"]`)
    if (productExist) {
        calcProductCount(productId);
        calcProductTotalPrice(productId);
    } else {
        drawNewProductInCart(productId);
    }
}

/**
 *Функция добавляет HTML разметку продукта, которого нет в корзине
 *
 * @param {number} productId
 */
function drawNewProductInCart(productId) {
    let newProduct = `
        <div class="cart__product">
            <div>${products[productId].name}</div>
            <div>
                <span class="product__count" data-productId="${productId}">1</span> ед.
            </div>
            <div>${products[productId].price} $</div>
            <div>
                <span class="product__totalprice" data-productId="${productId}">${products[productId].price}</span> $
            </div>
        </div>
    `;
    cartProducts.insertAdjacentHTML("afterend", newProduct);
}

/**
 *Функция увеличивает количество товара, который уже был добавлен в корзину, на 1
 *
 * @param {number} productId
 */
function calcProductCount(productId) {
    let productCount = document.querySelector(`.product__count[data-productId="${productId}"]`);
    productCount.innerText++;
}

/**
 *Функция пересчитывает общую сумму конкретного продукта
 *
 * @param {number} productId
 */
function calcProductTotalPrice(productId) {
    let productTotalPrice = document.querySelector(`.product__totalprice[data-productId="${productId}"]`);
    let totalPrice = (cart[productId] * products[productId].price);
    productTotalPrice.innerText = totalPrice;
}

/**
 *Функция считает общую сумму всех товаров в корзине
 *
 */
function calcCartTotalPrice() {
    let totalCartPrice = 0;
    for (let productId in cart) {
        totalCartPrice += cart[productId] * products[productId].price;
    }
    cartTotalPrice.innerText = totalCartPrice;
}

/**
 *Функция добавления товара в корзину по его ID
 *
 * @param {number} productId
 */
function addProductToCart(productId) {
    increaseCartCount();
    addProductIntoCart(productId);
    drawProductInCart(productId);
    calcCartTotalPrice();
}