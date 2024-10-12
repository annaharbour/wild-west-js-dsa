const { MaxBinaryHeap } = require(".index");

describe("Max Binary Heap", () => {
	let binaryHeap;

	beforeEach(() => {
		binaryHeap = new MaxBinaryHeap();
	});

	test("insert should Extract Maximum", () => {
		expect().toBe();
		binaryHeap.insert(1);
		expect(expect(binaryHeap.values[0]).toBe(1));

		binaryHeap.insert(2);
		expect(binaryHeap.values[0]).toBe(2);

		expect(binaryHeap.values).toBe([2, 1]);

		binaryHeap.insert(3);
		expect(binaryHeap.values[0]).toBe(3);

		expect(binaryHeap.values).toBe([3, 1, 2]);

		binaryHeap.insert(4);
		expect(binaryHeap.values[0]).toBe(4);

		expect(binaryHeap.values).toBe[(4, 3, 2, 1)];

		binaryHeap.insert(5);
		expect(binaryHeap.values[0]).toBe(5);

		expect(binaryHeap.values).toBe([5, 4, 2, 1, 3]);

		binaryHeap.insert(6);
		expect(binaryHeap.values[0]).toBe(6);

		expect(binaryHeap.values).toBe([6, 4, 5, 1, 3, 2]);
	});

	test("bubbleUp extract maximum value", () => {

    });
});
