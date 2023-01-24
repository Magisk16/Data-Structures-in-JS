class Node{
    constructor(val){
        this.val =val;                                                                                                      
        this.left =null;
        this.right =null;
    }
}
class Bst{
    constructor(){
        this.root =null;
        this.sum =0;
    }
    isEmpty(){
        return this.root === null;
    }
    insert(val){
        let node = new Node(val);
        if(this.isEmpty()){
            this.root =node;
        }else{
            this.insertNode(this.root, node);
        }
        // console.log(node)
    }
    insertNode(root,node){
        if(node.val<root.val){
            if(root.left == null){
                root.left = node;
            }else{
                this.insertNode(root.left,node);
            }
        }else if(node.val>root.val){
            if(root.right == null){
                root.right =node;
            }else{
                this.insertNode(root.right, node);
            }
        }   
    }
    search(root,val){
        if(!root){
            return false;
        }else{
        if(root.val ==val){
            return true;
        }else if(root.val<val){
            return this.search(root.right,val);
        }else{
            return this.search(root.left,val);
        }
    }
    }
    inorder(root){
        if(root){
            this.inorder(root.left);
            console.log(root.val);
            this.inorder(root.right);
        }
    }
    preorder(root){
        if(root){
            console.log(root.val);
            this.preorder(root.left);
            this.preorder(root.right);
        }
    }
    postorder(root){
        if(root){
            this.postorder(root.left);
            this.postorder(root.right);
            console.log(root.val);

        }
    }

    levelOrder(root){
        const queue =[root];
        if(!root) return null;
        while(queue.length){
            const curr = queue.shift();
            console.log(curr.val);
            if(curr.left){
                queue.push(curr.left);
            }
            if(curr.right){
                queue.push(curr.right);
            }
        }
    }
    height(root){
        let l,r;
        let tempNode = root;
        if(tempNode==null) return 0;
        l = this.height(tempNode.left);
        r = this.height(tempNode.right);
        if(l<r){
            return r+1;
         }else{
            return l+1;
         }
    }

    min(root) {
        if (!root.left) {
          return root.value;
        } else {
          return this.min(root.left);
        }
      }
    delete(val){
        return this.deleteNode(this.root,val);
    }
    deleteNode(root,val){
        if(root==null){
            return root;
        }
        if(val<root.val){
            root.left =  this.deleteNode(root.left,val);
        }else if(val>root.val){
            root.right = this.deleteNode(root.right,val);
        }
        else{
            if(!root.left && !root.right){
            return null;
            }
            if(!root.left){
                return root.right;
            }else if(!root.right){
                return root.left;
            }
            root.val = this.min(root.right);
            root.right = this.deleteNode(root.right,root.val);
        }
        return root;
    }

    commonAncestor(root, a,b){
        if(root == null) return null;
        if(root.data == a || root.data ==b) return root;
        root.left = this.commonAncestor(root.left,a,b);
        root.right = this.commonAncestor(root.right,a,b);
        if(root.left==null) return root.right;
        if(root.right == null) return root.left;
        return root;
    }
    // commonAncestor(a,b){
    //     let node = this.root;
    //     let ancestor = this.ancestor(node,a,b);
    //     console.log(ancestor);
    // }

    // ancestor(node, a,b){
    //     if(a>node.val && b>node.val){
    //         return this.commonAncestor(node.right,a,b);
    //     }else if(a<node.val && b.node.val){
    //         return this.commonAncestor(node.left,a,b);  
    //     }
    //     return node;
    // }
    sumSingleChildParent(node){
        if(!node) return;
        this.sumSingleChildParent(node.left);
        if((node.left && !(node.right)) || (node.right && !(node.left))){
            console.log("Parent of single child are: "+node.val)
            if(node.val) this.sum+= +node.val;
        }
        this.sumSingleChildParent(node.right);
    }

    sumOfParentHavingOneChild(){
        this.sumSingleChildParent(this.root);   
        console.log("Sum of the parent Node :"+this.sum);
    }
    deleteLeafNodeRightChild(root){
        if(root){
        this.deleteLeafNodeRightChild(root.left);
        if(root.right){
            if(root.right.left==null && root.right.right == null){
                root.right = null;
            }
        }
        this.deleteLeafNodeRightChild(root.right);
        }
    }
}
let bst = new Bst();
bst.insert(3);
bst.insert(5);
bst.insert(6);
bst.insert(2);
bst.insert(7);
bst.insert(4);
bst.insert(8);
bst.preorder(bst.root)
// bst.commonAncestor(bst.root,6,4);
bst.sumOfParentHavingOneChild();
// bst.commonAncestor(6,4);
// bst.height(bst.root);
bst.delete(3);
bst.preorder(bst.root)
// bst.inorder(bst.root);
// bst.postorder(bst.root);
// bst.preorder(bst.root)
// bst.levelOrder(bst.root);
// console.log(bst.height(bst.root));
// console.log(bst.search(10.15));
// console.log(bst.search(10,1));