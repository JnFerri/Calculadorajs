
    var calculoSoma = (valor1, valor2) => valor1 + valor2 
    var calculoSubtracao = (valor1, valor2) => valor1 - valor2
    var calculoMultiplicacao = (valor1, valor2) => valor1 * valor2
    var calculoDivisao = (valor1, valor2) => valor1 / valor2

    var localExibidor = document.getElementById('exibidor')

    var valor = []
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
   valor.push(Number(numero))
   valor.push('+')
   exibidor += this.defaultValue
   numero = 0
   localExibidor.innerHTML = `<p>${exibidor}</p>`
  })
  valores[1].addEventListener('click', function subtrair(){
    valor.push(Number(numero))
    valor.push('-')
    exibidor += this.defaultValue
    numero = 0
    localExibidor.innerHTML = `<p>${exibidor}</p>`
})
valores[2].addEventListener('click', function multiplicar(){
    valor.push(Number(numero))
    valor.push('*')
    exibidor += this.defaultValue
    numero = 0
    localExibidor.innerHTML = `<p>${exibidor}</p>`
})
valores[3].addEventListener('click', function dividir(){
    valor.push(Number(numero))
    valor.push('/')
    exibidor += this.defaultValue
    numero = 0
    localExibidor.innerHTML = `<p>${exibidor}</p>`
})

function calcular(){
    valor.push(Number(numero))
    if(valor[1] == '+'){
        resultado = calculoSoma (valor[0], valor[2])
    }
    if(valor[1] == '-'){
        resultado = calculoSubtracao (valor[0], valor[2])
    }
    if(valor[1] == '*'){
        resultado = calculoMultiplicacao (valor[0], valor[2])
    }
    if(valor[1] == '/'){
        resultado = calculoDivisao (valor[0], valor[2])
    }
    valor.splice(1)
    valor.slice(2)
    valor[0]= resultado
    exibidor = resultado
    localExibidor.innerHTML = `<p>${exibidor}</p>`
    
   
    
}

function limpar(){
    exibidor = ``
    localExibidor.innerHTML = `<p>${exibidor}</p>`
    
    
}
    