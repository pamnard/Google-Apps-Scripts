function tsvToArr(tsv) {
    //var tsv is the TSV file with headers
    var lines = tsv.toString().split('\n'),
        dataArr = [];
    for (var i = 0; i < lines.length; i++) {
        if (i == +0) {
            dataArr.push(lines[0].split('\t'));
        } else {
            var currentline = String(lines[i]).toLowerCase().replace(/--/g, '0').replace(/\+/g, '').split('\t');
            if (!!currentline[1]) {
                currentline[1] = currentline[1].replace(/[-!@#$%^&*(),.?":{}|<>\/]/g, ' ').replace(/\d/g, ' ').replace(/[\s*]+/g, ' ').trim();
                if (currentline[1].toString().length > +1) {
                    dataArr.push(currentline);
                }
            }
        }
    }
    return dataArr;
}
