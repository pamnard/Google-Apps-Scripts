function customDateRange(select) { // Формируем значение параметра временного диапазона для выборки AWQL
    var MILLIS_PER_DAY = 1000 * 60 * 60 * 24,
        now = new Date(),
        fromDate = new Date(now.getTime() - (config().customDaysInDateRange + config().customDateRangeShift) * MILLIS_PER_DAY),
        toDate = new Date(now.getTime() - config().customDateRangeShift * MILLIS_PER_DAY),
        nowDate = new Date(now.getTime()),
        timeZone = Session.getScriptTimeZone(),
        fromformatDate = Utilities.formatDate(fromDate, timeZone, 'yyyy-MM-dd'),
        toformatDate = Utilities.formatDate(toDate, timeZone, 'yyyy-MM-dd'),
        nowformatDate = Utilities.formatDate(nowDate, timeZone, 'yyyy-MM-dd'),
        duringDates = fromformatDate + ',' + toformatDate;
    if (select == 'from') {
        return fromformatDate;
    } else if (select == 'to') {
        return toformatDate;
    } else {
        return duringDates;
    }
}

function timeCheck(start) {
    var checkTime = new Date(),
        diff = ((checkTime - start) / 1000).toFixed();
    return diff;
}

function unique(arr) { // убираем повторы
    var tmp = {};
    return arr.filter(function (a) {
        return a in tmp ? 0 : tmp[a] = 1;
    });
}

function getRandomInt(min, max) {
    // использование Math.round() даст неравномерное распределение!
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
