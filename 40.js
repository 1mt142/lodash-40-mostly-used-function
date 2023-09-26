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

const users = [
  { id: "1", name: "Alice" },
  { id: "2", name: "Bob" },
];
const usersById = _.keyBy(users, "id");
console.log("Users by ID ", usersById);

//
const words = ["apple", "banana", "apple", "cherry"];
const wordCounts = _.countBy(words);
console.log("Word Counts ", wordCounts);

//
const shuffledArray = _.shuffle(largeArray);
console.log("Shuffled Array ", shuffledArray);
//
const randomElement = _.sample(largeArray);
console.log("Random Element ", randomElement);
//
const meanValue = _.mean(largeArray);
console.log("Mean Value ", meanValue);
//
const maxValue = _.max(largeArray);
console.log("Max Value ", maxValue);
//
const minValue = _.min(largeArray);
console.log("Min Value ", minValue);
//
const evenIndex = _.findIndex(largeArray, (num) => num % 2 === 0);
console.log("Even Index ", evenIndex);
//
const lastEvenIndex = _.findLastIndex(largeArray, (num) => num % 2 === 0);
console.log("Last Even Index ", lastEvenIndex);
//
const deeplyNestedArray = [1, [2, [3, [4]]]];
const deeplyFlattenedArray = _.flattenDeep(deeplyNestedArray);
console.log("Deeply Flattened Array ", deeplyFlattenedArray);
//
const firstFiveElements = _.take(largeArray, 5);
console.log("First Five Elements ", firstFiveElements);
//
const lastFiveElements = _.takeRight(largeArray, 5);
console.log("Last Five Elements ", lastFiveElements);
//
const arrayWithDuplicates = [
  { id: "1", name: "Alice" },
  { id: "2", name: "Bob" },
  { id: "1", name: "Alice" },
];
const uniqueUsers = _.uniqBy(arrayWithDuplicates, "id");
console.log("Unique Users ", uniqueUsers);
//
const array1 = ["a", "b", "c"];
const array2 = [1, 2, 3];
const zippedArray = _.zip(array1, array2);
console.log("Zipped Array ", zippedArray);
//
const keys = ["a", "b", "c"];
const values = [1, 2, 3];
const zippedObject = _.zipObject(keys, values);
console.log("Zipped Object ", zippedObject);
//
const usersToSort = [
  { name: "Bob", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Charlie", age: 35 },
];
const sortedUsers = _.orderBy(usersToSort, ["age", "name"], ["asc", "desc"]);
console.log("Sorted Users ", sortedUsers);
//
const isEqual = _.isEqual({ a: 1, b: 2 }, { a: 1, b: 2 });
console.log("Is Equal? ", isEqual);
//
const user = { name: "Alice", age: 25, isAdmin: true };
const omittedUser = _.omitBy(user, (value) => typeof value === "boolean");
console.log("Omitted User ", omittedUser);
//
const pickedUser = _.pickBy(user, (value) => typeof value === "string");
console.log("Picked User ", pickedUser);
//
const partiallyFlattenedArray = _.flattenDepth(deeplyNestedArray, 2);
console.log("Partially Flattened Array ", partiallyFlattenedArray);
