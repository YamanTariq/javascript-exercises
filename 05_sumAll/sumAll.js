const sumAll = function(num1,num2) {

    if(num2 < num1) {
        var low = num2;
        var high = num1;
    } else {
        var low = num1;
        var high = num2;
    }

    let sum = 0;
    for(let i = low; i <= high; i++){
        sum+= i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
