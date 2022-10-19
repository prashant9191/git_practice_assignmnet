let num = 1221;
let text = num.toString();
let bag = "";
for (let i =text.length-1; i >= 0; i--) {
  bag += text[i];
}
if (bag == num) {
  console.log("yes");
}