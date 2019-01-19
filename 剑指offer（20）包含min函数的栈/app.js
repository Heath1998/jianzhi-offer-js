var stack = [];

function push(node)
{
    // write code here
    stack.push(node);
}
function pop()
{
    // write code here
    return stack.pop();
}
function top()
{
    // write code here
    return stack.peek();
}
function min()
{
    // write code here
    if(stack.length == 0)
        return null;
    var minNum = stack.pop();
    var stack2 = [];
    stack2.push(minNum);
    while(stack.length)
    {
        var x = stack.pop();
        stack2.push(x);
        if(x < minNum)
            minNum = x;
    }
    while(stack2.length)
    {
        stack.push(stack2.pop());
    }
    return minNum;
}


