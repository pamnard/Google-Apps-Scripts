function console() {
  var SS = SpreadsheetApp.openById('********************************'); // сюда выгружаем данные
  var sheet = SS.getSheetByName('main');
  var site = 'https://site.com'; // сюда вписать свой домен
  for (var i = 1; i < 500; i++) {
    Logger.log(i);
    var shift = +i + +1;
    var startDate = customDateRange(shift);
    var endDate = customDateRange(i);
    try {
      parse_SC(encodeURIComponent(site), startDate, endDate, sheet);
      sheet.getDataRange().removeDuplicates();
    } catch (e) {
      Logger.log(e);
    }
  }
}
