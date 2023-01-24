import readline from "readline-sync";

class Node{
    constructor(val){
        this.val =val;
        this.next =null;
        this.prev =null;
    }
}
class CircularDoublyLL{
    constructor(){
        this.head = null;
        this.tail=null;        
        this.size=0;
    }
    isEmpty(){
        return this.size==0;
    }
    getSize(){
        return this.size;
    }
    insertAtFront(val){
        const node= new Node(val);
        if(this.isEmpty()){
            node.next=node;
            node.prev=null;
            this.head =node;
            this.tail =node;
        }else{
            node.next = this.head;
            this.head.prev = node;
            this.tail.next = node;
            this.head =node;
            
        }
        this.size++;
    }
    deleteAtEnd(){
        if(this.isEmpty()){
            console.log("Circular Doubly LL is Empty!!");
        }else{
            let tempNode=this.tail.prev;
            this.tail =null;
            tempNode.next = this.head;
            this.tail =tempNode;
        }
        this.size--;
    }
    insertAtPos(index,val){
        const node = new Node(val);

        if(index==0){
            this.head =node;
            this.tail =node;
            node.next =node;
        }
        else{
         let tempNode =this.head;
         for(let i=0;i<index-1;i++){
            tempNode =tempNode.next;
         }
        //  let Next =tempNode.next;
        node.next = tempNode.next;
        tempNode.next.prev = node;
         tempNode.next = node;
         node.prev = tempNode;
        }
        this.size++;
    }
    deleteAtPos(index){
        let tempNode =this.head;
        if(this.isEmpty()){
            console.log("Circular Doubly LL is Empty!!");
        }
        if(index==0){
            tempNode.next.prev =this.tail;
            this.tail.next = tempNode.next;
            this.head = tempNode.next;
        }
        else if(tempNode && tempNode.next!=null){
            for(let i=0;i<index-1;i++){
                tempNode = tempNode.next;
            }
            tempNode.next = tempNode.next.next;
        }else{
            tempNode =tempNode.next;
        }
        this.size--;
    }
    print(){
        let tempNode =this.head;
        let listValues='';
        do{
            listValues+=`${tempNode.val} `;
            tempNode =tempNode.next;
        }while(tempNode != this.head);
        console.log(listValues);
    }
}
const circularDoubly = new CircularDoublyLL();
// circularDoubly.insertAtFront(50);
// circularDoubly.insertAtFront(40);
// circularDoubly.insertAtFront(30);
// circularDoubly.insertAtFront(20);
// circularDoubly.insertAtFront(10);
// circularDoubly.insertAtPos(2,25);
// // circularDoubly.deleteAtEnd();
// circularDoubly.deleteAtPos(5);
// circularDoubly.print();
let data;
do{
    data = readline.question("Enter the option: ");
    if(data==1){
        let n=1;
        while(n>0){
            n = readline.question("Enter the num: ");  
            if(n>1){
                circularDoubly.insertAtFront(n);
            }
        }
    }else if(data ==2){
        let n=1, ind;
            n =readline.question("Enter the num: ");
            ind =readline.question("Enter the Index: ");
            if(n>1){
                circularDoubly.insertAtPos(ind, n);
                circularDoubly.print();
        }
    }else if(data==3){
        circularDoubly.deleteAtEnd();
        circularDoubly.print();
    }else if(data==4){
        let ind = readline.question("Enter the Index: ");
        circularDoubly.deleteAtPos(ind);
        circularDoubly.print();
    }
    else if(data==5){
        circularDoubly.print();
    }
}while(data>0)