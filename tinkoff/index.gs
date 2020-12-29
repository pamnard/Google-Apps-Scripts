var _ = Underscore.load();

/**
 * Create an Tinkoff API Client 
 * @param {String} token API Token
 * @return {TinkoffApp} return an Tinkoff API Client 
 */
function auth(token) {
    return new TinkoffApp(token);
}

/**
 * Регистрация клиента в sandbox.
 * @return {Object} api result
 */
function sandboxRegister() {
    throw new Error("this method should not call direct, please call auth method.")
}

/**
 * Выставление баланса по валютным позициям.
 * @param {Object} request Request body
 * @param {String} brokerAccountId Номер счета (по умолчанию - Тинькофф) optional
 * @return {Object} api result
 */
function sandboxCurrenciesBalance(request, brokerAccountId) {
    throw new Error("this method should not call direct, please call auth method.")
}

/**
 * Выставление баланса по инструментным позициям.
 * @param {Object} request Request body
 * @param {String} brokerAccountId Номер счета (по умолчанию - Тинькофф) optional
 * @return {Object} api result
 */
function sandboxPositionsBalance(request, brokerAccountId) {
    throw new Error("this method should not call direct, please call auth method.")
}

/**
 * Удаление счета.
 * @param {String} brokerAccountId Номер счета (по умолчанию - Тинькофф) optional
 * @return {Object} api result
 */
function sandboxRemove(brokerAccountId) {
    throw new Error("this method should not call direct, please call auth method.")
}

/**
 * Удаление всех позиций.
 * @param {String} brokerAccountId Номер счета (по умолчанию - Тинькофф) optional
 * @return {Object} api result
 */
function sandboxClear(brokerAccountId) {
    throw new Error("this method should not call direct, please call auth method.")
}
          
/**
 * Получение списка активных заявок.
 * @param {String} brokerAccountId Номер счета (по умолчанию - Тинькофф) optional
 * @return {Object} api result
 */
function orders(brokerAccountId) {
    throw new Error("this method should not call direct, please call auth method.")
}

/**
 * Создание лимитной заявки.
 * @param {Object} request Request body
 * @param {String} figi FIGI инструмента
 * @param {String} brokerAccountId Номер счета (по умолчанию - Тинькофф) optional
 * @return {Object} api result
 */
function ordersLimitOrder(request, figi, brokerAccountId) {
    throw new Error("this method should not call direct, please call auth method.")
}

/**
 * Создание рыночной заявки.
 * @param {Object} request Request body
 * @param {String} figi FIGI инструмента
 * @param {String} brokerAccountId Номер счета (по умолчанию - Тинькофф) optional
 * @return {Object} api result
 */
function ordersMarketOrder(request, figi, brokerAccountId) {
    throw new Error("this method should not call direct, please call auth method.")
}

/**
 * Отмена заявки.
 * @param {String} orderId ID заявки
 * @param {String} brokerAccountId Номер счета (по умолчанию - Тинькофф) optional
 * @return {Object} api result
 */
function ordersCancel(orderId, brokerAccountId) {
    throw new Error("this method should not call direct, please call auth method.")
}

/**
 * Получение портфеля клиента.
 * @param {String} brokerAccountId Номер счета (по умолчанию - Тинькофф) optional
 * @return {Object} api result
 */
function portfolio(brokerAccountId) {
    throw new Error("this method should not call direct, please call auth method.")
}

/**
 * Получение валютных активов клиента.
 * @param {String} brokerAccountId Номер счета (по умолчанию - Тинькофф) optional
 * @return {Object} api result
 */
function portfolioCurrencies(brokerAccountId) {
    throw new Error("this method should not call direct, please call auth method.")
}

/**
 * Получение списка акций.
 * @return {Object} api result
 */
function marketStocks() {
    throw new Error("this method should not call direct, please call auth method.")
}

/**
 * Получение списка облигаций.
 * @return {Object} api result
 */
function marketBonds() {
    throw new Error("this method should not call direct, please call auth method.")
}

/**
 * Получение списка ETF.
 * @return {Object} api result
 */
function marketEtfs() {
    throw new Error("this method should not call direct, please call auth method.")
}

/**
 * Получение списка валютных пар.
 * @return {Object} api result
 */
function marketCurrencies() {
    throw new Error("this method should not call direct, please call auth method.")
}

/**
 * Получение стакана по FIGI.
 * @param {String} figi FIGI
 * @param {Number} depth Глубина стакана [1..20]
 * @return {Object} api result
 */
function marketOrderbook(figi, depth) {
    throw new Error("this method should not call direct, please call auth method.")
}

/**
 * Получение исторических свечей по FIGI.
 * @param {String} figi FIGI
 * @param {String} from Начало временного промежутка
 * @param {String} to Конец временного промежутка
 * @param {String} interval Интервал свечи Available values : 1min, 2min, 3min, 5min, 10min, 15min, 30min, hour, day, week, month
 * @return {Object} api result
 */
function marketCandles(figi, from, to, interval) {
    throw new Error("this method should not call direct, please call auth method.")
}

/**
 * Получение инструмента по FIGI.
 * @param {String} figi FIGI
 * @return {Object} api result
 */
function marketSearchByFigi(figi) {
    throw new Error("this method should not call direct, please call auth method.")
}

/**
 * Получение инструмента по тикеру.
 * @param {String} ticker Тикер инструмента
 * @return {Object} api result
 */
function marketSearchByTicker(ticker) {
    throw new Error("this method should not call direct, please call auth method.")
}

/**
 * Получение списка операций.
 * @param {String} from Начало временного промежутка
 * @param {String} to Конец временного промежутка
 * @param {String} figi Figi инструмента для фильтрации optional
 * @param {String} brokerAccountId Номер счета (по умолчанию - Тинькофф) optional
 * @return {Object} api result
 */
