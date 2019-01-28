const roundToNext5 = (n) => {
    return Math.ceil(n/5)*5;
  }

  // n/5 gives you a small decimal number and Math.ceil will always round up to the nearest whole integer.
  // After each multiple of 5 the value goes up by 1.  
  // So you multiply that by 5 to get the nearest multiple of 5.
  console.log(roundToNext5(11))
  // Math.round will give you the nearest rounded number.  11 = 2, 13 = 3.
  console.log(Math.round(13/5))