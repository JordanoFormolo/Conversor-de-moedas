//cotação de moedas do duia
const USD = 4.87
const EUR = 5.32
const GBP = 6.02

//obtendo os elementos do formulario
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector('main footer')
const description = document.getElementById('description')
const result = document.getElementById('result')


//manipulando o input para receber so numeros               
amount.addEventListener("input", () => {
 // const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, '')
})


//capturando evento de submit(enviar) no fomrulario
form.onsubmit = (event) => {
    event.preventDefault()
    
    switch(currency.value){ //enquando const, curreny  for vdd
      case "USD":
        convertcurrency(amount.value, USD, 'US$')
        break
        case "EUR":
          convertcurrency(amount.value, EUR, '€')
          break
          case 'GBP':
            convertcurrency(amount.value, GBP, '£')
            break

    }

}


//função para converter a moeda
function convertcurrency(amount, price, symbol){
    try {
      description.textContent = `${symbol} 1 =  ${formatCurrencyBRL(price)}` // altera o simbolo em cima do final      
        //calcula o total
        let total = amount * price 

        if(isNaN(total)){
          return alert('Digite direito')
        }
        
        
        //formatar um valor total
        total = formatCurrencyBRL(total).replace("R$", "")
        
        //resultado total
        result.textContent = `${total} REAIS`
    
      //aplica a classe que exibe o footer
      footer.classList.add('show-result')
    } catch (error) {
      console.log(erro)

      //remove a classe do footer
      footer.classList.remove('show-result')
      alert('nao foi possivel, tente novamente mais tarde')
    }
}


//formata a moeda em real BRasileiro
function formatCurrencyBRL(value){
  //converte para numero para utilizar o tolocalestring para formatar no padrao BRL
  return Number(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
   })

}


