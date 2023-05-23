// El método Factory también es uno de los patrones de diseño más populares. El problema que pretende resolver el método Factory es crear objetos sin utilizar el constructor convencional. En su lugar, toma la configuración (o descripción) del objeto que deseas y devuelve el objeto recién creado.

function Factory() {
  this.createDog = function (breed) {
    let dog;

    if (breed === "labrador") {
      dog = new Labrador();
    } else if (breed === "bulldog") {
      dog = new Bulldog();
    } else if (breed === "golden retriever") {
      dog = new GoldenRetriever();
    } else if (breed === "german shepherd") {
      dog = new GermanShepherd();
    }

    dog.breed = breed;
    dog.printInfo = function () {
      console.log(
        "\nBreed: " +
          dog.breed +
          "\nShedding Level (out of 5): " +
          dog.sheddingLevel +
          "\nCoat Length: " +
          dog.coatLength +
          "\nCoat Type: " +
          dog.coatType
      );
    };
    return dog;
  };
}

function Labrador() {
  this.sheddingLevel = 4;
  this.coatLength = "short";
  this.coatType = "double";
}

function Bulldog() {
  this.sheddingLevel = 3;
  this.coatLength = "short";
  this.coatType = "smooth";
}

function GoldenRetriever() {
  this.sheddingLevel = 4;
  this.coatLength = "medium";
  this.coatType = "double";
}

function GermanShepherd() {
  this.sheddingLevel = 4;
  this.coatLength = "medium";
  this.coatType = "double";
}

function run() {
  let dogs = [];
  let factory = new Factory();

  dogs.push(factory.createDog("labrador"));
  dogs.push(factory.createDog("bulldog"));
  dogs.push(factory.createDog("golden retriever"));
  dogs.push(factory.createDog("german shepherd"));

  for (let i = 0; i < dogs.length; i++) {
    dogs[i].printInfo();
  }
}

run();
