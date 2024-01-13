/**
 *  Funções da calculadora básica
 *  
 *      Soma
 *      Subtração
 *      Multiplicação
 *      Divisão
 * 
 */

let dis = document.getElementById('idNum')
let btn = document.querySelector('div#idBtn')


btn.addEventListener("click", operacao)

function operacao(){
    window.alert(btn.value)
}