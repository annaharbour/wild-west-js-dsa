class Node {
	constructor(val) {
		this.next = null;
		this.val = val;
	}
}

class Queue {
	constructor() {
		this.size = 0;
		this.first = null;
		this.last = null;
	}

	enqueue(val) {
		const node = new Node(val);
		if (!this.first) {
			this.first = node;
			this.last = node;
		} else {
			this.last.next = node;
			this.last = node;
		}
		this.size++;
		return node.val;
	}

	dequeue() {
		if (!this.first) return null;
		let temp = this.first;
		if (this.first === this.last) {
			this.first = null;
			this.last = null;
		} else {
			this.first = this.first.next;
		}
		this.size--;
		return temp.val;
	}
}

module.exports = { Queue };
