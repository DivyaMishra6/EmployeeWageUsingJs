// UC2
const Is_FullTime=1;
const Is_PartTime=2;
const Is_PartTimeHrs=4;
const Is_FullTimeHrs=8;
const PerHrWage=20;
let ch= (Math.floor(Math.random()*10)%3);
let empHrs=0;
switch (ch)
{
    case Is_FullTime:
        empHrs=Is_FullTimeHrs;
        console.log("Employee is present full time");
        break;
     case Is_PartTime:
        empHrs=Is_PartTimeHrs;
        console.log("Emp is present part time");
        break;
     default:
        empHrs=0;
         console.log("Emp is absent");
         break;
}
let emp_Wage = empHrs * PerHrWage;
console.log("Emp Wage is :" +emp_Wage);
