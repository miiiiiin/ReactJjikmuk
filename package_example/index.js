// console.log("hello nodejs package")

// node_modules에 있는건 경로표시 필요없음
const randomColor = require('randomcolor');

let color1 = randomColor();
let color2 = randomColor();
let color3 = randomColor();

console.log(color1, color2, color3);