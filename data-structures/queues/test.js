const { Queue, Stack } = require("./index.js");

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


describe('Two Queue Stack Implementation', () => {
    let stack;

    beforeEach(() => {
        stack = new Stack();
    });

    test('should push elements onto the stack', () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.q1).toEqual([3, 2, 1]);
    });

    test('should pop elements from the stack', () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.pop()).toBe(3);
        expect(stack.pop()).toBe(2);
        expect(stack.pop()).toBe(1);
        expect(stack.pop()).toBe(null);
    });

    test('should return null when popping from an empty stack', () => {
        expect(stack.pop()).toBe(null);
    });
});
