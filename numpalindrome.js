let num = 1221;
let text = num.toString();
let bag = "";
for (let i =0; i >=text.length; i--) {
  bag += text[i];
}
if (bag == num) {
  console.log("yes");
}