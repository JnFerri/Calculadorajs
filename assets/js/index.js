
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

 
    valores[0].addEventListener('click', function somar(){
        if(valoresObjeto.valor1 ===0){
        valoresObjeto.valor1 = Number(numero)}
        else if(valoresObjeto.valor1 > 0) {
            
            valoresObjeto.operador = '+'
            valoresObjeto.valor2 = 0
            
                if(valoresObjeto.operador == '+'){
                    valoresObjeto.valor2 = 0
                    valoresObjeto.valor2 = Number(numero)
                    var resultado = calculoSoma (valoresObjeto.valor1, valoresObjeto.valor2)
                    
                valoresObjeto.valor2 = 0
                }
                if(valoresObjeto.operador== '-'){
                    valoresObjeto.valor2 = 0
                    valoresObjeto.valor2 = Number(numero)
                    var resultado = calculoSubtracao (valoresObjeto.valor1, valoresObjeto.valor2)
                valoresObjeto.valor2 = 0
                }
                if(valoresObjeto.operador == '*'){
                    valoresObjeto.valor2 = 0
                    valoresObjeto.valor2 = Number(numero)
                   var resultado = calculoMultiplicacao (valoresObjeto.valor1, valoresObjeto.valor2)
                valoresObjeto.valor2 = 0
                }
                if(valoresObjeto.operador == '/'){
                    valoresObjeto.valor2 = 0
                    valoresObjeto.valor2 = Number(numero)
                    var resultado = calculoDivisao (valoresObjeto.valor1, valoresObjeto.valor2)
                valoresObjeto.valor2 = 0
                }
                valoresObjeto.valor1 = resultado
                valoresObjeto.operador = ''
            }
        valoresObjeto.operador = '+'
        exibidor += this.defaultValue
        numero = 0
        localExibidor.innerHTML = `<p>${exibidor}</p>`
        console.log(valoresObjeto.valor1)
       })
       valores[1].addEventListener('click', function subtrair(){
        if(valoresObjeto.valor1 ===0){
            valoresObjeto.valor1 = Number(numero)}
            else if(valoresObjeto.valor1 > 0) {
                
                valoresObjeto.operador = '-'
                valoresObjeto.valor2 = 0
                
                if(valoresObjeto.operador == '+'){
                    valoresObjeto.valor2 = 0
                    valoresObjeto.valor2 = Number(numero)
                    var resultado = calculoSoma (valoresObjeto.valor1, valoresObjeto.valor2)
                valoresObjeto.valor2 = 0
                }
                if(valoresObjeto.operador== '-'){
                    valoresObjeto.valor2 = 0
                    valoresObjeto.valor2 = Number(numero)
                    var resultado = calculoSubtracao (valoresObjeto.valor1, valoresObjeto.valor2)
                    
                valoresObjeto.valor2 = 0
                }
                if(valoresObjeto.operador == '*'){
                    valoresObjeto.valor2 = 0
                    valoresObjeto.valor2 = Number(numero)
                   var resultado = calculoMultiplicacao (valoresObjeto.valor1, valoresObjeto.valor2)
                   
                valoresObjeto.valor2 = 0
                }
                if(valoresObjeto.operador == '/'){
                    valoresObjeto.valor2 = 0
                    valoresObjeto.valor2 = Number(numero)
                    var resultado = calculoDivisao (valoresObjeto.valor1, valoresObjeto.valor2)
                    
                valoresObjeto.valor2 = 0
                }
                valoresObjeto.valor1 = resultado
                valoresObjeto.operador = ''
            }

         valoresObjeto.operador = '-'
         exibidor += this.defaultValue
         numero = 0
         localExibidor.innerHTML = `<p>${exibidor}</p>`
     })
     valores[2].addEventListener('click', function multiplicar(){
        if(valoresObjeto.valor1 ===0){
            valoresObjeto.valor1 = Number(numero)}
            else if(valoresObjeto.valor1 > 0) {
            
                valoresObjeto.operador = '*'
                valoresObjeto.valor2 = 0
                if(valoresObjeto.operador == '+'){
                    valoresObjeto.valor2 = 0
                    valoresObjeto.valor2 = Number(numero)
                    var resultado = calculoSoma (valoresObjeto.valor1, valoresObjeto.valor2)
                    
                valoresObjeto.valor2 = 0
                }
                if(valoresObjeto.operador== '-'){
                    valoresObjeto.valor2 = 0
                    valoresObjeto.valor2 = Number(numero)
                    var resultado = calculoSubtracao (valoresObjeto.valor1, valoresObjeto.valor2)
                   
                valoresObjeto.valor2 = 0
                }
                if(valoresObjeto.operador == '*'){
                    valoresObjeto.valor2 = 0
                    valoresObjeto.valor2 = Number(numero)
                   var resultado = calculoMultiplicacao (valoresObjeto.valor1, valoresObjeto.valor2)
                   
                valoresObjeto.valor2 = 0
                }
                if(valoresObjeto.operador == '/'){
                    valoresObjeto.valor2 = 0
                    valoresObjeto.valor2 = Number(numero)
                    var resultado = calculoDivisao (valoresObjeto.valor1, valoresObjeto.valor2)
                   
                valoresObjeto.valor2 = 0
                }
                valoresObjeto.valor1 = resultado
                valoresObjeto.operador = ''
            }

         valoresObjeto.operador = '*'
         exibidor += this.defaultValue
         numero = 0
         localExibidor.innerHTML = `<p>${exibidor}</p>`
     })
     valores[3].addEventListener('click', function dividir(){
        if(valoresObjeto.valor1 ===0){
            valoresObjeto.valor1 = Number(numero)}
            else if(valoresObjeto.valor1 > 0){
                
                valoresObjeto.operador = '/'
                valoresObjeto.valor2 = 0
                if(valoresObjeto.operador == '+'){
                    valoresObjeto.valor2 = Number(numero)
                    var resultado = calculoSoma (valoresObjeto.valor1, valoresObjeto.valor2)
                    
                valoresObjeto.valor2 = 0
                }
                if(valoresObjeto.operador== '-'){
                    
                    valoresObjeto.valor2 = Number(numero)
                    var resultado = calculoSubtracao (valoresObjeto.valor1, valoresObjeto.valor2)
                    
                valoresObjeto.valor2 = 0
                }
                if(valoresObjeto.operador == '*'){
                    
                    valoresObjeto.valor2 = Number(numero)
                   var resultado = calculoMultiplicacao (valoresObjeto.valor1, valoresObjeto.valor2)
                   
                valoresObjeto.valor2 = 0
                }
                if(valoresObjeto.operador == '/'){
                    
                    valoresObjeto.valor2 = Number(numero)
                    var resultado = calculoDivisao (valoresObjeto.valor1, valoresObjeto.valor2)
                    
                valoresObjeto.valor2 = 0
                }
                valoresObjeto.operador = ''
                valoresObjeto.valor1 = resultado
               
            }

        
         exibidor += this.defaultValue
         numero = 0
         localExibidor.innerHTML = `<p>${exibidor}</p>`
         
     })

        

function calcular(){
    
    valoresObjeto.valor2 = Number(numero)
    console.log(valoresObjeto)
    if(valoresObjeto.operador == '+'){
        var resultado = calculoSoma (valoresObjeto.valor1, valoresObjeto.valor2)
    }
    if(valoresObjeto.operador== '-'){
        var resultado = calculoSubtracao (valoresObjeto.valor1, valoresObjeto.valor2)
    }
    if(valoresObjeto.operador == '*'){
       var resultado = calculoMultiplicacao (valoresObjeto.valor1, valoresObjeto.valor2)
    }
    if(valoresObjeto.operador == '/'){
        var resultado = calculoDivisao (valoresObjeto.valor1, valoresObjeto.valor2)
    }
    
    exibidor = resultado
    localExibidor.innerHTML = `<p>${exibidor}</p>`
    
    valoresObjeto.valor1 = resultado
   valoresObjeto.valor2 = 0
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
    