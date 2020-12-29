class Operations { // Получении информации по операциям
    constructor(token) {
        this.token = token;
    }
    list(from, to, figi, brokerAccountId) {
        var data = userAccounts(this.token, from, to, figi, brokerAccountId);
        function operations(token, from, to, figi, brokerAccountId) { // Получение списка операций
            var obj = {
                parametres: {
                    from: from,
                    to: to,
                    figi: figi
                },
                method: 'GET',
                path: 'operations'
            }
            if (!!brokerAccountId) {
                obj.parametres.brokerAccountId = brokerAccountId;
            }
            return tinkoffApi_(obj, token);
        }
        return data;
    }
}
