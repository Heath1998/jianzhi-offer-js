function ListNode(x){
    this.val = x;
    this.next = null;
}
function FindKthToTail(head, k)
{
    // write code here
    if(head==null||k<=0) return null;
    var pNode1 = head, pNode2 = head;
    while(--k) {
        if(pNode2.next != null) {
            pNode2 = pNode2.next;
        }
        else {
            return null;
        }
    }
    while(pNode2.next != null) {
        pNode2 = pNode2.next;
        pNode1 = pNode1.next;
    }
    return pNode1;
}
var a = new  ListNode(1);
var b = new ListNode(2);
var c =new ListNode(3);
a.next = b;
b.next = c;
console.log(FindKthToTail(c,1));