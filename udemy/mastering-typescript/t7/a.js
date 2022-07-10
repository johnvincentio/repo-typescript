var pt = { x: 123, y: 567 };
;
var tom = {
    id: 231, first: 'dr', last: 'who',
    sayHi: function () { return "hi"; }
};
var shoes = {
    name: "shoes",
    price: 12,
    applyDiscount: function (amount) {
        this.price = this.price * (1 - amount);
        return this.price;
    }
};
console.log(shoes.applyDiscount(0.3));
