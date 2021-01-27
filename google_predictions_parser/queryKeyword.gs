function queryKeyword(keyword, url) {
  Utilities.sleep(100);
  var googleUrl = `https://www.${url}/s?gs_rn=18&gs_ri=psy-ab&cp=7&gs_id=d7&xhr=t&q=${keyword}`;
  var response = UrlFetchApp.fetch(googleUrl),
    text = response.getContentText('UTF-8'),
    phrases = JSON.parse(text),
    arr = [];
  // Logger.log(response);
  for (var i = 0; i < phrases[1].length; i++) {
    var words = phrases[1][i][0].toString().replace(/[\.;#\(\)=\+:\-\/]+/g, ' ').split(' ');
    if ((words.length > +1) && (words.length < 5) && (phrases[1][i][0] != keyword) && (phrases[1][i][0].toLowerCase().indexOf(keyword) != -1)) {
      arr.push([phrases[1][i][0].toLowerCase(), false]);
    }
  }
  return unique(arr);
}
