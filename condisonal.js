// if else , switch, ternary
let age = 17;
if(age >= 18){
    console.log("voter")

}else{
    console.log("Not a Voter")
}



let marks = 63;

if(marks>=80){
    console.log("A+")
}else if(marks >=70){
    console.log("A")
}else if(marks >= 60){
    console.log("-A")
}else if(marks >= 50){
    console.log("C")
}else if(marks >=33){
    console.log("D")
}else{
    console.log("F")
}


switch(true){
    case marks >= 80:
        console.log("A+");
        break;
        case marks >= 70:
            console.log("A");
            break;
            default:
                console.log("Improvement");
                break;
}



// Ternary condition ? expressionIfTrue : expressionIfFalse


age >=18 ? console.log("voter") : console.log("Not Voter")