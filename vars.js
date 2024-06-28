/** whenever you define a var as X, the var points to memory where the value is
 *  if that value is a primitive, whenever defining Y = X it is a copy (by value)
 * else if that value is an object it is a reference to the object (by reference)
 * */ 


var byValue = 9;
var x1 = byValue; // 9 -- this is a duplicate, not a reference

var byReference = { hello: "there" };
var x2 = byReference;

var thisx = function() {
    printf(this);
}

var x3 = {
    a: "Hallo",
    log: function(a) { // this is a method
        var self = this; // this points to x3, by ref
        this.a = "Hallo meine freund"; // changes the method
        printf(a); // here we load an outer environment var
        printf(this); // here x3 is "this" neque the window
        var log1 = function() {
            this.a = "Holis"; // this will change the global, not the method ;; USE SELF INSTEAD
        }
        log1();
    }
}

var arr = new Array();
var arrX = []; // array literal syntax
var objX = {}; // object literal syntax
arrX = [1, 2, 3, "mixed", true, { name: "M", lastn: "Mo"}, function() {printf("lol")}]; // arrays in JS can be mixed