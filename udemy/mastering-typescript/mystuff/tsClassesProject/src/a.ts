
class PlayerA {
    readonly first: string;
    readonly last: string;
    score: number = 0;
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }
}

const a = new PlayerA(`a`, `b`);
// ab.first = `abcd`;      // errors
