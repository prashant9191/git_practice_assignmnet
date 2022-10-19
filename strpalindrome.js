let text ="abccba";
let bag = "";
for (let i =text.length-1; i >= 0; i--) {
  bag += text[i];
}
if (bag == text) {
  console.log("yes");
}