// map คือการเปลี่ยนเเปลงค่าของสมาชิกภายในอาเรย์ทุกตัวเเล้วสร้างเป็นอาเรย์ก้อนใหม่ขึ้นมา
const numbers = [10,20,30,40]
console.log(numbers)

const numMultiplyByTwo = numbers.map(e=>{
    // const a = e*2
    // return a
    return e*2
})
console.log(numMultiplyByTwo)

const data = ["ฝนตก","เเดดร้อน","ฝนฟ้าคะนอง","หนาว","อากาศดี","เเดดร้อน","เเดดร้อนชิบหาย"]
// map(e = ข้อมูลในเเต่ละตำเเหน่งของอาเรย์ data, i = เลขตำเเหน่ง index ตามค่าเเต่ละตัวในอาเรย์)
const weatherForecast = data.map((e,i)=>{
    return `วันที่ ${i+1} สภาพอากาศ: ${e}`
})
console.log(weatherForecast)

// map กับ อาเรย์ออบเจ็ค
const objMap = [
    {day:"01/06/2564", weather:"เเดดร้อน",temp: 37},
    {day:"02/06/2564", weather:"อากาศดี",temp: 26},
    {day:"03/06/2564", weather:"หนาว",temp: 20}
]
console.log(objMap)
// ดึงข้อมูลสภาพอากาศในเเต่ละวันมา ไม่เอาข้อมูลวันเเละองศา
const eachDayWeather = objMap.map(e=>{
    return e.weather
})
console.log(eachDayWeather)