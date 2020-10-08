function maxProfit(testArray) 
{ 
     // Maximum difference found so far 
     let max_diff = testArray[1] - testArray[0]; 
       
     // Minimum number found so far  
     let min_number = testArray[0]; 
     for(i in testArray) 
     {      
     //check if the next number is larger than previous largest number
       if (testArray[i] - min_number > max_diff) {           
       max_diff = testArray[i] - min_number; 
       }
       //check if the next number is less than previous smallest number
       else if (testArray[i] < min_number) {
       min_number = testArray[i];
       max_diff = -1;
       }
       
       else 
       max_diff = 0;
     } 
     return max_diff; 
}
const myArray = [10,1,5,6,7,34,10,20];
const Result = maxProfit(myArray);
console.log(Result);
