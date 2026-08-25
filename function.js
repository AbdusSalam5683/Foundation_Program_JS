function total(price = 10, quantity){
    const grandtotal = price * quantity;
    return grandtotal;
}


const spend = total(10, 12);

console.log(spend);


function sayHallo(name){
    console.log(`Hello ${name}`)
}

sayHallo("safin")