class Node {
    constructor(element) {
        this.value = element;
        this.next = null;
    }
}

class List {
    constructor() {
        this.head = null;
    }

    add(element) {
        const temp = new Node(element);
        if(this.head == null) {
            this.head = temp;
            return;
        }
        let i = this.head;
        while(i.next) {
            i = i.next;
        }
        i.next = temp;
    }

    print() {
        let i = this.head;
        while(i){
            console.log(i.value);
            i = i.next;
        }
    }

    reverse() {
        let prev = null;
        let current = this.head;
        while(current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
}

const l1 = new List();
l1.add(2);
l1.add(4);
l1.add(3);
l1.print();
l1.reverse();
l1.print();

const a = [];
a.toLocaleString()