let big1 = 9000718977474743678964n;

console.log(big1);
console.log(typeof big1)
let big2 = BigInt(23383747437)
console.log(big2);
console.log(typeof big2)

let maxNumber = Number.MAX_SAFE_INTEGER;
console.log(maxNumber);

console.log(maxNumber + 1);

console.log(maxNumber + 2);
console.log(BigInt(maxNumber + 2));

// ৩. BigInt use:
console.log(9007199254740991n + 1n); // 9007199254740992n
console.log(9007199254740991n + 2n); // 9007199254740993n (right!)
