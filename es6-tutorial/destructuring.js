// normal destructuring การกระจายข้อมูลในอาเรย์มาเก็บไว้ในตัวเเปร
// const colors = ["red", "green", "yellow"]
// const green = colors[1]
// const red = colors[0]
// console.log(red)

//create array constant variable
const colors = ["red", "green", "yellow"]
const [red, green, ] = colors
console.log(red)
const [,,yellow] = colors
console.log(yellow)