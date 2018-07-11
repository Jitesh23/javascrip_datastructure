function PriorityQueue() {
    let items = [];

    function QueueElement(element, priority) {
      this.element = element;
      this.priority = priority;
    };

    this.enqueue = function (element, priority) {
       let queueElement = new QueueElement(element, priority);

       let added = false;

       for (var i =0; i < items.length; i++){
           if(queueElement.priority < items[i].priority){
               items.splice(i,0, queueElement);
               added = true;
               break;
           }

       }

       if (!added){
           items.push(queueElement);
       }
    }

    this.print = function () {
        for(var i = 0; i < items.length;i++){
            console.log(`${items[i].element} - ${items[i].priority}`);
        }
    };
}

let priorityQueue = new PriorityQueue();

priorityQueue.enqueue(23,3);
priorityQueue.enqueue(44,1);
priorityQueue.enqueue(32,4);

priorityQueue.print();