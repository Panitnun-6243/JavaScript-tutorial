//for loop, for each, for of

const data = [10, 20, 30, 40, 50]

for (let i = 0; i< data.length;i++){
    console.log(data[i])
}

let sum = 0;

data.forEach(e =>{
    sum += e
    console.log(sum)
})

for( const numbers of data){
    console.log(numbers)
}