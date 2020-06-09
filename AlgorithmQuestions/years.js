//growth of a population
function nbYear(p0, percent, aug, p){
  for (var yearPassed = 0; p0 < p; yearPassed++){
    p0 = p0 * (1 + percent / 100) + aug;
  }
  return yearPassed;
}


function nbYear_(p0, percent, aug, p){
  var count = 0;
  while (p0 < p){
    p0 = p0 * (1 + percent / 100) + aug;
    count++;
  }
  return count;
}
