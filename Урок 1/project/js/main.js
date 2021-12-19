'use strict';
const products = [
    {id: 1, title: 'Notebook', price: 2000, img: "./images/0.png"},
    {id: 2, title: 'Mouse', price: 20, img: "./images/1.png"},
    {id: 3, title: 'Keyboard', price: 200, img: "./images/2.png"},
    {id: 4, title: 'Gamepad', price: 50, img: "./images/3.png"},
    
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение


function renderProduct(title, price,img) {
    return `
    <div class="product-item">
                <img src ="${img}" alt = "foto" width "500" height = "300">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`;
}
// const renderPage = list => {
//     const productsList = list.map(item => renderProduct(item.title,item.price,item.img));
//     console.log(productsList);
//     document.querySelector('.products').innerHTML = productsList;
// };
// renderPage(products);

const renderProducts = list => {
    document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item.title,item.price,item.img)).join(''));
};
renderProducts(products);




