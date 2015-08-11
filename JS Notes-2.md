##JavaScript Notes-2

##### by M Deepst
 
###Specimens of Functions

####A. Single Parameter Functions

#####1-Orange Cost Calculator

For example I like oranges, and every week I buying 10 pieces orange. But the prices is keep changing, so I need the calculator. Cost is keep changing so it should be Parmeter. 10 piece is amount of our oranges, so it is reusable block of our function. Let's write our function!

    var costOrange = function(cost){
    
    	console.log(10*cost);
    
    }

This is our orange cost calculator machine database :D. If a piece of orange 14$, full amount which we have to pay is, you may write this code on interpreter;

    costOrange(14);

####2-  Divisibility Scaler

Actually the title is wide, because next function is just scale a number's quarter can divisible 3. We are using in this example `return` value. Its mean like show result of reusable codes. 
    

    var quarter = function(number){
    return number/4;
    }
    
    if (quarter(number) % 3 === 0 ) {
      console.log("The statement is true");
    } else {
      console.log("The statement is false");
    }

(quarter(number).., write instead of umber which number you wanna calculate.

####B. Double Parameters Functions

#####1. Rectangular Perimeter Scaler

    var perimeterBox = function(length,width){
    return length*2 + width*2;
    }
    
    perimeterBox(4,5); 
It will give you  perimeter of rectangular which length 4, and width 5.

Note: If you write variable inside its become a new code. That mean if you have same code  outside it will not working inside your new function or variable.

#####2. Sleep Condition Checker
    var sleepCheck = function(numHours){
    if(numHours >= 8){
    return "You're getting plenty of sleep! Maybe even too much!";
       }  
    else{
    return "Get some more shut eye!";
    };
    }
    sleepCheck(10);
