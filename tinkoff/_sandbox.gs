class Sandbox { // Операция в sandbox
    constructor(token) {
        this.token = token;
    }
    register() {
        var data = sandboxRegister();
        function sandboxRegister() { // Регистрация клиента в sandbox
            var obj = {
                data: {
                    brokerAccountType: "Tinkoff"
                },
                method: 'POST',
                path: 'sandbox/register'
            }
            return tinkoffApi_(obj, token);
        }
        return data;
    }
    currenciesBalance(request, brokerAccountId) {
        var data = sandboxCurrenciesBalance(this.token, request, brokerAccountId);
        function sandboxCurrenciesBalance(token, request, brokerAccountId) { // Выставление баланса по валютным позициям
            var obj = {
                data: request,
                method: 'POST',
                path: 'sandbox/currencies/balance'
            }
            if (!!brokerAccountId) {
                obj.parametres.brokerAccountId = brokerAccountId;
            }
            return tinkoffApi_(obj, token);
        }
        return data;
    }
    positionsBalance(request, brokerAccountId) {
        var data = sandboxPositionsBalance(this.token, request, brokerAccountId);
        function sandboxPositionsBalance(token, request, brokerAccountId) { // Выставление баланса по инструментным позициям
            var obj = {
                data: request,
                method: 'POST',
                path: 'sandbox/positions/balance'
            }
            if (!!brokerAccountId) {
                obj.parametres.brokerAccountId = brokerAccountId;
            }
            return tinkoffApi_(obj, token);
        }
        return data;
    }
    remove(brokerAccountId) {
        var data = sandboxRemove(this.token, brokerAccountId);
        function sandboxRemove(token, brokerAccountId) { // Удаление счета клиента
            var obj = {
                method: 'POST',
                path: 'sandbox/remove'
            }
            if (!!brokerAccountId) {
                obj.parametres.brokerAccountId = brokerAccountId;
            }
            return tinkoffApi_(obj, token);
        }
        return data;
    }
    clear(brokerAccountId) {
        var data = sandboxClear(this.token, brokerAccountId);
        function sandboxClear(token, brokerAccountId) { // Удаление всех позиций
            var obj = {
                method: 'POST',
                path: 'sandbox/clear'
            }
            if (!!brokerAccountId) {
                obj.parametres.brokerAccountId = brokerAccountId;
            }
            return tinkoffApi_(obj, token);
        }
        return data;
    }
}
