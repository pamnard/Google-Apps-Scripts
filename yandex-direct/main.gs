function main() {

    Logger.clear();

    const dateFrom = customDateRange('from'),
        dateTo = customDateRange('to'),
        dateName = dateFrom + '-' + dateTo,
        reportName = dateName + ' Direct Data';

    Logger.log(`reportName - ${dateTo}`);

    var reports_folders = DriveApp.getFoldersByName('direct-reports');
    while (reports_folders.hasNext()) {
        var reports_folder = reports_folders.next();
        var test_files = reports_folder.getFilesByName(reportName);
        if (test_files.hasNext() == false) {
            Logger.log('Отчет не сформирован - формируем');
            var tsvFileData = yandexParse();
            if ((typeof tsvFileData != 'undefined') && (tsvFileData != undefined)) {
                var arr = tsvToArr(tsvFileData),
                    spreadSheet = SpreadsheetApp.create(reportName),
                    sheet = spreadSheet.getSheets()[0],
                    ssID = spreadSheet.getId();
              
                sheet.getRange(1, 1, arr.length, arr[0].length).setValues(arr);
              
                var newFile = DriveApp.getFileById(ssID).makeCopy(reportName, reports_folder);
                DriveApp.getFolderById(ssID).setTrashed(true);
            }
        } else {
            Logger.log('Отчет сформирован и готов к обработке');
            // Log the name of every file in the user's Drive.
            while (test_files.hasNext()) {
                var test_file = test_files.next(),
                    test_fileId = test_file.getId();
                dataProcessing(test_fileId);
            }
        }
    }
}
