import readline from "readline-sync";

class Node{
    constructor(val){
        this.val =val;
        this.next =null;
    }
}
class StackLL{
    constructor(){
        this.head =null;
        this.size=0;
    }
    isEmpty(){
        return this.size==0;
    }
    push(val){
        const node = new Node(val);
        if(this.isEmpty()){
            this.head =node;
        }else{
            node.next = this.head;
            this.head =node;
        }
        this.size++;
    }
    pop(){
        if(this.isEmpty()){
            return null;
        }else{
            let next = this.head.next;
            this.head = next;
        }
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
const stack = new StackLL();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.pop();
// stack.peek();

let data;
do{
    data = readline.question("Enter the option: ");
    if(data==1){
        let n=1;
        while(n>0){
            n = readline.question("Enter the num: ");  
            if(n>1){
            stack.push(n);
            }
        }
    }else if(data ==2){
        stack.pop();
        stack.print();
    }else if(data==3){
        stack.peek();
    }else if(data==4){
        stack.print();
    }
}while(data>0)
