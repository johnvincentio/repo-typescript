var obj = {
    name: 'fred'
};
function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: 'fred', last: 'abcd' });
