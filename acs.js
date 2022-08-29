// Portée de block globale
var a = 1;
let b = 2;
const c = 3;


try {
  let string = "str";

  function add(value1, value2) {
    return value1 + value2;
  }
  add(1, 1);
  console.log(add(1, 1));
} catch (error) {
  console.error(error);
}

try {
  let string = "str";

  // if (string.length >= 1) {
  //   console.log("true");
    
  // } else {
  //   console.log("false");
  // }
  string.length >= 1 ? console.log("true") : ""; 
} catch (error) {
  console.error(error);
}