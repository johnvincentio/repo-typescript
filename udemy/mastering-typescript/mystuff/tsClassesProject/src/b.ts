
class PlayerB {
    public readonly first: string;      // public, can access from outside, just for clarity
    public readonly last: string;
    private _score: number = 0;
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

const b = new PlayerB(`a`, `b`);
// ab.first = `abcd`;      // errors

// const jv1 = b.score;        // errors

// b.secret();     // errors

class PlayerB1 {
    private score: number = 0;
    constructor(
      public first: string,
      public last: string,
    ) {}
  
    private secretMethod(): void {
      console.log("SECRET METHOD!!");
    }
}

class PlayerB2 {
    constructor(
      public first: string,
      public last: string,
      private score: number
    ) {}
  
    private secretMethod(): void {
      console.log("SECRET METHOD!!");
    }
}

