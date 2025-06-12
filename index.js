function receivesAFunction(callback) {
  callback();
}

receivesAFunction(() => console.log("Callback called!")); // should log the message

function returnsANamedFunction() {
  function namedFunction() {
    return "I'm a named function!";
  }
  return namedFunction;
}

function returnsAnAnonymousFunction() {
  return function() {
    return "I'm anonymous!";
  };
}

function returnsAnAnonymousFunction() {
  return () => "I'm anonymous!";
}
