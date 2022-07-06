
function square(num: number): number {
    return num * num;
}

console.log(square(4));

function hello(name: string = 'tom'): string {
   return `hello ${name}`;
}

console.log(hello('bill'));
console.log(hello());

const add = (a: number, b: number): number => {
    return a + b;
}

console.log(add(3, 6));
