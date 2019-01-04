function jumpFloor(number)
{
   if(number == 1 || number == 0 ||number == 2) {
       return number;
   }
   var one = 1;
   var two = 2;
   var num;
   for(var i = 3; i<=number; ++i)
   {
       num = one + two;
       one = two;
       two =num;
   }
   return two;
}

console.log(jumpFloor(4));