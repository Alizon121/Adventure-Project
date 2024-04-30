const Food = require("./food");

class Item {
  constructor(name, description) {
this.name = name
this.description = description

  }
}

const item = new Item("rock", "just a simple rock");
console.log(item instanceof Item)
// console.log(item instanceof Food) // -> does not work
module.exports = Item
