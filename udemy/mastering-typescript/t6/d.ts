
let tuple: [number, string];

tuple = [10, `ghy`];

const color: [number, number, number] = [0, 250, 128];

type HTTPResponse = [number, string];

const res: HTTPResponse = [100, `a message`];

const responses: HTTPResponse[] = [[404, `not found`], [200, `ok`]];

type Car = [string];        // tuple 

const vehicle1: Car = [`a`, `b`, `c`];

const vehicle2: Car = [`a`, `b`];

const vehicle3: Car = [`a`];

const vehicle4: Car = [];
