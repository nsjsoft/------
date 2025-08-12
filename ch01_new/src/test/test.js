function a () {
  return 1 + 2;  
}

function b (a) {
  return a();
}

var c = function() {
  return 1 + 2;
}
console.log(b(a)); // This will return 3