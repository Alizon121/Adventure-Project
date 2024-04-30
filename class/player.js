const { Food } = require('./food');

class Player {
  constructor(name, startingRoom) {
    this.name = name;
    this.currentRoom = startingRoom;
    this.items = [];
  }

  move(direction) {
    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;
      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
          console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    // Picks up an item from the current room into the player's inventory
    let item = this.currentRoom.getItemByName(itemName)
    this.items.push(item);
    console.log(`${itemName} can be picked up from a room by a player`)
  }

  dropItem(itemName) {
    // Drops an item the player is holding into their current room
   
  }

  eatItem(itemName) {
    // Allow the player to eat food items, but not non-food items
    if (itemName instanceof Food && itemName instanceof Item) {
      console.log(`${itemName} can be eaten by a player`)
  }
  }

  getItemByName(name) {
    // Retrieves an item from a player's inventory by item name
    
    console.log(`${name} can be retrieved from player inventory by name`)
  }
}


module.exports = {
  Player
};
