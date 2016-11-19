function factorial(a){
  var fact = 1;

  for(var i = 0; i < a; i++){
    fact = fact * (a - i);
  }

  return fact;
}