function operations(from, to, figi, brokerAccountId) {
    throw new Error("this method should not call direct, please call auth method.")
}

/**
 * Получение брокерских счетов клиента.
 * @return {Object} api result
 */
function userAccounts() {
    throw new Error("this method should not call direct, please call auth method.")
}

var _this_ = this,
    __bind_ = function (fn, me) {
        return function () {
            return fn.apply(me, arguments);
        };
    };

(function (exports) {
    var TinkoffApp;
    TinkoffApp = (function () {

        TinkoffApp.name = 'TinkoffApp';

        function TinkoffApp(token) {
            this.token = token;

            _this_.sandboxRegister = __bind_(_this_.sandboxRegister, this);
            _this_.sandboxCurrenciesBalance = __bind_(_this_.sandboxCurrenciesBalance, this);
            _this_.sandboxPositionsBalance = __bind_(_this_.sandboxPositionsBalance, this);
            _this_.sandboxRemove = __bind_(_this_.sandboxRemove, this);
            _this_.sandboxClear = __bind_(_this_.sandboxClear, this);
          
            _this_.orders = __bind_(_this_.orders, this);
            _this_.ordersLimitOrder = __bind_(_this_.ordersLimitOrder, this);
            _this_.ordersMarketOrder = __bind_(_this_.ordersMarketOrder, this);
            _this_.ordersCancel = __bind_(_this_.ordersCancel, this);

            _this_.portfolio = __bind_(_this_.portfolio, this);
            _this_.portfolioCurrencies = __bind_(_this_.portfolioCurrencies, this);

            _this_.marketStocks = __bind_(_this_.marketStocks, this);
            _this_.marketBonds = __bind_(_this_.marketBonds, this);
            _this_.marketEtfs = __bind_(_this_.marketEtfs, this);
            _this_.marketCurrencies = __bind_(_this_.marketCurrencies, this);
            _this_.marketOrderbook = __bind_(_this_.marketOrderbook, this);
            _this_.marketCandles = __bind_(_this_.marketCandles, this);
            _this_.marketSearchByFigi = __bind_(_this_.marketSearchByFigi, this);
            _this_.marketSearchByTicker = __bind_(_this_.marketSearchByTicker, this);

            _this_.operations = __bind_(_this_.operations, this);

            _this_.userAccounts = __bind_(_this_.userAccounts, this);
        }
      
        // sandbox
      
        TinkoffApp.prototype.sandboxRegister = function () {
            return new Sandbox(this.token).register();
        };
        TinkoffApp.prototype.sandboxCurrenciesBalance = function (request, brokerAccountId) {
            return new Sandbox(this.token).currenciesBalance(request, brokerAccountId);
        };
        TinkoffApp.prototype.sandboxPositionsBalance = function (request, brokerAccountId) {
            return new Sandbox(this.token).positionsBalance(request, brokerAccountId);
        };   
        TinkoffApp.prototype.sandboxRemove = function (brokerAccountId) {
            return new Sandbox(this.token).remove(brokerAccountId);
        };
        TinkoffApp.prototype.sandboxClear = function (brokerAccountId) {
            return new Sandbox(this.token).clear(brokerAccountId);
        };
      
        // orders
      
        TinkoffApp.prototype.orders = function (brokerAccountId) {
            return new Orders(this.token).list(brokerAccountId);
        };
        TinkoffApp.prototype.ordersLimitOrder = function (request, figi, brokerAccountId) {
            return new Orders(this.token).LimitOrder(request, figi, brokerAccountId);
        }; 
        TinkoffApp.prototype.ordersMarketOrder = function (request, figi, brokerAccountId) {
            return new Orders(this.token).MarketOrder(request, figi, brokerAccountId);
        };   
        TinkoffApp.prototype.ordersCancel = function (orderId, brokerAccountId) {
            return new Orders(this.token).Cancel(orderId, brokerAccountId);
        };
      
        // portfolio
      
        TinkoffApp.prototype.portfolio = function (brokerAccountId) {
            return new Portfolio(this.token).list(brokerAccountId);
        };
        TinkoffApp.prototype.portfolioCurrencies = function (brokerAccountId) {
            return new Portfolio(this.token).Currencies(brokerAccountId);
        }; 
      
        // market
      
        TinkoffApp.prototype.marketStocks = function () {
            return new Market(this.token).Stocks();
        };
        TinkoffApp.prototype.marketBonds = function () {
            return new Market(this.token).Bonds();
        }; 
        TinkoffApp.prototype.marketEtfs = function () {
            return new Market(this.token).ETFs();
        };
        TinkoffApp.prototype.marketCurrencies = function () {
            return new Market(this.token).Currencies();
        }; 
        TinkoffApp.prototype.marketOrderbook = function (figi, depth) {
            return new Market(this.token).Orderbook();
        };
        TinkoffApp.prototype.marketCandles = function (figi, from, to, interval) {
            return new Market(this.token).Candles(figi, from, to, interval);
        }; 
        TinkoffApp.prototype.marketSearchByFigi = function (figi) {
            return new Market(this.token).Search().ByFIGI(figi);
        };
        TinkoffApp.prototype.marketSearchByTicker = function (ticker) {
            return new Market(this.token).Search().ByTicker(ticker);
        };
      
        // operations
      
        TinkoffApp.prototype.operations = function (from, to, figi, brokerAccountId) {
            return new Operations(this.token).list(from, to, figi, brokerAccountId);
        };
      
        // user
      
        TinkoffApp.prototype.userAccounts = function () {
            return new User(this.token).Accounts();
        };
      
        return TinkoffApp;

    })();
    return exports.TinkoffApp = TinkoffApp;
})(this);
