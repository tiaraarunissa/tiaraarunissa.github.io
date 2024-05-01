function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // Menambahkan angka nol jika nilai <10
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("jam").innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
