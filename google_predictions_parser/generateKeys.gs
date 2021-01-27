function generateKeys(keyword, letters) {
  var primary = [];
  for (var i = 0; i < letters.length; i++) {
    var wordPlusOneLetter = keyword + ' ' + letters[i];
    primary.push([wordPlusOneLetter, 'TEMP']);
    if (keyword.indexOf(' ') == -1) {
      for (var y = 0; y < letters.length; y++) {
        var wordPlusTwoLetter = wordPlusOneLetter + letters[y];
        primary.push([wordPlusTwoLetter, 'TEMP']);
      }
    }
  }
  return unique(primary)
}
