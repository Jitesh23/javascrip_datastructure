var fibbonaci = [];

fibbonaci[1] = 1;
fibbonaci[2] = 1;

for (var i = 3; i < 20 ; i++) {
  fibbonaci[i] = fibbonaci[i-1] + fibbonaci[i-2];
}

for (var i = 1; i < fibbonaci.length; i++) {
  console.log(fibbonaci[i]);
}
