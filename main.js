greetX.language = "english"; // A property of a function
printf(greetX);
greetX();
byValue = 5; // since we copied it by value, we generated a duplicate
printf(x1 + " vs " + byValue);
printf(x2.hello + " vs " + byReference.hello);
byReference.hello = 3;
printf(x2.hello + " vs " + byReference.hello);
oMutandi(x2, "hello", "Salve!");
printf(x2.hello + " vs " + byReference.hello);

x2 = { hello: "Vale!"}; // by changing it from object to new object (new memory address) the conection is lost
printf(x2.hello + " vs " + byReference.hello);

byReference = 5; // by changing it from object to primitive the conection is lost
printf(x2.hello + " vs " + byReference.hello);

printf(this); // global object
thisx(); // global object (function expression)
thisf(); // global object (function statement)

x3.log(this);
printf(arrX[0]);
printf(arrX);
arrX[6](); // the function invoked is a function expression
