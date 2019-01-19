function IsPopOrder(pushV, popV)
{
    let sck = [];
    let id = 0;
    for(var i = 0; i < pushV.length; ++i)
    {
        sck.push(pushV[i]);
        while(sck.length && sck[sck.length - 1] == popV[id])
        {
            ++id;
            sck.pop();
        }
    }
    return sck.length == 0;
}

let a = [1,2,3,4,5];
let b = [4,3,5,1,2];

console.log(IsPopOrder(a, b));