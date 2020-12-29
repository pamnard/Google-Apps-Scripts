class Portfolio { // Операции с портфелем пользователя
    constructor(token) {
        this.token = token;
    }
    list(brokerAccountId) {
        var data = portfolio(this.token, brokerAccountId);
        function portfolio(token, brokerAccountId) { // Получение портфеля клиента
            var obj = {
                method: 'GET',
                path: 'portfolio'
            }
            if (!!brokerAccountId) {
                obj.parametres.brokerAccountId = brokerAccountId;
            }
            return tinkoffApi_(obj, token);
        }
        return data;
    }
    Currencies(brokerAccountId) {
        var data = portfolioCurrencies(this.token, brokerAccountId);
        function portfolioCurrencies(token, brokerAccountId) { // Получение валютных активов клиента
            var obj = {
                method: 'GET',
                path: 'portfolio/currencies'
            }
            if (!!brokerAccountId) {
                obj.parametres.brokerAccountId = brokerAccountId;
            }
            return tinkoffApi_(obj, token);
        }
        return data;
    }
}
