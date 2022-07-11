

class PlayerC {
    public readonly first: string;      // public, can access from outside, just for clarity
    public readonly last: string;
    protected _score: number = 0;       // accessible in parent class
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }

    private secret(): void {
        console.log('in secret')
    }

    get fullName(): string { return `${this.first} ${this.last}` }

    get score(): number {
        return this._score;
    }

    set score(newScore: number) {
        if (newScore < 0) {
            throw new Error("Score error");
        }
        this._score = newScore;
    }
}

class SuperPlayer extends PlayerC {
    public isAdmin: boolean = true;
    maxScore() { this._score = 99999; }
}