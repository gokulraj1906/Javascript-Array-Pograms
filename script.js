// Program-1


// for(i=1;i<=100;i++){
//     if((i%3==0)&&(i%5==0))
//         console.log("FizzBuzz");
//     else if(i%3==0)
//         console.log("Fizz");
//     else if(i%5==0)
//         console.log("Buzz");
//     else
//         console.log(i);
// }


//Program-2

// function palindrome(str){
//   let   flag=0;
//   for(i=0,j=(str.length-1);i<str.length;i++,j--){

//     if(str.charAt(i)!=str.charAt(j)){
//         console.log(str);
//         console.log("Not a Palindrome");
//         break;
//     }
//     else{
//         flag=flag+1;
//     }
// }
// if(flag!=0){
//     console.log(str);
//     console.log("Palindrome");
// }

//   }
  
// palindrome("RAMAR");

// Program-3

// function largeElement(arr){
//     let max=arr[0];
//     for(i=0;i<arr.length;i++)
//         {
//             if(arr[i]>max)
//                 max=arr[i];
//         }
//     return max;
//     }
// console.log([1,5,6,8,2,4]);
// console.log(largeElement([1,5,6,8,2,4]));


// Program-4

function Count(str){
    count=0;
    for(i=0;i<str.length;i++){
        count=0;
        for(j=0;j<str.length;j++){
            if(str.charAt(i)==str.charAt(j)){
                count=count+1;
            }
        
         }
         for(k=0;k<str.length;k++){

         }
    }

}


//Program-6

// function  factorial(n){
//     let fact=1;
//     for(i=1;i<=n;i++){
//         fact=fact*i;

//     }
//     return fact;
// }
// console.log(5);
// console.log(factorial(5));


//Program-7


// function celciusTofar(celcius){
//     let f =(9/5)*celcius+32;
//     console.log(f+"F");
// }
// console.log("32 C");
// celciusTofar(32);


//Program-8


// function missingValue(arr){
//     let len=arr.length;
//     let n=arr[len-1];
//     for(i=0;i<n;i++){
//         if(arr[i]!=i){
//             console.log(i);
//             i=i+1;
//         }

//     }
// }
// console.log([0,1,2,3,5,6]);
// missingValue([0,1,2,3,5,6]);