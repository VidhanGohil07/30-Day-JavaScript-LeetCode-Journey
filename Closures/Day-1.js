// Create Hello World Function 
// Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 const createHelloWorld = function() {
         return  function(...args) {
                return "Hello World";
            }
 }

createHelloWorld();