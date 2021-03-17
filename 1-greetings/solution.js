function greet(userName = "Hello Mr. Nobody") {
  let result = "Hello " + userName;
  return result;
}

alert(greet("Peter"));
let var1 = greet("Peter");
alert(greet("Jon"));
let var2 = greet("Jon");
alert(greet("Alice"));
let var3 = greet("Alice");
alert(var1);
