//ค้นหาข้อมูลในอาเรย์
// indexOf() => ได้ตำเเหน่งindexที่เจอ ถ้าไม่เจอจะได้ -1
// find() => ได่ข้อมูลที่ค้นเจอ ถ้าค้นไม่เจอจะได้ undefined
// findIndex => ได้ตำเเหน่งindexที่เจอ ถ้าไม่เจอจะได้ -1

const colors = ["red", "green", "blue","purple", "white"]

const index =  colors.indexOf("white")
console.log(index);

const found = colors.find(e => e ==="green")
console.log(found)