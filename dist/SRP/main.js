"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = require("./entities/order");
const product_1 = require("./entities/product");
const shopping_cart_1 = require("./entities/shopping-cart");
const messaging_1 = require("./services/messaging");
const persistency_1 = require("./services/persistency");
const shoppingCart = new shopping_cart_1.ShoppingCart();
const messaging = new messaging_1.Messaging();
const persistency = new persistency_1.Persistency();
const order = new order_1.Order(shoppingCart, messaging, persistency);
shoppingCart.addItem(new product_1.Product("shirt", 9.99));
shoppingCart.addItem(new product_1.Product("pencil", 1.5));
shoppingCart.addItem({ name: "dress", price: 31.0 });
console.log(shoppingCart.items);
console.log(shoppingCart.total);
order.checkout();
console.log(order.orderStatus);
