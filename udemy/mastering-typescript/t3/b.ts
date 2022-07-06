
type Point = {
    x: number,
    y: number
}

// let coord: {x:number, y:number} = {x: 23, y: 93};
let coord: Point = {x: 23, y: 93};

function randonCoord(): Point {
    return {x: Math.random(), y: Math.random()};
}

function doubles(point: Point): Point {
    return {x: point.x * 2, y: point.y * 2};
}

