const { Queue } = require("./index.js");

describe("Queue enqueues and dequeues element", () => {
	let queue;
	beforeEach(() => {
		queue = new Queue();
	});
	test("Enqueue pushes values onto the end of the queue", () => {
		queue.enqueue(10);
		queue.enqueue(15);
		expect(queue.first.val).toBe(10);
		expect(queue.size).toBe(2);
		expect(queue.last.val).toBe(15);
		expect(queue.size).toBe(2);
	});
	test("Pop removes values from the front of the queue", () => {
		queue.enqueue(10);
		queue.enqueue(15);
		expect(queue.size).toEqual(2);
		expect(queue.dequeue()).toBe(10);
		expect(queue.size).toBe(1);
		expect(queue.dequeue()).toBe(15);
		expect(queue.size).toBe(0);
		expect(queue.dequeue()).toBe(null);

	});
});
