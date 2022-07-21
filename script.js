const mainButton = document.querySelector('button');
const resultDiv = document.querySelector(".btc-price")

const getPrice = async () => {
    try {
        const get = await fetch('https://api.coinbase.com/v2/prices/BTC-USD/buy', {
            method: "GET",
            authorization: "Bearer abd90df5f27a7b170cd775abf89d632b350b7c1c9d53e08b340cd9832ce52c2c",
        });
        res = await get.json();

        //console.log(res.data)
        return res.data;
    } catch {
        return "The serrvice is not working"
    }
}

getPrice()
const pricePopulate = async () => {
    let res = await getPrice();
    console.log(res)
    resultDiv.textContent = `${res.amount}`;
    mainButton.classList.add("toPurple")
    mainButton.textContent = "Refresh BTC price"
}
mainButton.addEventListener("click", pricePopulate)