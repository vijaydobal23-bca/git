function fn1(fn2) {
  fn2(function () {
    console.log("fn3");
  });
}

fn1(function (fn3) {
  fn3();
});

let promise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Resolved");
  }, 2000);
})
.then((res) => {
  console.log(res);

  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("rejected");
    }, 2000);
  });
})
.catch((rej) => {
  console.log(rej);
});