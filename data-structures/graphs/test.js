const { Graph } = require('./index');

describe('Graph', () => {
    let graph;

    beforeEach(() => {
        graph = new Graph();
    });

    test('should add vertices correctly', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        expect(graph.adjacencyList).toHaveProperty('A');
        expect(graph.adjacencyList).toHaveProperty('B');
    });

    test('should add edges correctly', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addEdge('A', 'B');
        expect(graph.adjacencyList['A']).toContain('B');
        expect(graph.adjacencyList['B']).toContain('A');
    });

    test('should remove edges correctly', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addEdge('A', 'B');
        graph.removeEdge('A', 'B');
        expect(graph.adjacencyList['A']).not.toContain('B');
        expect(graph.adjacencyList['B']).not.toContain('A');
    });

    test('should remove vertices correctly', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addEdge('A', 'B');
        graph.removeVertex('A');
        expect(graph.adjacencyList).not.toHaveProperty('A');
        expect(graph.adjacencyList['B']).not.toContain('A');
    });

    test('should perform BFS correctly', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addVertex('C');
        graph.addVertex('D');
        graph.addEdge('A', 'B');
        graph.addEdge('A', 'C');
        graph.addEdge('B', 'D');
        const result = graph.BFS('A');
        expect(result).toEqual(['A', 'B', 'C', 'D']);
    });

    test('should perform DFS correctly', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addVertex('C');
        graph.addVertex('D');
        graph.addEdge('A', 'B');
        graph.addEdge('A', 'C');
        graph.addEdge('B', 'D');
        const result = graph.DFS('A');
        expect(result).toEqual(['A', 'B', 'D', 'C']);
    });
});