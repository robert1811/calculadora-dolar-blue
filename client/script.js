let buyValue = 0;
let sellValue = 0;

fetch('http://localhost:3000')
    .then(res => res.json())
    .then(data => {
        buyValue = data.buyValue;
        sellValue = data.sellValue
    })
    .catch(err => console.error(err))


const priceInPesos = document.getElementById('price-in-pesos')
const sellPriceContainer = document.getElementById('sell-price')
const buyPriceContainer = document.getElementById('buy-price')

priceInPesos.addEventListener('input', e => {
    const pesos = parseFloat(e.target.value)
    if(pesos.length == 0 || isNaN(pesos / sellValue)) {
        sellPriceContainer.innerText = '-'
        buyPriceContainer.innerText = '-'
    }
    else {
        sellPriceContainer.innerText = `USD ${(pesos / sellValue).toFixed(2)}`
        buyPriceContainer.innerText = `USD ${(pesos / buyValue).toFixed(2)}`
    }
})