

const inputOne = document.getElementById('op1')

const inputTwo = document.getElementById('operador')

const inputThree = document.getElementById('op2')

const inputButton = document.getElementById('button')

const resultadoCuenta = document.getElementById('resultado')



inputButton.addEventListener('click', calcular)

function calcular(){
    const operador = inputTwo.value
    const op1 = parseFloat(inputOne.value)
    const op2 = parseFloat(inputThree.value)
    if((operador == '+' || operador == '-' || operador == '*' || operador == '/' )&& !isNaN(op1) && !isNaN(op2)){
        let result
        switch(operador){
            case '+':
                result = op1 + op2
                break;
            case '-':
                result = op1 - op2
                break;
            case '/':
                result = op1 / op2
                break;
            case '*':
                result = op1 * op2
                break;
        }
        resultadoCuenta.innerText = '= ' + result

    }else{
        resultadoCuenta.innerText = 'Operacion No Valida'
    }
}