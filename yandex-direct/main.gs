function directReport() {
  
    'use strict';

    var startTime = new Date();

    Logger.clear();

    const dateFrom = customDateRange('from'),
        dateTo = customDateRange('to'),
        dateName = dateFrom + '-' + dateTo,
        reportName = dateName + ' Direct Data';

    var folders = DriveApp.getFoldersByName('direct-reports');
    while (folders.hasNext()) {
        var folder = folders.next();
        var files = folder.getFilesByName(reportName);
        if (files.hasNext() == false) {
            Logger.log('Отчет не сформирован - формируем');
            var tsvFile = yandexParse();
            if ((typeof tsvFile != 'undefined') && (tsvFile != undefined)) {
                toTable(tsvFile, reportName);

                var files = DriveApp.getFilesByName(reportName);
                while (files.hasNext()) {
                    var file = files.next();
                    // Log the name of every folder in the user's Drive.
                    var folders = DriveApp.getFoldersByName('direct-reports');
                    while (folders.hasNext()) {
                        var folder = folders.next(),
                            newFile = file.makeCopy(file.getName(), folder);
                        file.setTrashed(true);
                    }
                }
            }
        } else {
            Logger.log('Отчет сформирован и готов к обработке');
            while (files.hasNext()) {
                var file = files.next(),
                    fileId = file.getId();
                dataProcessing(fileId);
            }
        }
    }
}
