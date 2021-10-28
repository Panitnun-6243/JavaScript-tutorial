getDataCustomer=(customerName, customerAddress = "เล้า")=>{//ค่าเริ่มต้นของparameter สำหรับป้องกันไม่ให้เกิดundefinedในตอนที่เเสดงผล
    const cData = `ชื่อลูกค้า: ${customerName} 
    ที่อยู่: ${customerAddress}`
    return cData;
}
console.log(getDataCustomer("ไก่",))