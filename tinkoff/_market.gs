class Market { // Получение информации по бумагам
    constructor(token) {
        this.token = token;
        this.Search = function (token) {
            return new Search(token)
        };
    }
    Stocks() {
        var data = marketStocks(this.token);
        function marketStocks(token) { // Получение списка акций
            var obj = {
                method: 'GET',
                path: 'market/stocks'
            }
            return tinkoffApi_(obj, token);
        }
        return data;
    }
    Bonds() {
        var data = marketBonds(this.token);
        function marketBonds(token) { // Получение списка облигаций
            var obj = {
                method: 'GET',
                path: 'market/bonds'
            }
            return tinkoffApi(obj, token);
        }
        return data;
    }
    ETFs() {
        var data = marketETFs(this.token);
        function marketETFs(token) { // Получение списка ETF
            var obj = {
                method: 'GET',
                path: 'market/etfs'
            }
            return tinkoffApi_(obj, token);
        }
        return data;
    }
    Currencies() {
        var data = marketCurrencies(this.token);
        function marketCurrencies(token) { // Получение списка валютных пар
            var obj = {
                method: 'GET',
                path: 'market/currencies'
            }
            return tinkoffApi_(obj, token);
        }
        return data;
    }
    Orderbook(figi, depth) {
        var data = marketOrderbook(this.token, figi, depth);
        function marketOrderbook(token, figi, depth) { // Получение исторических стакана по FIGI
            var obj = {
                parametres: {
                    figi: figi,
                    depth: depth,
                },
                method: 'GET',
                path: 'market/orderbook'
            }
            return tinkoffApi_(obj, token);
        }
        return data;
    }
    Candles(figi, from, to, interval) {
        var data = marketCandles(this.token, figi, from, to, interval);
        function marketCandles(token, figi, from, to, interval) { // Получение исторических свечей по FIGI
            var obj = {
                parametres: {
                    figi: figi,
                    from: from, // 2019-08-19T18:38:33.131642+03:00
                    to: to, // 2019-08-19T18:38:33.131642+03:00
                    interval: interval, // Available values : 1min, 2min, 3min, 5min, 10min, 15min, 30min, hour, day, week, month
                },
                method: 'GET',
                path: 'market/candles'
            }
            return tinkoffApi_(obj, token);
        }
        return data;
    }
}
