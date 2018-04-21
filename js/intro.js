function square1(x) {
 return x * x;
}
square1(10);

function square2(x) {
 return x * x;
}
square2(10);

function square3(x) {
 return x * x;
}
square3(10);

function square4(x) {
  return x * x;
}
square4(10);

function square5(x) { 
  return x * x;
}
square5(10);

function square6(x) {
  return x * x;
}
square6(10);

function cube(x) {
  return x * x * x;
}
cube(10);

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
fullName('Jacobi', 'Tanaka');

function average(num1, num2) {
  return num1 + num2 / 2;
}
average(10,110);

function greeter(name) {
  return `Hello, ${name}!`
}
greeter("MC Hammer");
console.log('​greeter("MC Hammer")', greeter("MC Hammer"));




//  Geometry Formulas
//  ==================

const sqArea = s =>  s * s; 
sqArea(9);
console.log('​sqArea(9)', sqArea(9));



const sqPerimeter = s =>  4 * s;
sqPerimeter(9);
console.log('​sqPerimeter(9)', sqPerimeter(9));


const rectArea = (l, w) => l * w;
rectArea(10, 10);
console.log('​rectArea(10, 10)', rectArea(10, 10));


const rectPerimeter = (l, w) => {(2 * l) + (2 * w)};
rectPerimeter(10, 10);
console.log('​rectPerimeter(10, 10)', rectPerimeter(10, 10));


const pgramArea = (l, h) => 2 * l + 2 * h;
pgramArea(10, 6);
console.log('pgramArea(10, 6)', pgramArea(10, 6));


const pgramPerimeter = (l, w) => 2 * l + 2 * w;
pgramPerimeter(10, 9);
console.log('pgramPerimeter(10, 9)', pgramPerimeter(10, 9));

const trapArea = (h, b1, b2) => (0.5 * (h * (b1 + b2)));
trapArea(2, 6, 4);
console.log('​trapArea(2, 6, 4)', trapArea(2, 6, 4));

const trapPerimeter = (s1, s2, b1, b2) => s1 + s2 + b1 + b2;
trapPerimeter(2, 2, 6, 4);
console.log('trapPerimeter(2, 2, 6, 4)', trapPerimeter(2, 2, 6, 4));

const triangleArea = (b, h) => 0.5 * (b * h);
triangleArea(14, 7);
console.log('​triangleArea(14, 7)', triangleArea(14, 7));

const trianglePerimeter = (s1, s2, b) => s1 + s2 + b;
trianglePerimeter(4.5, 4.5, 14);
console.log('​trianglePerimeter(4.5, 4.5, 14)', trianglePerimeter(4.5, 4.5, 14));

const circleArea = r => Math.PI * (r * r);
circleArea(11);
console.log('​circleArea(11)', circleArea(11));

const circlePerimeter = d => Math.PI * d;
circlePerimeter(22);
console.log('​circlePerimeter(22)', circlePerimeter(22));


 
