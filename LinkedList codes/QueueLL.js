import readline from "readline-sync";

class Node{
    constructor(val){
        this.val =val;
        this.next =null;
    }
}
class QueueLL{
    constructor(){
        this.head =null;
        this.tail=null;
        this.size=0;
    }
    isEmpty(){
        return this.size==0;
    }
    enQueue(val){
        const node = new Node(val);
        if(this.isEmpty()){
            this.head =node;
            this.tail =node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }
    deQueue(){
        if(this.isEmpty()){
            console.log("Queue is Empty");
        }else{
            let tempNode =this.head;
            
            while(tempNode.next!=this.tail){
                tempNode =tempNode.next;
            }
            tempNode.next =null;
            this.tail =tempNode;
        }
        this.size--;
    }
    peek(){
        console.log(this.head.val);
    }
    print(){
        let tempNode = this.head;
        let listValues='';
        while(tempNode){
            listValues+=`${tempNode.val} `;
            tempNode =tempNode.next;
        }
        console.log(listValues);
    }
}
let queue = new QueueLL();
let data;
do{
    data = readline.question("Enter the option: ");
    if(data==1){
        let n=1;
        while(n>0){
            n = readline.question("Enter the num: ");  
            if(n>1){
                queue.enQueue(n);
            }
        }
    }else if(data ==2){
        queue.deQueue();
        queue.print();
    }else if(data==3){
        queue.peek();
    }else if(data==4){
        queue.print();
    }
}while(data>0)