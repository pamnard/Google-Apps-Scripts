function toTable(tsv, reportName) {
    //var tsv is the TSV file with headers
    var lines = tsv.toString().split('\n'),
        headers = lines[1].split('\t');

    var dataArr = [];
    dataArr.push(headers);

    var end = lines.length - +2;
    for (var i = 2; i < end; i++) {
        var currentline = lines[i].toString().toLowerCase().replace(/--/g, '0').replace(/\+/g, '').split('\t');
        currentline[1] = currentline[1].replace(/[-!@#$%^&*(),.?":{}|<>\/]/g, ' ').replace(/\d/g, ' ').replace(/[\s*]+/g, ' ').trim();
        if (currentline[1].toString().length > +1) {
            dataArr.push(currentline);
        }
    }
    // Logger.log(dataArr.toString());
    var ssNew = SpreadsheetApp.create(reportName),
        sheet = ssNew.getSheets()[0],
        dataSize = 'A1:G' + dataArr.length,
        range = sheet.getRange(dataSize);

    range.setValues(dataArr);
    sheet.setName('Queries / In progress');
}
