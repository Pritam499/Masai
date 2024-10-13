// Dynamic Array Library
class DynamicArray {
    constructor() {
        this.elements = [];
    }

    // customPush: Adds an item to the end of the array
    customPush(item) {
        this.elements[this.elements.length] = item;
        return this.elements.length; // Returns the new length of the array
    }

    // customPop: Removes the last item from the array
    customPop() {
        if (this.elements.length === 0) return undefined; // Nothing to pop
        const poppedItem = this.elements[this.elements.length - 1];
        this.elements.length -= 1; // Decrease length to remove last item
        return poppedItem; // Returns the removed item
    }

    // customSplice: Removes, replaces, or adds elements
    customSplice(start, deleteCount, ...itemsToAdd) {
        const removedItems = this.elements.slice(start, start + deleteCount); // Store removed items
        this.elements = [
            ...this.elements.slice(0, start), // Items before the start index
            ...itemsToAdd, // Items to add
            ...this.elements.slice(start + deleteCount) // Items after the deleted items
        ];
        return removedItems; // Returns the removed items
    }

    // customSlice: Returns a shallow copy of a portion of the array
    customSlice(start, end) {
        return this.elements.slice(start, end); // Use the built-in slice method
    }

    // customIncludes: Checks if the array contains a specific element
    customIncludes(item) {
        return this.elements.some(element => element === item); // Checks for presence
    }

    // customToLowerCase: Converts each string element to lowercase
    customToLowerCase() {
        this.elements = this.elements.map(element =>
            typeof element === 'string' ? element.toLowerCase() : element
        );
        return this.elements; // Returns the modified array
    }

    // customToUpperCase: Converts each string element to uppercase
    customToUpperCase() {
        this.elements = this.elements.map(element =>
            typeof element === 'string' ? element.toUpperCase() : element
        );
        return this.elements; // Returns the modified array
    }
}

// Example Usage
const myMagicBox = new DynamicArray();

// Adding toys (items) to the box
console.log(myMagicBox.customPush("Teddy Bear")); // ["Teddy Bear"]
console.log(myMagicBox.customPush("Lego Set")); // ["Teddy Bear", "Lego Set"]
console.log(myMagicBox.customPush("Action Figure")); // ["Teddy Bear", "Lego Set", "Action Figure"]

// Checking if a toy is in the box
console.log(myMagicBox.customIncludes("Lego Set")); // true

// Taking a toy out of the box
console.log(myMagicBox.customPop()); // "Action Figure"

// Splicing (removing and adding toys)
console.log(myMagicBox.customSplice(0, 1, "Doll")); // ["Teddy Bear"]
console.log(myMagicBox.elements); // ["Doll", "Lego Set"]

// Slicing (getting a part of the box)
const sliceOfBox = myMagicBox.customSlice(0, 2);
console.log(sliceOfBox); // ["Doll", "Lego Set"]

// Whispering and shouting spells
myMagicBox.customToLowerCase();
console.log(myMagicBox.elements); // ["doll", "lego set"]

myMagicBox.customToUpperCase();
console.log(myMagicBox.elements); // ["DOLL", "LEGO SET"]
