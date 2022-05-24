
    var calculoSoma = (valor1, valor2) => valor1 + valor2 
    var calculoSubtracao = (valor1, valor2) => valor1 - valor2
    var calculoMultiplicacao = (valor1, valor2) => valor1 * valor2
    var calculoDivisao = (valor1, valor2) => valor1 / valor2

    var localExibidor = document.getElementById('exibidor')

    var valoresObjeto = {
        valor1 : 0,
        valor2 : 0,
        operador : ''
    }

    var numero = 0

    var exibidor = ``

    var calculo = 0
    var valores = document.querySelectorAll('.botao__valor')


    for(i = 4; i <valores.length; i++){
    valores[i].addEventListener('click', function adicionarCalculo(){
        numero += this.defaultValue
        exibidor += this.defaultValue
        localExibidor.innerHTML = `<p>${exibidor}</p>`
    })}
    
 for(i = 0; i < 4;i++){
    valores[i].addEventListener('click', function somar(){
        if(valoresObjeto.valor1 ==0){
            valoresObjeto.valor1 = Number(numero)
            valoresObjeto.operador = this.defaultValue
            numero = 0}
     else if(valoresObjeto.valor1 > 0) {
        
            if(valoresObjeto.operador == '+'){
            valoresObjeto.valor1= calculoSoma(valoresObjeto.valor1, Number(numero))
            valoresObjeto.operador = '+'
            } 
             else if(valoresObjeto.operador == '-'){
                valoresObjeto.valor1= calculoSubtracao(valoresObjeto.valor1, Number(numero))
                valoresObjeto.operador = '-'
            }
             else if(valoresObjeto.operador == '*'){
                valoresObjeto.valor1= calculoMultiplicacao(valoresObjeto.valor1, Number(numero))
                valoresObjeto.operador = '*'
            }
             else if(valoresObjeto.operador =='/'){
                valoresObjeto.valor1= calculoDivisao(valoresObjeto.valor1, Number(numero))
                valoresObjeto.operador = '/'
            }}
            valoresObjeto.operador = this.defaultValue
         exibidor += this.defaultValue
         numero = 0
         localExibidor.innerHTML = `<p>${exibidor}</p>`
        
     })}


function calcular(){
    
    if(valoresObjeto.operador == '+'){
        var resultado = calculoSoma (valoresObjeto.valor1, Number(numero))
    }
    else if(valoresObjeto.operador == '-'){
        var resultado = calculoSubtracao (valoresObjeto.valor1, Number(numero))
    }
    else if(valoresObjeto.operador =='*'){
       var resultado = calculoMultiplicacao (valoresObjeto.valor1, Number(numero))
    }
    else if(valoresObjeto.operador =='/'){
        var resultado = calculoDivisao (valoresObjeto.valor1, Number(numero))
    }
    
    exibidor = resultado
    localExibidor.innerHTML = `<p>${exibidor}</p>`
    
    valoresObjeto.valor1 = resultado
   if(numero === 0){
    localExibidor.innerHTML = '<p>Coloque um valor !!</p>'
}
    numero = 0
}

function limpar(){
    exibidor = ``
    localExibidor.innerHTML = `<p>${exibidor}</p>`
    numero = 0
    valoresObjeto.valor1 = 0
    valoresObjeto.valor2 = 0
    valoresObjeto.operador = ''
    
}
    