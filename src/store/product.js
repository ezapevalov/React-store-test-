import {observable, computed, action} from 'mobx'

class ProductStore {
    @observable products = loadProducts()
}

export default new ProductStore()

function loadProducts() {
    return [
        {
            id: 1,
            title: 'iPhoneX',
            price: 1000,
            description: "New iPhoneX with mega camera and new functionality is ready to go! Don't miss your chase to get it - be the first loh!",
            img: "http://iline.com.ua/media/products/9e442b4daaab83c6f75cb52d2aa14dde.jpg",
            rest: 10
        },
        {
            id: 2,
            title: 'MacBook Air 2017',
            price: 800,
            description: "New MacBook Air 2017 with touch screen and new functionality is ready to go! Don't miss your chase to get it - be the first loh!",
            img: "https://swipe.ua/content/images/40/apple-macbook-air-13.3-mqd32-2017-15826479620834_small11.jpg",
            rest: 10
        },
        {
            id: 3,
            title: 'Asus ZenBook',
            price: 900,
            description: "Choice of the professionals. Ubuntu 20.04 is pre installed. Intel Core i7 is on the board.",
            img: "https://hotline.ua/img/tx/188/1885037445.jpg",
            rest: 10
        },
        {
            id: 4,
            title: 'Honor 8x',
            price: 250,
            description: "Best choice comparing price to quality. 64 GB Memory with latest Android on board.",
            img: "https://i.eldorado.ua/goods_images/1038946/6321039-1554384978.jpg",
            rest: 10
        },
        {
            id: 5,
            title: 'Meizu M3',
            price: 150,
            description: "Still popular cheap model. Android 5 is pre installed, 16 GB memory.",
            img: "https://cdn-files.kimovil.com/default/0001/15/thumb_14778_default_big.jpeg",
            rest: 10
        }
    ]
}