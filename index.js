const fetch = require('node-fetch');
const express = require('express');
const cheerio = require('cheerio')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/', async(req, res) => {
    await fetch('https://www.cronista.com/MercadosOnline/moneda.html?id=ARSB')
        .then(res => res.text())
        .then(html => {
            const $ = cheerio.load(html)
            const buyValue = parseFloat($('.buy-value').text().replace('$', ''))
            const sellValue = parseFloat($('.sell-value').text().replace('$', ''))
            return res.status(201).json({buyValue, sellValue})
        })
        .catch(err => {
            console.error(err)
            res.status(404).json({error: err})
        })
})

app.listen(3000, () => console.log('Server on port 3000'))
