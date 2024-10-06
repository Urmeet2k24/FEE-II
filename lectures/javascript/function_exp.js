/* function expression annonymous function
function printname(func,num)
{
    for(let i=1;i<=num;i++)
        {
            func();
        } 
}  
let myname=function()
{
    console.log("Urmeet");
};
printname(myname,20);*/

let arr=[2,3,4,5]
function notEvenOdd(func,arr)
{
    for(let i=0;i<5;i++)
        {
            func(arr[i]);
        }
}
let even=function(num){
    if(num%2==0)
    {
        console.log(num);
    }
    else{
        console.log("not even");
    }
}

notEvenOdd(even,arr)
