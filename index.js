//Challenge 1
//studentGradeGenerator ,a function that takes marks as a parameter
//It tests the following conditions :  A > 79, B > 60 to 79, C > 59 to 49, D > 40 to 49, E > less 40.

function studentGradeGenerator(marks){
    if (marks > 79 && marks <= 100){
        return "A";
    }
    else if (marks > 60 && marks <= 79){
        return "B";
    }
    else if (marks >49 && marks <= 60){  
        return "C";
    }
    else if (marks > 40 && marks <=49){ 
        return "D";
    }
    else {
        return "E";
    }
}
//console.log(studentGradeGenerator(40)) 

//Challenge 2

//@notice: speedDetector function
//@param: speed - current speed
function speedDetector(speed){
    // Speed Limit accepted
    const speedLimit =70;
    //check if speed is below 70
    if(speed < 70){
        return "Ok";
    }
    //if speed is above 70
    else {
        //get the total ponts by dividing the difference between speed and speed/imit by 5
        let points =(speed-speedLimit)/5;
        //get the floor number points 
       let actualPoints= Math.floor(points);
       //check if points is above 12
       if(actualPoints>12){
        return "License suspended";
       }
       //if points is 12 or below
       else {
        return `Points: ${actualPoints}`;
       }
    }
}
//console.log(speedDetector(130));


//Net Salary Calculator
//This program takes in the basicSalary and benefits and returns the net salary 
//after nssf,nhif and PAYE deductions.


function netSalaryCalculator(basicSalary, benefits = 0) 
//netSalaryCalculator is a function with basicSalary and benefits as parameters,it calculates net salary.

  let grossPay;
  grossPay = basicSalary + benefits;
  console.log(`${grossPay} is the gross pay amount`);
//This if else statement calclates the nssf amount and deducts it 
//returning the remainder
  let nssfAmount;
  if (grossPay * 0.06 > 1080) {
    nssfAmount = 1080;
  } else {
    nssfAmount = grossPay * 0.06;
  }
  let postNssf;
  postNssf = grossPay - nssfAmount;
  console.log(`${nssfAmount} is the nssf amount`);
  //console.log(`${postNssf} is the post nssf amount`);

  let tierOneRemainder;
  let payeTierOne;
  let tierTwoRemainder;
  let payeTierTwo;
  let tierThreeRemainder;
  let payeTierThree;

//calculates paye for the first tax bracket 
  payeTierOne = postNssf * 0.1;
  // console.log(`${payeTierOne} is first tax bracket tax amount`);
  if (payeTierOne <= 2400) {
    tierOneRemainder = postNssf;
  } else {
    tierOneRemainder = postNssf + 2400 - postNssf * 0.1;
  }
  //console.log(`${tierOneRemainder} is the first tax bracket return amount`);

//calculates paye for the second tax bracket
  if (postNssf >= 24001) {
    if (tierOneRemainder - 24000 <= 32333) {
      payeTierTwo = (tierOneRemainder - 24000) * 0.25;
    } else {
      payeTierTwo =
        (tierOneRemainder - 24000 - (tierOneRemainder - 32333)) * 0.25;
    }

    tierTwoRemainder = tierOneRemainder - payeTierTwo;
  }




  