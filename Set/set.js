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

    this.union = function (otherset) {

      let unionSet = new Set();

      let values = this.values();

        for(let i = 0; i< values.length; i++){
          unionSet.add(values[i]);

        }

        values = otherset.values();

        for (var i = 0; i < values.length; i++) {
          unionSet.add(values[i]);
        }

      return unionSet;
    }

    this.intersection = function (otherSet) {

      let interSection = new Set();

      let values = this.values();

      for (var i = 0; i < values.length; i++) {
        if (otherSet.has(values[i]))
        interSection.add(values[i]);
      }
      return interSection;
}

this.difference = function (setB) {

  let differenceSet = new Set();

  let values = this.values();


  for (var i = 0; i < values.length; i++) {

    if (!setB.has(values[i])) {
      differenceSet.add(values[i]);
    }
  }
  return differenceSet;
}

this.subset = function (otherSet) {

let values = this.values();

  if (this.size() > otherSet.size()){
    return false;
  }else {

  for (var i = 0; i < values.length; i++) {

    if(!otherSet.has(values[i])){
        return false;
    }
  }

  }

return true;

}

};


// let set = new Set();
//
// set.add(1);
// set.add(2);
//
// set.print();

// let set = new Set();
// set.add(1);
// console.log(set.values()); //outputs ["1"]
// console.log(set.has(1));
// //outputs true
// console.log(set.size());
// //outputs 1
// set.add(2);
// console.log(set.values()); //outputs ["1", "2"]
// console.log(set.has(2));
// //true
// console.log(set.size());
// //2
// set.remove(1);
// console.log(set.values()); //outputs ["2"]
// set.remove(2);
// console.log(set.values()); //outputs []


let setA = new Set();

setA.add(1);
setA.add(2);



let setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);

let setC = new Set();
setC.add(2);
setC.add(3);
setC.add(4);


//
// let unionAB = setA.union(setB);
// let interSectionAB = setA.intersection(setB);
// let differenceAB = setA.difference(setB);

console.log(setA.subset(setB));
console.log(setA.subset(setC));

// console.log(unionAB.values());
// console.log(interSectionAB.values());
// console.log(differenceAB.values());
