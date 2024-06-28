I get this error unless I move this function expression to the end (the error is shown no longer

// FUNCTION
(function(expression){ 
    printf("Marian" + expression);
})("e Salve!");

// ERROR
functions.js:114 Uncaught 
TypeError: (intermediate value)(...) is not a function
    at functions.js:114:3
(anonymous)	@	functions.js:114
functions.js:40 
