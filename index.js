//Your code here
function justInvoke(fn) {
  fn();
  return fn();
}

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg);
}

function setThisWithApply(fn, thisValue, args) {
  return fn.apply(thisValue, args);
}

function returnNewFunctionOf(fn, thisValue) {
  newFunction = fn.bind(thisValue);
  return newFunction;
}
