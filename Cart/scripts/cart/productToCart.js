'use strict';

let buttonsAddToCart = document.querySelectorAll('button[data-Id]');
//Перебираем все кнопки добавления товаров в корзину 
// и назначаем им обработку клика
buttonsAddToCart.forEach(function (button) {
    button.addEventListener('click', ProductHandler);
});

/**
 *
 *Функция обработки клика по кнопке добавления в корзину
 * @param {MouseEvent} event
 */
function ProductHandler(event) {
    const productId = event.currentTarget.getAttribute('data-Id');
    addProductToCart(productId);
}