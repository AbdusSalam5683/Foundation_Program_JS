let sym1 = Symbol("id");
let sym2 = Symbol('id')
console.log(sym1 === sym2)

console.log(sym1);

console.log(typeof sym1);

let obj ={
    [Symbol("secret")]: "hidden"
}

console.log(obj)