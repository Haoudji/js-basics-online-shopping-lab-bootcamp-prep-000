var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({itemName:'', 
 itemPrice:Math.floor(Math.random()*100 +1),
  allKeyValue: function (){
     return this.itemName +""+  this.itemPrice
   }
 })// write your code here;
 return cart
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
