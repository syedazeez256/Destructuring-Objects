"use strict";

const resturant = {
  name: "Classico Italian",
  location: "581 B Gulshan Ravi",
  categories: ["italian", "fast food", "chinese", "vegetarian"],
  startmenu: ["garlic", "bread", "caprese salad"],
  mainmenu: ["pizza", "pasta", "risoto"],
  timings: {
    thur: {
      open: "12",
      close: "22",
    },
    fri: {
      open: "11",
      close: "23",
    },
    sat: {
      open: "10",
      close: "24",
    },
  },
  order: function (starterindex, mainindex) {
    return [this.startmenu[starterindex], this.mainmenu[mainindex]];
  },
  orderDelievery: function name({
    startIndex = 1,
    mainIndex = 0,
    address = "Sanda",
    time = "20.00",
  }) {
    console.log(
      `Order Deliever! ${this.startmenu[startIndex]} and ${this.mainmenu[mainIndex]} will be delieverd to ${address} at ${time}`
    );
  },
};

resturant.orderDelievery({
  time: "22:30",
  startIndex: 2,
  mainIndex: 2,
  address: "Gulshan Ravi",
});
resturant.orderDelievery({
  address: "Gulshan Ravi",
  mainIndex: 0,
});

const { name, timings, categories } = resturant;
console.log(name, timings, categories);

const { name: resturantname, timings: hours, categories: tags } = resturant;
console.log(resturantname, hours, tags);

const { menu, startmenu: starters = [] } = resturant;
console.log(menu, starters);

// Mutating Objects
let a = 111;
let b = 221;

const obj = { a: 23, b: 7, c: 0 };
({ a, b } = obj);
console.log(a, b);
