var _ = require("lodash");

function generateLargeArray(size) {
  const largeArray = [];
  for (let i = 0; i < size; i++) {
    largeArray.push(i);
  }
  return largeArray;
}

const size = 1000;
const largeArray = generateLargeArray(size);

// console.log("Chunk ",_.chunk(largeArray, 20));
//
const mappedArray = _.map(largeArray, (num) => num * 2);
console.log("Mapped Array ", mappedArray);
//
const filteredArray = _.filter(largeArray, (num) => num % 2 === 0);
console.log("Filtered Array ", filteredArray);
//
const sum = _.reduce(largeArray, (acc, num) => acc + num, 0);
console.log("Sum ", sum);
//
const objects = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
];
const sortedByName = _.sortBy(objects, "name");
console.log("Sorted by Name ", sortedByName);
//
const groupedByMod = _.groupBy(largeArray, (num) => num % 3);
console.log("Grouped by Mod 3 ", groupedByMod);
//
const arrayWithDuplicates = [1, 2, 2, 3, 3, 3];
const uniqueArray = _.uniq(arrayWithDuplicates);
console.log("Unique Array ", uniqueArray);
//
const array1 = [1, 2, 3];
const array2 = [2, 3, 4];
const intersection = _.intersection(array1, array2);
console.log("Intersection ", intersection);
//
const difference = _.difference(array1, array2);
console.log("Difference ", difference);
//
const nestedArray = [1, [2, [3, [4]]]];
const flattenedArray = _.flatten(nestedArray);
console.log("Flattened Array ", flattenedArray);
//
const allEven = _.every(largeArray, (num) => num % 2 === 0);
console.log("All Even? ", allEven);
//
const someEven = _.some(largeArray, (num) => num % 2 === 0);
console.log("Some Even? ", someEven);
//
const firstEven = _.find(largeArray, (num) => num % 2 === 0);
console.log("First Even ", firstEven);
//
const user = { name: "Alice", age: 25, email: "alice@example.com" };
const omittedUser = _.omit(user, ["age", "email"]);
console.log("Omitted User ", omittedUser);
//
const pickedUser = _.pick(user, ["name", "age"]);
console.log("Picked User ", pickedUser);
//
const isEmpty = _.isEmpty({});
console.log("Is Empty? ", isEmpty);
//
const arrayWithFalseyValues = [1, 0, "", undefined, null, false];
const compactedArray = _.compact(arrayWithFalseyValues);
console.log("Compacted Array ", compactedArray);
//
const invokeArray = ["abc", "def"];
const result = _.invokeMap(invokeArray, "toUpperCase");
console.log("InvokeMap Result ", result);
//
const joinedArray = _.join(largeArray, " - ");
console.log("Joined Array ", joinedArray);
//
const debouncedFunction = _.debounce(() => console.log("Debounced!"), 1000);
debouncedFunction(); // Will be invoked after 1 second
//
