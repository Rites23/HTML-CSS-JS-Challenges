// snippet 5
let colors = ["red", "purple", "orange"];

for (let i = 0; i < colors.length; i++) {
  let colorStr = colors[i];
  console.log(colorStr);

  for (let j = 0; j < colorStr.length; j++) {
    let char = colorStr[j];
    console.log(char);
  }
}
