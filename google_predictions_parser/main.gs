function main() {
  var lang = 'en';
  var domain = 'google.com';
  var SS = SpreadsheetApp.openById('*******************************************'),
    sheet = SS.getSheetByName('Data'),
    data = sheet.getDataRange().sort([
      { column: 2, ascending: false },
      { column: 1, ascending: true }
    ]).getValues();
  SpreadsheetApp.flush();
  var start = (sheet.createTextFinder('FALSE').matchEntireCell(true).findNext().getRow() - +1);
  Logger.log(start);
  for (var l = 0; l < langArr.length; l++) {
    try {
      var lettersArr = alphabet(lang);
      for (var r = 0; r < regions.length; r++) {
        try {
          for (var i = start; i < data.length; i++) {
            try {
              var keywordData = data[i];
              var keywordtext = keywordData[0];
              Logger.log(keywordtext);
              if ((keywordData[1] == false) || (keywordData[1] == 'TEMP')) {
                if (keywordtext.split(' ').length < 4) {
                  var serp = queryKeyword(keywordtext, domain);
                  if (serp.length > +0) {
                    sheet.getRange(sheet.getLastRow() + 1, 1, serp.length, 2).setValues(serp);
                    SpreadsheetApp.flush();
                    if ((keywordData[1] == false) && (serp.length > +4)) {
                      if (keywordtext.split(' ').length < 3) {
                        var newKeys = generateKeys(keywordtext, lettersArr);
                        if (newKeys.length > +0) {
                          sheet.getRange(sheet.getLastRow() + 1, 1, newKeys.length, 2).setValues(newKeys);
                          SpreadsheetApp.flush();
                        }
                      }
                      sheet.getRange(i + 1, 2, 1, 1).setValue(true);
                    }
                  }
                }
                sheet.getRange(i + 1, 2, 1, 1).setValue(true);
              }
              sheet.getDataRange().removeDuplicates([1]);
            } catch (e) {
              Logger.log(e);
            }
          }
        } catch (e) {
          Logger.log(e);
        }
      }
    } catch (e) {
      Logger.log(e);
    }
  }
}
