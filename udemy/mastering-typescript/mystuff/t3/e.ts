
type Circle = {
    radius: Number;
}

type Colorful = {
    color: string;
}

type Combined = Circle & Colorful;

const var1: Combined = {
    radius: 5,
    color: `red`
}

type More = Circle & Colorful & { fill: boolean };

const var2: More = { radius: 2, color: `blue`, fill: true };

