class Node {
	constructor(data = null) {
		this.data = data;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor(val) {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		const node = new Node(val);
		if (!this.head) {
			this.head = node;
			this.tail = this.head;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
		this.length++;
		return this;
	}

	pop() {
		if (!this.head) {
			return undefined;
		}
		let curr = this.head;
		let tail = curr;
		while (curr.next) {
			tail = curr;
			curr = curr.next;
		}
		this.tail = tail;
		this.tail.next = null;
		this.length -= 1;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return curr;
	}

	get(idx) {
		let curr = this.head;
		let count = 0
		if(count === idx){
			return this.head;
		}
		
	}

	set() {}

	insert() {}

	remove() {}

	rotate() {}
}

module.exports = { SinglyLinkedList, Node };
