/**
 *  Funções da calculadora básica
 *  
 *      Soma
 *      Subtração
 *      Multiplicação
 *      Divisão
 *      Resultado
 */

let num = document.querySelector('#idNum')
let btn = document.getElementsByClassName('.btn')
let calc = []

function operador(){
    if(num.value == 0){
        alert('Insire um número para começar')
    } else {
        calc.push(Number(num.value))
        let n = calc[0]
        for(let pos in calc){
            n = calc[pos]
        }
        let op = new btn()
        let opA = op.value
    }
}