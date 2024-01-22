let string = "chetan";
console.log(Array.from(string));

let char = Array.from(string);
char.filter((value) => {
  if (value == "e") return true;
});
console.log(char);

let array = Array.from({ length: 10 }, (_,index) => {
    return index + 1;
})

console.log(array);
