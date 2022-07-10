// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":

const ages: number[] = [];

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings

const gameBoard: string[][] = [];

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}

type Product = {
    name: string,
    price: number
}

// type Products = Array<Product>;
type Products = Product[]

const list: Product[] = [];
list.push({ name:`coffee mug`, price: 11.50 });
list.push({ name:`tea mug`, price: 4.50 });
list.push({ name:`milk mug`, price: 2.50 });

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices

function getTotal(list: Products): number {
    return list.reduce((previousValue, currentValue) => previousValue + currentValue.price, 0);
}

console.log(`getTotal ${getTotal(list)}`)
