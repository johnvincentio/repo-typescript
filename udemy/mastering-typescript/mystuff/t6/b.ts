
type MyType = {
    id: number;
    name: string;
}

type MyGroupType = {
    [key:string]: MyType;
}

var obj: MyGroupType = {
    "0": { "id": 0, "name": "Available" },
    "1": { "id": 1, "name": "Ready" },
    "2": { "id": 2, "name": "Started" }
};
// or if you make it an array
var arr: MyType[] = [
    { "id": 0, "name": "Available" },
    { "id": 1, "name": "Ready" },
    { "id": 2, "name": "Started" }
];

type JvType = Array<MyType>;
