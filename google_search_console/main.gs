function console() {
  var SS = SpreadsheetApp.openById('*******************************************');
  var sheet = SS.getSheetByName('main');
  var site = 'https://fbs.com';
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
