let str = "my name is abhishek kumar";

let capitalizedStr = str
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

//it should convert to "My Name Is Abhishek Kumar"

console.log(capitalizedStr);
