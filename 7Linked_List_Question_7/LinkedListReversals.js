class ListNode {
    constructor(val, next = null){
        this.val = val;
        this.next = next;
    }
}

const linkedList = [5,4,3,2,1].reduce((acc, val)=> new ListNode(val, acc), null);

const m=2, n=4;

// Time: O(n), Space: O(1)
const reverseLinkedList = (head)=>{
    let prev = null;
    let current = head;
    
    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;   
    }
    return prev;
}
// console.log(reverseLinkedList(linkedList));


//Time: O(n), Space: O(1)
const reverseBetween = (head, m, n)=>{
    let currentPos = 1;
    let currentNode = head;
    let start = head;

    while (currentPos < m) {
        start = currentNode;
        currentNode = currentNode.next;
        currentPos++; 
    }

    let newList = null;
    let tail = currentNode;

    while (currentPos >= m && currentPos <= n) {
        const next = currentNode.next;
        currentNode.next = newList;
        newList = currentNode;
        currentNode = next;
        currentPos++;   
    }

    start.next = newList;
    tail.next = currentNode;

    if(m > 1){
        return head;
    } else {
        return newList;
    }
}

console.log(reverseBetween(linkedList, m, n));