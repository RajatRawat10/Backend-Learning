// foreach
let arr = [1, 2, 3, 4];

arr.forEach(function (value) {
  console.log(value + " is the value");
});

// map
let newarr = arr.map((val) => {
  return val * 5;
});
console.log(newarr);

// filter
let arrfilter = arr.filter((val) => {
  if (val >= 3) {
    return true;
  }
});
console.log(arrfilter);

// find
let findarr = arr.find((val) => {
  if (val === 3) {
    return true;
  }
});
console.log(findarr);

// indexof
let indexarr = arr.indexOf(3);
console.log(indexarr, " is the index of 3");

// object
let obj = {
  name: "rajat",
  age: 21,
};
// if we want value of object can't be change so we can use freeze
Object.freeze(obj);
console.log(obj.name);
console.log(obj["name"]);
obj.age=25;

