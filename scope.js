// scope
{
  let age = 21;
}

function sayAge() {
    age = 2;
}

sayAge();

console.log(age);

{
    console.log(`my find age ${age}`)
}

