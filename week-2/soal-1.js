// isFinite(): Menentukan apakah nilai yang dimasukkan itu adalah nilai yang finite(terhingga)
function divide(x) {
    if (isFinite(1000 / x)) {
      return 'Angka terhingga.';
    }
    return 'Angka tidak terhingga!';
  }
  
  console.log(divide(0));
  // expected output: "Angka tidak terhingga!"

  
  // isNaN(): Menentukan apakah sebuha nilai itu NaN(Not a Number) atau tidak.
  function milliseconds(x) {
    if (isNaN(x)) {
      return 'bukan sebuah angka!';
    }
    return x * 1000;
  }
  
  console.log(milliseconds('100F'));
  // expected output: "bukan sebuah angka!"

