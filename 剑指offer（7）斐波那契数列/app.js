function down(n, x, arr) {
    
    if(n == x ) 
    {
        arr[x] = arr[x-1] + arr[x-2]; 
    }
    else if(x === 0 || x===1)
    {
        down(n, x+1, arr);
    }
    else 
    {
        arr[x] = arr[x-1] + arr[x-2];
        down(n, x+1,arr);
    }
}

function Fibonacci(n)
{
    var arr = [];
    arr[0] = 0;
    arr[1] = 1;
    if(n === 1 || n === 0)
        return n;
    down(n, 0 , arr);
    return arr[n];   
}

console.log(Fibonacci(2));
console.log(Fibonacci(0));
console.log(Fibonacci(12));