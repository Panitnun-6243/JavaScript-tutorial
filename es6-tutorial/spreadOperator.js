
const otherColor = ["purple","brown","orange"]
const color = ["red", "blue","yellow", ...otherColor]
const newColor = ["black", "gray"]
color.push(...newColor);
console.log(color);