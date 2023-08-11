/**
 * TIP CALCULATOR
 */

function moneyFormat(value) {
    value = Math.ceil(value * 100) / 100;
    value = value.toFixed(2);
    return '$ ' + value;
}

function splitFormat(value) {
    if(value == 1) {
        return value + ' Person';
    } 
    else {
        return value + ' People';
    }
}

function update() {
    let bill = Number(document.getElementById('yourBill').value);
    let tipPercent = document.getElementById('tipInput').value;
    let split = document.getElementById('splitInput').value;

    let tipValue = bill * (tipPercent / 100);
    let billTotal = bill + tipValue;
    let billEach = billTotal / split;

    document.getElementById('tipPercent').innerHTML = tipPercent + ' %';
    document.getElementById('tipValue').innerHTML = moneyFormat(tipValue);
    document.getElementById('totalWithTip').innerHTML = moneyFormat(billTotal);
    document.getElementById('splitValue').innerHTML = splitFormat(split);
    document.getElementById('billEach').innerHTML = moneyFormat(billTotal / split);
}