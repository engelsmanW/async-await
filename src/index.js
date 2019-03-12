// async keyword wraps non promise inside Promise.resolve
async function returnImplicitPromise() {
  return "string";
}

console.log(returnImplicitPromise());

returnImplicitPromise().then((resolve, reject) => {
  console.log("resolve", resolve);
  console.log("reject", reject);
});
