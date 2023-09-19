//---Поле для вводу числа
const num = 10;
//---Поле для вводу числа
let str = num.toString();

let str1 = '';
let str2 = '';
let result = '';

if (num > 19 && num <= 99){
    switch (str[0]){
        case '2': str1 = 'Twenty '; break;
        case '3': str1 = 'Thirty '; break;
        case '4': str1 = 'Fourty '; break;
        case '5': str1 = 'Fifty '; break;
        case '6': str1 = 'Sixty '; break;
        case '7': str1 = 'Seventy '; break;
        case '8': str1 = 'Eighty '; break;
        case '9': str1 = 'Ninty '; break;
    }
    switch (str[1]){
        case '1': str2 = 'one'; break;
        case '2': str2 = 'two'; break;
        case '3': str2 = 'three'; break;
        case '4': str2 = 'four'; break;
        case '5': str2 = 'five'; break;
        case '6': str2 = 'six'; break;
        case '7': str2 = 'seven'; break;
        case '8': str2 = 'eight'; break;
        case '9': str2 = 'nine'; break;
    }
}   else if (num === 100){
        str1 = 'One ';
        str2 = 'hundred';
}   else if (num >= 0 && num <= 9) {
        switch (str[0]){
            case '1': str1 = 'One'; break;
            case '2': str1 = 'Two'; break;
            case '3': str1 = 'Three'; break;
            case '4': str1 = 'Four'; break;
            case '5': str1 = 'Five'; break;
            case '6': str1 = 'Six'; break;
            case '7': str1 = 'Seven'; break;
            case '8': str1 = 'Eight'; break;
            case '9': str1 = 'Nine'; break;
    }  
}   else if (num >= 10 && num <= 19) {
        switch (str){
            case '10': str1 = 'Ten'; break;
            case '11': str1 = 'Eleven'; break;
            case '12': str1 = 'Tvelve'; break;
            case '13': str1 = 'Thirteen'; break;
            case '14': str1 = 'Fourteen'; break;
            case '15': str1 = 'Fifteen'; break;
            case '16': str1 = 'Sixteen'; break;
            case '17': str1 = 'Seventeen'; break;
            case '18': str1 = 'Eighteen'; break;
            case '19': str1 = 'Ninteen'; break;
        }
}          
    else {
        str1 = 'Please enter the number from 1 to 100';
}

result = str1 + str2;
console.log(result);
