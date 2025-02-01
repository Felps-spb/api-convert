import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 8800;

async function getExchangeRate(base, target) {
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${base}`);
    const data = await response.json();
    return data.rates[target];
}

app.get('/convert', async (req, res) => {
    const { base, target, amount } = req.query;
    const rate = await getExchangeRate(base, target);

    if (!rate) {
        return res.status(400).json({ error: 'Currency not supported' });
    }

    const convertedAmount = amount * rate;
    res.json({
        base_currency: base,
        target_currency: target,
        amount,
        converted_amount: convertedAmount
    });
});

app.listen(port, () => {
    console.log(`Currency converter API listening at http://localhost:${port}`);
});