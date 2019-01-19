function ListNode(x){
    this.val = x;
    this.next = null;
}
function Merge(pHead1, pHead2)
{
    // write code here
    if(pHead1 == null) {
        return pHead2;
    }
    if(pHead2 == null) {
        return pHead1;
    }
    if(pHead1.val <= pHead2.val) {
        pHead1.next = Merge(pHead1.next, pHead2);
        return pHead1;
    }
    else {
        pHead2.next = Merge(pHead1,pHead2.next);
        return pHead2;
    }
}

function MergeRecursion(pHead1, pHead2)
{
    // write code here
    var head = new ListNode(-1);
    var root = head;
    head.next = null;
    while(pHead1 !== null && pHead2 !== null) {
        if(pHead1.val <= pHead2.val) {
            head.next = pHead1;
            head = pHead1;
            pHead1 = pHead1.next;
        }
        else {
            head.next = pHead2;
            head = pHead2;
            pHead2 = pHead2.next;            
        }
    }
    if(pHead1 != null) {
        head.next = pHead1;
    }
    if(pHead2 != null) {
        head.next = pHead2;
    }
    return root.next;
}