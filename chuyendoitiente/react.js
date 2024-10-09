const rates = {
    USD: 23000,
    VND: 0.000043
};

function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    const convertedAmount = (amount * rates[toCurrency] / rates[fromCurrency]).toFixed(2);
    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
}