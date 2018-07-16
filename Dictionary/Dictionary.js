function Dictionary() {
  let items = {};

  this.has = function (key) {
    return key in items;
  };

  this.set = function (key, value) {
      items[key] = value;
  };

  this.delete = function (key) {

    if (this.has(key)){
      delete items[key];
      return true;
    }
    return false;

  }


  this.get = function (key) {
    return this.has(key) ?  items[key] : undefined;
  }

  this.values = function () {
    var values = [];

  for (var k in items) {
    if (this.has(k)) {
      values.push(items[k]);
    }
  }
  return values;
}

this.keys = function () {
  return Object.keys(items);
}


this.getItems = function () {
  return items;
}

this.size = function () {
    return Object.keys(items).length;
};

this.clear = function () {
  items = {};
};



}

var dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');

console.log(dictionary.has('Gandalf')); //true

console.log(dictionary.size()); //3

console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get('Tyrion'));

dictionary.delete('John');

console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.getItems());
