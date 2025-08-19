// To check if a year is a leap year

function isALeapYear(year){
    if(year % 400 === 0) {
        return true;
    }
    else if(year % 4 === 0){
        return true;
    }
    else if(year % 100 === 0){
        return false;
    }
    else return false;
}

console.log(isALeapYear(2000));
console.log(isALeapYear(2025));
console.log(isALeapYear(2012));
