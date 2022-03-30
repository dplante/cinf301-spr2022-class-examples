
function foo(arg) {
  console.log(`timeout is ${arg}`);
}
console.log('before 5000');
setTimeout(foo, 5000, 5000);
console.log('between 5000 and 3000');
setTimeout(foo, 3000, 3000);
console.log('between 3000 and 1000');
setTimeout(foo, 1000, 1000);
console.log('after 1000');