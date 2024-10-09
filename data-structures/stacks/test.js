const {StackList} = require('./index');

describe('StackList', () => {
    let stack;

    beforeEach(() => {
        stack = new StackList();
    });

    test('should push elements onto the stack', () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.top.val).toBe(3);
        expect(stack.length).toBe(3);
    });

    test('should pop elements from the stack', () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.pop()).toBe(3);
        expect(stack.pop()).toBe(2);
        expect(stack.pop()).toBe(1);
        expect(stack.pop()).toBeNull();
        expect(stack.length).toBe(0);
    });

    test('should peek the top element of the stack', () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.peek()).toBe(3);
        stack.pop();
        expect(stack.peek()).toBe(2);
        stack.pop();
        expect(stack.peek()).toBe(1);
        stack.pop();
        expect(stack.peek()).toBeNull();
    });

    test('should handle popping from an empty stack', () => {
        expect(stack.pop()).toBeNull();
    });

    test('should handle peeking into an empty stack', () => {
        expect(stack.peek()).toBeNull();
    });
});