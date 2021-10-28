//normal parameter
// summation=(x,y)=>{
//     return x+y;
// }

// console.log(summation(50,100));

//rest parameter = array parameter
summation=(...numberArr)=>{
    let result = 0
    for (let number of numberArr)result += number
    return result;
}

console.log(summation(50,100,400))
