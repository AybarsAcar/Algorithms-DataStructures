class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex){
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2, w){
    this.adjacencyList[v1].push({node: v2, weight: w});
    this.adjacencyList[v2].push({node: v1, weight: w});
  }

  Dijkstra(start, finish){
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [] //to return at the end
    let smallest;

    //build up initial state
    for (var vertex in this.adjacencyList){
      if (vertex === start){
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    //as long as there is some node to visit
    while(nodes.values.length){
      smallest = nodes.dequeue().val;

      if(smallest === finish){
        //DONE BUILD PATH TO RETURN
        while (previous[smallest]){
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity){
        for (var neighbor in this.adjacencyList[smallest]){
          //now we have the each neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          //calculating distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;

          if (candidate < distances[nextNeighbor]){
            //updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            //updating previous - how we got to neighbor
            previous[nextNeighbor] = smallest;
            //enqueue in priority queue with the new PriorityQueue
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }

}

//simple PriorityQueue
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority){
    this.values.push({val, priority});
    this.sort();
  }

  dequeue(){
    return this.values.shift();
  }

  //always get the smallest value out first
  sort(){
    this.values.sort((a, b) => a.priority - b.priority);
  }

}






































var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.Dijkstra("A", "E"));
