function run() {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
}

// run(); // Output: 1,4,3,2

function foo1() {
  return {
    bar: "Hello",
  };
}

function foo2() {
  return;
  {
    bar: "Hello";
  }
}

// console.log(foo1()); // return object { bar: 'Hello' }
// console.log(foo2()); // return undefined

var x = 10;

function imprimir() {
  console.log(x);
  var x = 5;
  console.log(x);
}

imprimir();
