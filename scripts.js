const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

async function convertValues  () {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
  const currencyValueConverted = document.querySelector(".currency-value");

  // console.log(currencySelect.value)
  const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL,ARS-BRL").then(response => response.json())

  const dolarToday = data.USDBRL.high
  const euroToday = data.EURBRL.high
  const libraToday = data.GBPBRL.high
  const bitcoinToday = data.BTCBRL.high
  const pesoToday = data.ARSBRL.high

  

  if (currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-us", {
      style: "currency",
      currency: "USD"
    }).format(inputCurrencyValue / dolarToday)
  }

  if (currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputCurrencyValue / euroToday)
  }

  if (currencySelect.value == "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BTC"
    }).format(inputCurrencyValue / bitcoinToday)
  }

  if (currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "GBP"
    }).format(inputCurrencyValue / libraToday)
  }

  if (currencySelect.value == "peso") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS"
    }).format(inputCurrencyValue / pesoToday)
  }


  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL"
  }).format(inputCurrencyValue)
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name")
  const currencyImage = document.querySelector(".currency-img")

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar Americano"
    currencyImage.src = "./img/dollar.png"
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./img/euro.png"
  }

  if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin"
    currencyImage.src = "./img/bitcoin.png"
  }

  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra"
    currencyImage.src ="./img/libra.png"
  }

  if (currencySelect.value == "peso") {
    currencyName.innerHTML = "Peso"
    currencyImage.src ="./img/peso.png"
  }
  convertValues()

}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

