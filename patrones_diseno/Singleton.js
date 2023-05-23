// El patrón Singleton es uno de los patrones de diseño más utilizados en la industria del desarrollo de software. El problema que pretende resolver es mantener una única instancia de una clase. Esto puede resultar útil cuando se instancian objetos que consumen muchos recursos, como los manejadores de bases de datos.

function Singleton() {
  let fooInstance = null;

  // For our reference, let's create a counter that will track the number of active instances
  let count = 0;

  function printCount() {
    console.log("Number of instances: " + count);
  }

  function init() {
    // For our reference, we'll increase the count by one whenever init() is called
    count++;

    // Do the initialization of the resource-intensive object here and return it
    return {};
  }

  function createInstance() {
    if (fooInstance == null) {
      fooInstance = init();
    }
    return fooInstance;
  }

  function closeInstance() {
    count--;
    fooInstance = null;
  }

  return {
    initialize: createInstance,
    close: closeInstance,
    printCount: printCount,
  };
}

let foo = Singleton();

foo.printCount(); // Prints 0
foo.initialize();
foo.printCount(); // Prints 1
foo.initialize();
foo.printCount(); // Still prints 1
foo.initialize();
foo.printCount(); // Still 1
foo.close();
foo.printCount(); // Prints 0
