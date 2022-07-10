
interface Dog {
    name: string,
    age: number
};

interface Dog { 
    breed: string,
    bark(): string
}

const elton: Dog = {
    name: `elton`,
    age: 0.5,
    breed: `runt`,
    bark() { return `bark`; }
}

interface ServiceDog extends Dog {
    job: `sleep` | `sleep more`
}

const dog2: ServiceDog = {
    name: `doggie`,
    age: 3.5,
    breed: `big dog`,
    bark() { return `bite`; },
    job: `sleep`
}

interface People {
    name: string
}

interface Employee {
    readonly id: number,
    email: string
}

interface Engineer extends People, Employee {
    level: string,
    languages: string[]
}

const pete: Engineer = {
    id: 247,
    name: `pete`,
    email: `ab@des.com`,
    level: `abcd`,
    languages: [`a`, `b`, `c`]
}

/*
Interfaces:

1. describe the shape of an object.
2. can open and modiy an interface.
3. can extends (inherit) other interfaces.

*/
