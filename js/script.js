/**
 *  Funções da calculadora básica
 *  
 *      Soma
 *      Subtração
 *      Multiplicação
 *      Divisão
 *      Porcentagem
 *      Resultado
 */

let dis = document.getElementById('input-display');
let btn = document.getElementById('buttons');
let num = 0;
function placeHolder(){
 dis.placeholder = '0';
}

btn.addEventListener('click', (event) =>{
    const {target} = event;
    //check if the clicked element is a button.
    //if not, exit from the function
    if(!target.matches('button')){
        return;
    } else if(target.classList.contains('math')){
        switch(target.value){
            case '+':
                console.log('operator', target.innerText);
            break;
            case '-':
                console.log('operator', target.innerText);
            break;
            case "/":
                console.log('operator', target.innerText);
            break;
            case '*':
                console.log('operator', target.innerText);
            break;
            case '%':
                console.log('operator', target.innerText);
            break;
            case '=':
                console.log('operator', target.innerText);
            break;
        }
        return;
    } else if(target.classList.contains('decimal')){
        console.log('decimal', target.innerText);
        return;
    } else if(target.classList.contains('number')){
        switch(target.value){
            case '0':
                console.log('number', target.innerText);
            break;
            case '1':
                console.log('number', target.innerText);
            break;
            case "2":
                console.log('number', target.innerText);
            break;
            case '3':
                console.log('number', target.innerText);
            break;
            case '4':
                console.log('number', target.innerText);
            break;
            case '5':
                console.log('number', target.innerText);
            break;
            case '6':
                console.log('number', target.innerText);
            break;
            case "7":
                console.log('number', target.innerText);
            break;
            case '8':
                console.log('number', target.innerText);
            break;
            case '9':
                console.log('number', target.innerText);
            break;
        }
        return;
    } else if(target.classList.contains('ac')){
        console.log('all-clear', target.innerText);
        return;
    }
})


function minus(num){
    num -= num;
    return num;
}
function mult(num){
    num *= num;
    return num;
}
function divide(num){
    num /= num;
    return num;
}
function percent(num){
    num = num/100;
    return num;
}