
let age: number | string = 21;

function abc(a: number): void {

}

function abc(a: string): void {
    
}

const stuff: (number | string)[] = [1,2,`qw`]

const ss: (Point | Loc)[] = [];

const zero: 0 = 0;

let mood: "happy" | "sad" = "happy";
mood = "sad";
mood = "xyz";

type DayOfWeek = "Mon" | "Tue" | "wed" | "thu" | "fri" | "sat"| "sun";

let abc: DayOfWeek = "xyz";


