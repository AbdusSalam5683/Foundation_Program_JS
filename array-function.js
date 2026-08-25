const total = (price, quantity=12) =>{
    const grandTotal = price * quantity;
    return grandTotal;
}

const spend = total(12)
console.log(spend)


const add = (a, b)=> a +b;

const sum = add(9, 11);
console.log(sum)

