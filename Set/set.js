function Set() {
    let items = {};

    this.has = function (value) {
        return items.hasOwnProperty(value);
    };

    this.add = function (value) {

        if (!this.has(value)){
            items[value] = value;
            return true;
        }
        return false;
    };
    
    this.remove = function (value) {

        if (this.has(value)){
            delete items[value];
            return true;
        }
        return false;
    };

    this.clear = function () {
      items = {};
    };

    this.print = function () {
        console.log(items);
    };

    this.size = function () {
        return Object.keys(items).length;
    };

    this.values = function () {
        let values = [];

        for(let i = 0, keys = Object.keys(items); i< keys.length; i++){

            values.push(items[keys[i]]);
        }
        return values;
    }
};


// let set = new Set();
//
// set.add(1);
// set.add(2);
//
// set.print();

let set = new Set();
set.add(1);
console.log(set.values()); //outputs ["1"]
console.log(set.has(1));
//outputs true
console.log(set.size());
//outputs 1
set.add(2);
console.log(set.values()); //outputs ["1", "2"]
console.log(set.has(2));
//true
console.log(set.size());
//2
set.remove(1);
console.log(set.values()); //outputs ["2"]
set.remove(2);
console.log(set.values()); //outputs []
