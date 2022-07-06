
const arr = [`abc`, `def`, `ghj` ];
arr.map((item: string) => {

});

function fred(msg: string): void {
    console.log(msg);
}


function neverStop(): never {
    while(true) {
        console.log('in a loop');
    }
}

function myError(msg: string): never {
    throw new Error(msg);
}

