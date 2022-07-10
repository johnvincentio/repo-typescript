
interface Point {
    x: number,
    y: Number
}

const pt: Point = { x:123, y: 567 };

interface Person {
    readonly id: number,
    first: string,
    last: string,
    nickname?: String,
    // sayHi: () => string
    sayHi(): string
};

const tom: Person = { 
    id: 231, first: 'dr', last: 'who',
    sayHi: () => { return `hi` }
}

interface Product {
    name: string,
    price: number,
    applyDiscount(discount: number): number
}

const shoes: Product = {
    name: `shoes`,
    price: 12,
    applyDiscount(amount: number) { 
        this.price = this.price * (1 - amount);
        return this.price;
     }
}

console.log(shoes.applyDiscount(0.3));
