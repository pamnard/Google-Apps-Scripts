function yandexParse() {
  
    const startTime = new Date(),
          randomNumber = getRandomInt(1000000, 9999999),
          reportName = customDateRange('from') + '-' + customDateRange('to') + ' Direct Data';
  
    var data = {
        "method": "get",
        "params": {
            "ReportName": reportName + ' ' + randomNumber,
            "Format": "TSV",
            "ReportType": "SEARCH_QUERY_PERFORMANCE_REPORT",
            "IncludeVAT": "YES",
            "IncludeDiscount": "YES",
            "DateRangeType": "CUSTOM_DATE",
            "SelectionCriteria": {
                "DateFrom": customDateRange('from'),
                "DateTo": customDateRange('to'),
                "Filter": [{
                    "Field": "Cost",
                    "Operator": "GREATER_THAN",
                    "Values": ["0"]
                    }]
            },
            "FieldNames": [
                    "CampaignName",
                    "Query",
                    "Impressions",
                    "Clicks",
                    "AvgCpc",
                    "Cost",
                    "Conversions"
                ],
        }
    };
    var auth_str = 'Bearer ' + config().yandexToken;
    var options = {
        "muteHttpExceptions": true,
        "headers": {
            "Authorization": auth_str,
            "Accept-Language": "ru",
            "processingMode": "offline",
            "skipReportHeader": "true",
            "skipReportSummary": "true"
        },
        "method": "post",
        "contentType": "application/json; charset=utf-8",
        "payload": JSON.stringify(data)
    };

    for (var count = 0; ((count < 30) && (timeCheck(startTime) < 300)); count++) {
        Utilities.sleep(10000);
        var response = UrlFetchApp.fetch('https://api.direct.yandex.com/json/v5/reports', options),
            responseCode = response.getResponseCode();
        // Logger.log(response);
        if ((responseCode == 201) || (responseCode == 202)) {
            var response = UrlFetchApp.fetch('https://api.direct.yandex.com/json/v5/reports', options),
                responseCode = response.getResponseCode();
            Logger.log(responseCode);
            Logger.log('Повторяем запрос');
        } else if (responseCode == 400) {
            Logger.log('Ошибка в запросе или превышен лимит запросов в очереди');
            break;
        } else if (responseCode == 500) {
            Logger.log('Ошибка при формировании отчета на сервере');
            break;
        } else if (responseCode == 502) {
            Logger.log('Время обработки запроса превысило серверное ограничение');
            break;
        } else if (responseCode == 200) {
            Logger.log('Отчёт получен идём дальше');
            break;
        }
    }

    if (responseCode == 200) {
        // Logger.log(response.toString());
        return response;
    } else {
        // Logger.log(String(response));
        return;
    }
}
