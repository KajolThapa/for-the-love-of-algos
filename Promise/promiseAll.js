function promiseAll(promises) {
    const result = [];
    let completedpromise = 0;
    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            promise.then((value) => {
                result[index] = value;
                completedpromise += 1;
                if (completedpromise === promises.length) {
                    resolve(result);
                }
            }).catch(err => {
                reject(err);
            })
            
        })
    })
}

const asyncOperation = function(time) {
    return new Promise(function (resolve, reject) {
      setTimeout(function() {
        if(time === 2000) {
          reject("error at 2000");
        }
        resolve(time);
      }, time);
    });
  }

const promisesToMake = [asyncOperation(2000), asyncOperation(1000), asyncOperation(3000)];

const promises = promiseAll(promisesToMake);
promises.then(results => {
    console.log(results);
}).catch(err => console.log(err));