
    function  NumberOf1( n) {
        var count=0;
        while(n)
        {
            n=n&n-1;	
            ++count;
        }
        return count;
     }

     console.log(NumberOf1(-1));