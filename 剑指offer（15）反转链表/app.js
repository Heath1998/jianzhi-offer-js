function ListNode(x){
    this.val = x;
    this.next = null;
}
function ReverseList(pHead)
{
    // write code here
    var pre = null, next = null;
    while(pHead) {
        next = pHead.next;  //取头结点的下一个节点
        pHead.next = pre;   //头结点的.next指向已经逆置的部分pre
        pre = pHead;     //pre的pHead使之逆置部分改变
        pHead = next;    //头指针指向下一个节点
    }
    return pre;
}

function ReverseListRecursion(pHead)
{
    // write code here
    if(pHead == null|| pHead.next == null) {
        return pHead;
    }
    else {
        var newNode = ReverseListRecursion(pHead.next);
        newNode.next = pHead;
        pHead.next = null;
    }
    return newNode;
}

var a = new ListNode(1);
var b = new ListNode(2);
var c = new ListNode(3);
a.next = b;
b.next = c;
console.log(a);
console.log(ReverseListRecursion(a));