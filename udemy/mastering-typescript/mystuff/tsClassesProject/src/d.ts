
// Classes With Interfaces!
interface Colorful {
    color: string;
  }
  
  interface Printable {
    print(): void;
  }
  
  class Bike implements Colorful {
    constructor(public color: string) {}
  }

  class Jacket implements Colorful, Printable {
    constructor(public brand: string, public color: string) {}
  
    print() {
      console.log(`${this.color} ${this.brand} jacket`);
    }
  }

const bike1 = new Bike("red");
const jacket1 = new Jacket("Prada", "black");
