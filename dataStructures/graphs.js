//creating a graph using adjacency lists
// we are building an undirected graph
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex){
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2){
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2){
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
  }

  removeVertex(vertex){
    while (this.adjacencyList[vertex].length){
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  //DFS Recursively
  depthFirstR(start){
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList
    dfs(start);
    return result;

    function dfs(vertex){
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(function (neighbor){
        if (!visited[neighbor]) dfs(neighbor);
      });
    }
  }

  //DFS Iteratively
  depthFirstI(start){
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    while(stack.length){
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(function (neigbor){
        if (!visited[neigbor]){
          visited[neigbor] = true;
          stack.push(neigbor);
        }
      });
    }
    return result;
  }

  //Breadth First Traversal
  breathFirst(start){
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    while(queue.length){
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(function (neigbor) {
        if (!visited[neigbor]){
          visited[neigbor] = true;
          queue.push(neigbor);
        }
      });
    }
    return result;
  }

}



























var g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.depthFirstR("A"));
console.log(g.depthFirstI("A"));
console.log(g.breathFirst("A"));
