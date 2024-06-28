/**
 * IN JS functions are objects
 * First class functions: u can create functions on the fly
 * functions are special types of objects, assigned in memory
 * thus we can assign to functions et primitives et objects et functions (for objects have those)
 * 
 * OBJECTS (properties)
 * 1) Primitive
 * 2) Object
 * 3) Function
 * 
 * Functions also have these properties:
 * 4) Name (optional, can be anonymous)
 * 5) Code (invocable by "()")
*/

/**
 * EXPRESSIONS
 * an expression is a line or unit of code that returns a value
 * not necessarily ends up in a var
 * a = 3;
 * 1 + 2;
 */

/**
 * STATEMENT
 * Doesnt return a value
 * if
 * (a === 3) this is an expression
 */


// FUNCTION STATEMENTS (Doesnt return a value in itself)
// are stored in mem
function greetX() { // NAME PROPERTY
    printf("Hi"); // CODE PROPERTY, invocable by "()"
}

function printf(a) {
    console.log(a);
}

function runf(a) {
    a();
}

function oMutandi(a, b, c) {
    a[b] = c; // arguments[0][arguments[1]] = arguments[2];
}

// on the new version of JS i could set the default inside the parenthesis
// and the "...other" array for extra undeclared parms
function saluta(a, b, c) { // this args are undefined if not declared, but no special error is gotten
    c = c || "mi!";
    b = b || "amice";
    a = a || "Auguste";
    
    if (arguments.length === 0) {
        printf("Cur non loqueris?");
    }
    
    var args = arguments;
    printf(args);
    printf(args[0] + " " + args.lenght); // defined + undefined bc arguments didnt copy attributes

    printf("Salve " + a + " " + b + " " + c + "\n");
    printf(arguments);
    //args is arraylike (not all the features)
}

// LIKE FUNCTION OVERLOADING =================
function salutaMe(nomen) {
    saluta(nomen, "quomodo", "te habes");
}

function salutaBene(nomen, quaestio) {
    saluta(nomen, "amice", quaestio);
}
// ============================================

function badf() {
    return
    {
        name: "Hello"
    } // unreachable due to automatic semicolon insertion
}

function goodf() {
    return {
        name: "Hello"
    }
}

function thisf() {
    printf(this);
}

// FUNCTION EXPRESSION
// the function expression is not loaded into memory when the engine loads the code
var anonGreetX = function() { // this object is pointed into a new variable in memory ;; this function is an expression bc it results in a new object
    printf("Hi");
}

/** THIS IS BAD CODE
 * The engine expects a name
 * function() {
 *      return "Hello there";
 * }
 */

// the engine always expects an expression, not an statement within a ()
(function(expression){ 
    printf("Marian" + expression);
})("e Salve!");

// CODE
printf({greeting: "hi"}); // create the object on the fly
printf(function() { // create an object on the fly ;; first class function
    printf("Inception");
});
runf(function() { // this is a function expression bc it returns a value
    printf("Inception"); // functional programming
});

(function(expression){
    printf("Marian" + expression);
})("e Salve!");




