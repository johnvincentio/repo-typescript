function square(num) {
    return num * num;
}
console.log(square(4));
function hello(name) {
    if (name === void 0) { name = 'tom'; }
    return "hello ".concat(name);
}
console.log(hello('bill'));
console.log(hello());
var add = function (a, b) {
    return a + b;
};
console.log(add(3, 6));
