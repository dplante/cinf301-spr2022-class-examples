// See: https://javascript.info/promise-chaining
new Promise((resolve, reject) => {

  //  reject('bad');
  setTimeout(() => resolve(1), 1000); // (*)

}).then((result) => { // (**)

  console.log(result); // 1
  return result * 2;

}).then((result) => { // (***)

  console.log(result); // 2
  return result * 2;

}).then((result) => {

  console.log(result); // 4
  return result * 2;

}).catch(bad => console.log(bad));
