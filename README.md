# Week 1 Code Challenge

## Challenge 1: Student Grade Generator
- A program that prompts the user to input student marks.
- Input is between 0 to 100.
- The output is :
    A > 79, B > 60 to 79, C > 59 to 49, D > 40 to 49, E > less 40.

## Description
Line 1 declares a function named `studentGradeGenerator` that takes marks as the parameter.
Line 2 uses if statement to test a condition that is,if marks is greator than 79 it returns Grade `A`
Line 5 tests the condition that if marks is greator than 60 and less than or equal 79 it returns Grade `B`
Line 8 tests the condition that if marks is greator than 49 and less than or equal 60 it returns Grade `C`
Line 11 tests condition that if marks is greator than 40 and less than or equal 49 it returns  Grade `D`
Line 14 if marks is 40 and less it returns Grade `E`

## Challenge 2: Speed Detector
A program that takes input as the speed of a car .If the speed is less than 70, it prints “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.
If the driver gets more than 12 points, the function should print: “License suspended”.

## Description
Line 26 declares a `speedDetector` function that takes speed as the parameter.
Speed limit is 70km/hr.
Line 30 checks if speed is less than 70km/hr it prints `Ok`.
Line 36 get the total ponts by dividing the difference between speed and speed/imit by 5.
Line 38 get the floor number points .
Line 40 check if points is above 12.
Line 48 checks if points is 12 or below.

## Challenge 3 : : Net Salary Calculator .
This program takes in the basicSalary and benefits and returns the net salary after nssf,nhif and PAYE deductions.


## Description
Line 59 is a `netSalaryCalculator `function that has basic salary and benefits as the parameter.
Line 65  `if else statement` calclates the nssf amount and deducts it .
Line 86 calculates paye for the first tax bracket .
Line 96 calculates paye for the second tax bracket.



## Author and license.

Copyright (c) [2022] [Stella Margy Oloo]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

