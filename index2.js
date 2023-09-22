const array1 = [1, 2, 3];
const array2 = [...array1];

array2.push(4);

console.log(array1);
console.log(array2);

const object1 = {
  id: 1,
  name: "Vitor",
};

const object2 = {
  vascaino: true,
  ...object1,
};

console.log(object2);
