import  { formatCurrency } from '../scripts/utils/money.js';

console.log('Test Suite : formatCurrency()')

if (formatCurrency(2000.5) === '20.01'){
    console.log('Passed');
}
else{
    console.log('Failed');
}

if (formatCurrency(0) === '0.00' ){
    console.log('Passed');
}
else{
    console.log('Failed');
}


