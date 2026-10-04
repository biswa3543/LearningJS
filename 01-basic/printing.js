// CONSOLE.LOG is used to print something to terminal
console.time("Your Code Took");
console.log("Hello World");
console.log("Hello World" + 1); //CONVERTS INTEGER TO STRING
console.log("console",1,"hi"); // PRINTS multiple things with a space
console.log(`HI ${1+1}`); //Template Literals
console.log([3,5,4]); // Array or lists
console.log({name: "Biswajeet", Department: "EEE"});
console.table({name: "Biswajeet", Department: "EEE"});

console.error("This Is An Error");  
console.warn("This Is An Warning");
console.timeEnd("Your Code Took");
console.assert(20>19,"FALSE")