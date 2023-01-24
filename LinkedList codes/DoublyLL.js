import readline from "readline-sync";
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLL{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size=0;
    }
    isEmpty(){
        return this.size==0;
    }
    getSize(){
        return this.size;
    }
    append(val){
        const node = new Node(val);
        if(this.isEmpty()){
            this.head =node;
            this.tail =node;
        }else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail =node;
        }
        this.size++;
    }
    insertEfficient(val,index){
        let node = new Node(val);
        let tempNode=this.head;
        let lastNode = this.tail;
        if(index<=Math.floor(this.size/2)){
            for(let i=0;i<index-1;i++){
                tempNode=tempNode.next;
            }
            node.next = tempNode.next;
            tempNode.next = node;
            node.prev = tempNode;
            node.next.prev = node;
            this.size++;

        }else{
            for(let i=this.size;i>=index+1;i--){
                lastNode =lastNode.prev;
            }
            node.next = lastNode.next;
            lastNode.next =node;
            node.prev = lastNode;
            node.next.prev = node;
            this.size++; 
        }
    }
    print(){
        if(this.isEmpty()){
            console.log("Doubly List is Empty");
        }else{
            let tempNode = this.head;
            let listValues = '';
            while(tempNode){
                listValues+=`${tempNode.val} `;
                tempNode =tempNode.next;
            }
            console.log(listValues);
        }
    }
}

const Doublylist = new DoublyLL();
let data;
do{
    data = readline.question("Enter the data: ");
    if(data>=0){
        Doublylist.append(data);
        Doublylist.print();
    }
}while(data>=0)

// console.log(Doublylist.getSize())
// Doublylist.append(10);
// Doublylist.append(20);
// Doublylist.append(30);
// Doublylist.append(40);
// Doublylist.append(50);
// Doublylist.append(60);
Doublylist.insertEfficient(45,4);

Doublylist.print();
