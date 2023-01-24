import readline from 'readline-sync'
class Node{
    constructor(val){
        this.val = val;
        this.next =null;
    }
}
class LinkedList {
    constructor(){
        this.head = null;
        this.size=0;
    }
    isEmpty(){
        return this.size==0;
    }
    
    append(val){
        const node = new Node(val);

        if(this.isEmpty()){
            this.head = node;
        }else{
            let tempNode = this.head;
            while(tempNode.next){
                tempNode = tempNode.next;
            }
            tempNode.next = node;
        }
        this.size++;
    }

    insertAtAnyIndex(val,index){
        const node =new Node(val);
        if(index<0 || index>this.size){
            return
        }
        let tempNode = this.head;
        for(let i=0;i<index-1;i++){
            tempNode =tempNode.next;
        }
        node.next = tempNode.next;
        tempNode.next = node;
        this.size++;
    }
    removeEle(val){
        let tempNode = this.head;
        let prev=null;
        while(tempNode){
        if(tempNode.val == val){
            if(prev){
            prev.next = tempNode.next;
            }else{
                this.head = tempNode.next;
                prev=null;
            }
        }else{
            prev =tempNode;
        }
        tempNode =tempNode.next;
    }
    }
    mergeLL(list2, index){
        if(!this.isEmpty()){
            let tempNode =this.head;
            for(let i=0;i<index-1;i++){
                tempNode =tempNode.next;
            }
            let prev =tempNode.next;
            let temp2Node = list2.head;
            tempNode.next = temp2Node;
            while(temp2Node.next){
                temp2Node =temp2Node.next;
            }
            temp2Node.next = prev;
        }
    }

    reverseList(){
        let tempNode =this.head;
        let prev=null;
        while(tempNode){
            let next = tempNode.next;
            tempNode.next =prev;
            prev = tempNode;
            tempNode =next;
        }
        this.head =prev;
    }

    removeVal(index){
        let countNode = this.head;
        let c=1;
        while(countNode.next){
            c++;
            countNode =countNode.next;
        }
        let indexFromLast = c-index;
        let prev = this.head;
        for(let i=indexFromLast;i>=1;i--){
            if(i!=1){
            prev =prev.next;
        }
        else if(prev.next!=null){
            prev.next = prev.next.next;
        }else{
            prev.next=null;
        }
    }
}
    removeDuplicates(){
        let tempNode = this.head;
        let tempNode2;
        while(tempNode && tempNode.next){
            tempNode2 = tempNode;
            while(tempNode2.next){
                if(tempNode.val == tempNode2.next.val){
                    tempNode2.next = tempNode2.next.next
                }else{
                    tempNode2 =tempNode2.next;
                }
            }
            tempNode =tempNode.next
        }
    }

    print(){
        let tempNode =this.head;
        let listValues='';
        while(tempNode){
            listValues+=`${tempNode.val} `;
            tempNode =tempNode.next;
        }
        console.log(listValues);
    }
}
let list = new LinkedList();
let list2 = new LinkedList();


// let data;
// do{
//     data = readline.question("Enter the data: ");
//     if(data>=0){
//         list.append(data);
//         list.print();
//     }
// }while(data>=0)
list.append(10);
list.append(30);
list.append(30);
list.append(40);
list.append(30);
list.removeDuplicates();
// list.insertAtAnyIndex(25,2);
// list.reverseList();
list2.append(1);
list2.append(2);
list2.append(3);
// list.mergeLL(list2,2);

list.print()


