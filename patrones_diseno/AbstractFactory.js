// El método Abstract Factory sube el nivel del método Factory al hacer que haya «factories» abstractas y, por tanto, sustituibles sin que el entorno de llamada conozca la factory exacta utilizada o su funcionamiento interno. El entorno de llamada sólo sabe que todas las «factories» tienen un conjunto de métodos comunes a los que puede llamar para realizar la acción de instanciación.

// Así es como puede implementarse utilizando el ejemplo anterior:

// El método Factory también es uno de los patrones de diseño más populares. El problema que pretende resolver el método Factory es crear objetos sin utilizar el constructor convencional. En su lugar, toma la configuración (o descripción) del objeto que deseas y devuelve el objeto recién creado.

// A factory to create dogs
function DogFactory() {
  this.createPet = function (breed) {
    let dog;

    if (breed === "labrador") {
      dog = new Labrador();
    } else if (breed === "pug") {
      dog = new Pug();
    }

    dog.breed = breed;
    dog.printInfo = function () {
      console.log(
        "\nType: " + dog.type + "\nBreed " + dog.breed + "\nSize: " + dog.size
      );
    };
    return dog;
  };
}

// A factory to create cats
function CatFactory() {
  this.createPet = function (breed) {
    let cat;

    if (breed === "ragdoll") {
      cat = new Ragdoll();
    } else if (breed === "singapura") {
      cat = new Singapura();
    }

    cat.breed = breed;
    cat.printInfo = function () {
      console.log(
        "\nType: " + cat.type + "\nBreed " + cat.breed + "\nSize: " + cat.size
      );
    };
    return cat;
  };
}

function Labrador() {
  this.type = "dog";
  this.size = "large";
}

function Pug() {
  this.type = "dog";
  this.size = "small";
}

function Ragdoll() {
  (this.type = "cat"), (this.size = "large");
}

function Singapura() {
  (this.type = "cat"), (this.size = "small");
}

function run() {
  let pets = [];

  //   Initialize the two factories

  let dogFactory = new DogFactory();
  let catFactory = new CatFactory();

  //   set the petFactory to produce dogs
  let petFactory = dogFactory;

  pets.push(petFactory.createPet("labrador"));
  pets.push(petFactory.createPet("pug"));

  //   set the petFactory to produce cats
  petFactory = catFactory;

  pets.push(petFactory.createPet("ragdoll"));
  pets.push(petFactory.createPet("singapura"));

  for (let i = 0; i < pets.length; i++) {
    pets[i].printInfo();
  }
}

run();
