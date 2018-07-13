function LinkedList() {

    function Node(element) {
        this.element = element;
        this.next = null;
    }

    let length = 0;
    let head = null;

    this.append = function (element) {

        let node = new Node(element), current;

        if (head === null){
            head = node;
        }else {

            current = head;

            while( current.next){
                current = current.next;
            }

            current.next = node;
        }

        length++;

    };

    this.insert = function (position, element) {

        if (position >= 0 && position <= length){

            let node =  new Node(element);

            let current = head, previous, index = 0;

            if(position == 0){

                node.next = current;
                head = node;
            }else{

                while (index++ < position){
                    previous = current;
                    current = current.next;
                }

                node.next = current;
                previous.next = node;

            }

            length++;
            return true;

        }else {
            return false;
        }

    };

    this.removeAt = function (position) {

        if ( position > -1 && position < length){

            let current = head, previous, index = 0;

            if (position == 0){
                head = current.next;
            }else {

               while (index++ < position){
                  previous = current;
                  current = current.next
                }

                previous.next = current.next;

            }
            length--;

            return current.element;

        }else {
            return null;
        }

    };

    this.remove = function (element) {

      let index = this.indexOf(element);

      return this.removeAt(index);

    };

    this.indexOf = function (element) {

        let current = head, index = 0;

        while (current) {

          if (element == current.element){
            return index;
          }
            index++;
          current = current.next;

        }

        return -1;
    };

    this.isEmpty = function () {
        return length == 0;
    };

    this.size = function () {
      return length;
    };

    this.toString = function () {

        let string = '', current = head;

        while (current){

            string += current.element + (current.next ? 'n': '');

            current = current.next;

        }

        return string;

    };

    this.print = function () {
      console.log(this.toString());
    };

    this.getHead = function(){
      return head;
    };
}


let linkedList = new LinkedList();

linkedList.append(23);
linkedList.append(28);
linkedList.append(43);
linkedList.append(5);
linkedList.append(45);
linkedList.append(32);
linkedList.insert(3, 60);
linkedList.print();

//linkedList.remove(43);

linkedList.print();
