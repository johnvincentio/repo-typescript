

function printName(person: {first: string, last: string}): void {
    console.log(`${person.first} ${person.last}`);
}

printName({first: 'fred', last: 'abcd'});

let coord: {x:number, y:number} = {x: 23, y: 93};

function randonCoord(): {x:number, y:number} {
    return {x: Math.random(), y: Math.random()};
}

printName({first: 'fred', last: 'abcd', extra: 45});
