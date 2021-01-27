function parse_SC(domain, startDate, endDate, sheet) {
  var url = `https://www.googleapis.com/webmasters/v3/sites/${domain}/searchAnalytics/query?key=***********************************`; // Сюда вписать свой API key
  var request_body = {
    startDate: startDate,
    endDate: endDate,
    searchType: 'web',
    rowLimit: 25000,
    dimensions: [
      'query'
    ]
  }

  var options = {
    headers: {
      Authorization: 'Bearer ' + ScriptApp.getOAuthToken()
    },
    method: 'POST',
    contentType: 'application/json',
    muteHttpExceptions: true,
    payload: JSON.stringify(request_body)
  };
  var response = UrlFetchApp.fetch(url, options);
  Logger.log(response);
  var json = JSON.parse(response.getContentText());
  var arr = json.rows;
  if (arr.length > +0) {
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
      newarr.push([
        arr[i].keys[0]
      ]);
    }
    sheet.getRange(sheet.getLastRow() + 1, 1, newarr.length, newarr[0].length).setValues(newarr);
    return true
  } else {
    return false
  }
}

function customDateRange(shift) {
  var MILLIS_PER_DAY = 1000 * 60 * 60 * 24,
    now = new Date(),
    toDate = new Date(now.getTime() - (shift * MILLIS_PER_DAY)),
    toformatDate = Utilities.formatDate(toDate, "GMT", 'YYYY-MM-dd');
  return toformatDate;
}
