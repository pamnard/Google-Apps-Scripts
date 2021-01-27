function unique(arr) { // убираем повторы
  var tmp = {};
  return arr.filter(function (a) {
    return a in tmp ? 0 : tmp[a] = 1;
  });
}
