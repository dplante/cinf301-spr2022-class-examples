const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('hello');
  }, 300);
});

myPromise
  .then(value => { console.log(value + ' one'); }, value => { console.log('bad value one'); })
  .then(value => { console.log(value + ' two'); }, value => { console.log('bad value two'); })
  .catch(err => { console.log(err); });
