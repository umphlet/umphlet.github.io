
function sumFibs(num) {

  function add(a, b) {
    return a + b;
  }

  var fi = [1, 1];

  while (fi[fi.length - 1] < num) {
    fi.push(fi[fi.length - 2] + fi[fi.length - 1]);
  }

  fi = fi.filter(function(x) {
    return x % 2 !== 0 && x <= num;
  });

  return fi.reduce(add, 0);
}

sumFibs(75026);
