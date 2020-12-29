TinkoffApp
========

Обёртка Tinkoff API на Google Apps Script

## Ключ библиотеки

```
M5z_atgWuk4VhZivu6JDRFQ2aCuwATz2_
```

## Версии

https://script.google.com/macros/library/versions/d/M5z_atgWuk4VhZivu6JDRFQ2aCuwATz2_

## Как использовать

### Кратко

1. Подключите библиотеку `TinkoffApp` к своему проекту - [Инструкция](https://developers.google.com/apps-script/guide_libraries?hl=ru)
2. Получите API токен в [кабинете Тинькофф Инвестиции](https://www.tinkoff.ru/invest/)
3. Пользуйтесь
```javascript
function myFunction() {

  // Настройка
  const token =  '1234567890'; // укажите здесь свой токен

  // Создаём API
  var tAPI = TinkoffApp.auth(token); 
 
  // Используем API
  var my_balance = tAPI.portfolioCurrencies(); // например, получаем валютные активы
}
```

### Чуть подробнее

Все методы аналогичны указанным в официальной документации - https://tinkoffcreditsystems.github.io/invest-openapi/swagger-ui/

Названия методов в библиотеке сформированы из пути обращения, с капитализацией первого символа идушего за спецсимволами, и удалением спецсимволов:
```
/market/search/by-ticker -> .marketSearchByTicker()
```

#### Методы

sandbox

- .sandboxRegister() - Регистрация клиента в sandbox
- .sandboxCurrenciesBalance(request, brokerAccountId) - Выставление баланса по валютным позициям
- .sandboxPositionsBalance(request, brokerAccountId) - Выставление баланса по инструментным позициям
- .sandboxRemove(brokerAccountId) - Удаление счета
- .sandboxClear(brokerAccountId) - Удаление всех позиций
          
orders

- .orders(brokerAccountId) - Получение списка активных заявок
- .ordersLimitOrder(request, figi, brokerAccountId) - Создание лимитной заявки
- .ordersMarketOrder(request, figi, brokerAccountId) - Создание рыночной заявки
- .ordersCancel(orderId, brokerAccountId) - Отмена заявки

portfolio

- .portfolio(brokerAccountId) - Получение портфеля клиента
- .portfolioCurrencies(brokerAccountId) - Получение валютных активов клиента

market

- .marketStocks() - Получение списка акций
- .marketBonds() - Получение списка облигаций
- .marketEtfs() - Получение списка ETF
- .marketCurrencies() - Получение списка валютных пар
- .marketOrderbook(figi, depth) - Получение стакана по FIGI
- .marketCandles(figi, from, to, interval) - Получение исторических свечей по FIGI
- .marketSearchByFigi(figi) - Получение инструмента по FIGI
- .marketSearchByTicker(ticker) - Получение инструмента по тикеру

operations

- .operations(from, to, figi, brokerAccountId) - Получение списка операций

user

- .userAccounts() - Получение брокерских счетов клиента
