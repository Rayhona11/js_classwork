 let carModel = "BMW"

 //let result = 'I have a car with model ${carModel}'
 //console.log(result);

 // ? Number

 //let a = 10 ;
 //let b = "qwertyu";

 // ? Value as a string
// console.log(a+b);


// ? Value as  a number
//console.log(a-b);
//console.log(a/b);
//console.log(a*b);

   // ? From string to number
  //console.log(Number(a));

  // ? From number to string 
 // console.log("number converted to string"+a.toString());


// ? toFixed

let num = 45.341453718379
console.log(num);
document.write(num.toFixed(0))

// ? Cheksiz
console.log(Infinity);

// ? Ildizdan chiqarish
console.log(Math.sqrt(num));

//? 1-masala 
//let a = 2;
//let b = 3;
//let result=Math.sqrt(Math.sqrt((a**3 - b**3) + (a**3+b**3)))
//console.log(result);

// ? 2-masala

let z = 4;
let y = 9;
let  results =((1/6*Math.sqrt(z))+(1/3*Math.sqrt(y)))**2
console.log(results);

// ? 3-masala 
let a = 231;

let result = a.toString();
let first = result.slice(0,1).toString()
let second = result.slice(1,2).toString()
let third = result.slice(2,3).toString()

 console.log(third + second + first);