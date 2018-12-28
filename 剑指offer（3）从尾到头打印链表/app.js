function ListNode(x){
    this.val = x;
    this.next = null;
}
function printListFromTailToHead(head)
{
    var list = new Array();
    var p =head;
    while(p != null)
    {
        list.push(p.val);
        p = p.next;
    }
    return list.reverse();
}

var a = new ListNode(1);
var b = new ListNode(2);
var c = new ListNode(3);
a.next = b;
b.next = c;

console.log(printListFromTailToHead(a));