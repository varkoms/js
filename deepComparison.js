function deepEqual(value1, value2) {
  // Check if the values are strictly equal
  if (value1 === value2) {
    return true;
  }

  // Check if the values are objects and not null
  if (
    typeof value1 === "object" &&
    value1 !== null &&
    typeof value2 === "object" &&
    value2 !== null
  ) {
    // Get the property names of both objects
    const keys1 = Object.keys(value1);
    const keys2 = Object.keys(value2);

    // Check if the objects have the same number of properties
    if (keys1.length !== keys2.length) {
      return false;
    }

    // Check if all properties in value1 also exist in value2 with equal values
    for (let key of keys1) {
      if (!keys2.includes(key) || !deepEqual(value1[key], value2[key])) {
        return false;
      }
    }

    // All properties match
    return true;
  }

  // Values are not objects or null, and not strictly equal
  return false;
}

const obj1 = { name: "John", age: 30 };
const obj2 = { name: "John", age: 30 };
const obj3 = { name: "Jane", age: 25 };

console.log(deepEqual(obj1, obj2)); // Output: true
console.log(deepEqual(obj1, obj3)); // Output: false
console.log(deepEqual(5, 5)); // Output: true
console.log(deepEqual(5, "5")); // Output: false
console.log(deepEqual(null, null)); // Output: true
console.log(deepEqual(null, undefined)); // Output: false
