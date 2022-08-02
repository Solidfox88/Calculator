let a = ''; //first number
let b = ''; //second number
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];
const action = ['-', '+', 'x', '/', '%'];

//screen
const out = document.querySelector('.calculator-screen p');

function clearAll() {
    a = ''; // firs number and result
    b = '';// second number
    sign = ''; // sign
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;
// 
document.querySelector('.calculator-buttons').onclick = (event) => {
    if (!event.target.classList.contains('calc-btn')) return;
    if (event.target.classList.contains('ac')) return;

    out.textContent = '';
    //take pressed button
    const key = event.target.textContent;

    //if pressed key 0-9 or .
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            out.textContent = a;
        }
        else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        } else {
            b += key;
            out.textContent = b;
        }
    }
    // if pressed key + - * /
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        return;
    }
    // pressed =
    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "x":
                a = a * b;
                break;
            case "%":
                a = a / 20 * 100;
                break;
            case "/":
                if (b === '0') {
                    out.textContent = 'Error';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / +b;
                break;
        }
        finish = true;
        out.textContent = a;

    }
}