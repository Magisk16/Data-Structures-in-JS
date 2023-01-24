import readline from "readline-sync";
class graph{
    constructor(choice){
        this.list={};
        this.choice = choice;
    }

    addVertex(v){
        if(!this.list[v]){
            this.list[v] =[];
        }
    }
    addEdge(v1,v2){
        // if(this.choice==1){
            this.list[v1].push(v2);
        //}
        //if(this.choice==2){
            // this.list[v2].push(v1); // Makes undirected graph
        //}
    }
    hasEdge(v1,v2){
        return (this.list[v1].includes(this.list[v2])&&(this.list[v2].includes(this.list[v1])));
    }
    deleteEdge(v1,v2){
        this.list[v1] = this.list[v1].filter((v)=>v!==v2);
        this.list[v2] = this.list[v2].filter((v)=>v!==v1);

    }
    deleteVertex(v){
        console.log(this.list[v].length);
        while(this.list[v].length){
            let adjVertex = this.list[v].pop();
            this.deleteEdge(v,adjVertex);
        }
        delete this.list[v];
    }

    display(){
        for(let item in this.list){
            console.log(item+ "->" + this.list[item]);
        }
    }
}
let choice = readline.question(`Enter the choice to make: 1.Directed 2.Undirected: `);

let adjList = new graph(choice);
let vertices = readline.question("Enter Vertex: ").split("");
adjList.addVertex(vertices);
console.log(adjList);
let edges;
do{
    edges = readline.question("Enter edges: ").split(" ");
    if(edges==-1){
        console.log("Exit");
        break;
    }else{
    adjList.addEdge(edges[0],edges[1]);
    }
}
while(true);
// let adjList = new graph();
// adjList.addVertex("A");
// adjList.addVertex("B");
// adjList.addVertex("C");
// adjList.addVertex("D");
// adjList.addEdge("A","B");
// adjList.addEdge("A","C");
// adjList.addEdge("B","C");
// adjList.addEdge("C","D");
// adjList.display();
// // adjList.deleteEdge("A","B");
// adjList.deleteVertex("A");
// adjList.display();
// console.log(adjList.hasEdge("B","C"));