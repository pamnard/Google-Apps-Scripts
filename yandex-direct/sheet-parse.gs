function dataProcessing(id) {
    Logger.log(id);
  
    var startTime = new Date();
    // -----------------------------------

    var spreadSheet = SpreadsheetApp.openById(id),
        sheets = spreadSheet.getSheets(),
        queriesSheet = sheets[0],
        queriesRange = queriesSheet.getDataRange(),
        queriesNumRows = queriesRange.getNumRows().toFixed(),
        queriesNumColumns = queriesRange.getNumColumns().toFixed(),
        queriesRangeWithData = queriesSheet.getRange(1, 1, queriesNumRows, queriesNumColumns),
        queriesDataValues = queriesRangeWithData.getValues();
    if (sheets.length < 2) {
        var keysSheet = spreadSheet.insertSheet('Keys', 1);
        keysSheet.appendRow(['CampaignName', 'Query', 'Impressions', 'Clicks', 'AvgCpc', 'Cost', 'Conversions', 'Cost/Conversions']);
    }
    var spreadSheet = SpreadsheetApp.openById(id),
        sheets = spreadSheet.getSheets();
    var keysSheet = sheets[1],
        keysRange = keysSheet.getDataRange(),
        keysNumRows = keysRange.getNumRows().toFixed(),
        keysNumColumns = keysRange.getNumColumns().toFixed(),
        keysRangeWithData = keysSheet.getRange(1, 1, keysNumRows, keysNumColumns),
        keysDataValues = keysRangeWithData.getValues();

    var uniqueWords = [];

    for (var i = 1; i < queriesDataValues.length; i++) {
        var string = queriesDataValues[i][1];
        var words_i = String(string).trim().split(' ');
        for (var iq = 0; iq < words_i.length; iq++) {
            if (words_i[iq].toString().length > +1) {
                var uniqueLine = [queriesDataValues[i][0], words_i[iq], 0, 0, 0, 0, 0, 0];
                uniqueWords.push(uniqueLine);
                // Logger.log(uniqueLine);
            }
        }
    }

    uniqueWords = unique(uniqueWords).sort();
    var result = [];
    var maxResult = +keysDataValues.length - +1;
    for (var iw = maxResult;((iw < uniqueWords.length) && (timeCheck(startTime) < 300)); iw++) {
        for (var ie = 0; ie < queriesDataValues.length; ie++) {
            var words_ie = String(queriesDataValues[ie][1]).trim().split(' ');
            for (var ir = 0; ir < words_ie.length; ir++) {
                if ((uniqueWords[iw][1] == words_ie[ir]) && (uniqueWords[iw][0] == queriesDataValues[ie][0])) {
                    uniqueWords[iw][2] = +uniqueWords[iw][2] + +queriesDataValues[ie][2];
                    uniqueWords[iw][3] = +uniqueWords[iw][3] + +queriesDataValues[ie][3];
                    uniqueWords[iw][4] = +uniqueWords[iw][4] + +queriesDataValues[ie][4];
                    uniqueWords[iw][5] = +uniqueWords[iw][5] + +queriesDataValues[ie][5];
                    uniqueWords[iw][6] = +uniqueWords[iw][6] + +queriesDataValues[ie][6];
                }
            }
        }
        if (uniqueWords[iw][4] > +0) {
            uniqueWords[iw][4] = uniqueWords[iw][4] / 1000000;
        }
        if (uniqueWords[iw][5] > +0) {
            uniqueWords[iw][5] = uniqueWords[iw][5] / 1000000;
        }
        if ((uniqueWords[iw][5] > +0) && (uniqueWords[iw][6] > +0)) {
            uniqueWords[iw][7] = (+uniqueWords[iw][5] / +uniqueWords[iw][6]).toFixed(2);
        }
        result.push(uniqueWords[iw]);
    }
    if (result.length > +0) {
        Logger.log('keysDataValues.length - ' + keysDataValues.length);
        Logger.log('result.length - ' + result.length);
        var newDataSize = 'A' + (+keysDataValues.length + +1) + ':H' + (+keysDataValues.length + +result.length),
        newRange = keysSheet.getRange(newDataSize);
        Logger.log(newDataSize);
        newRange.setValues(result);
    } else {
        var ssResult = SpreadsheetApp.openById(id),
            sheet = ssResult.getSheets()[0],
            sheetName = sheet.getName();
        if (sheetName != 'Queries') {
            sheet.setName('Queries');
        }
    }
}
