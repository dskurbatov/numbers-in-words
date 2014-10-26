var ones = ["","one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
var teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
var tens = ["", "", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];

var numberInWords = function (number) {    
    if (number == 0){
        return "zero";        
    } else {
        return countingTrillions(number);
    };
}

function countingOnes(number){
    if (number > 0){
        return ones[number];
    } else {
        return numberInWords(number);
    };
}

function countingTeens(number){
    if(number > 9){
        return teens[number - 10];
    } else {
        return ones[number];
    };
};

function countingTens(number){
    if(number > 19){
        return tens[parseInt(number / 10)] + (number % 10 == 0 ? "" : " " + countingTeens(number % 10));
    } else {
        return countingTeens(number);
    };
};

function countingHundreds(number){
    if(number > 99){
        return ones[parseInt(number /100)] + " hundred" + (number % 100 == 0 ? "" : " " + countingTens(number % 100));
    } else {
        return countingTens(number);
    };
}

function countingThousands(number){
    if(number > 999){
        return countingHundreds(parseInt(number / 1000)) + " thousand" + (number % 1000 == 0 ? "" : " " + countingHundreds(number % 1000));
    } else {
        return countingHundreds(number);
    };
}

function countingMillions(number){
    if(number > 999999){
        return countingHundreds(parseInt(number / 1000000)) + " million" + (number % 1000000 == 0 ? "" : " " + countingThousands(number % 1000000));
    } else {
        return countingThousands(number);
    };
}

function countingTrillions(number){
    if(number > 999999999){
        return countingHundreds(parseInt(number / 1000000000)) + " trillion" + (number % 1000000000 == 0 ? "" : " " + countingMillions(number % 1000000000));
    } else {
        return countingMillions(number);
    };
}