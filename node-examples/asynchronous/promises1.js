
let aPromise = new Promise(function (resolve, reject) {
  let value = 1;

  if (value == 1) {
    resolve("success");
  } else {
    reject("failure");
  }
});

aPromise
  .then(value => console.log(value))
  .catch(err => console.log(err));

// Call stack needs to clear first before async function triggers
console.log("here first");
