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

// Problem: Implement a stack using two queues:

class Stack {
	constructor() {
		this.q1 = [];
		this.q2 = [];
	}
	push(val) {
		// enque val to q2
		this.q2.push(val);
		// one by one deque everything from q1 and enqueue to q2
		while (this.q1.length > 0) {
			this.q2.push(this.q1[0]);
			this.q1.shift();
		}
		// swap the queues of q1 and q2
		let temp = this.q1;
		this.q1 = this.q2;
		this.q2 = temp;
	}
	pop() {
		// dequeue item from q1
		if (this.q1.length === 0) return null;
		return this.q1.shift();
	}
}

module.exports = { Queue, Stack };
