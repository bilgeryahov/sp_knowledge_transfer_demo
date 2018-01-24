const checkSumPromise = (num1, num2, expSum) =>
  // Return a new promise.
  new Promise((resolve, reject) => {
    // Do the usual processing.
    if ((num1 + num2) === expSum) {
      resolve(expSum);
    } else {
      reject(new Error(expSum));
    }
  });

const squareCorrectResultPromise = correctResult =>
  new Promise((resolve) => {
    resolve(correctResult * correctResult);
  });


checkSumPromise(1, 2, 3)
  .then(response => squareCorrectResultPromise(response))
  .then((squareOfCorrectResult) => {
    console.log(`Square of the correct result: ${squareOfCorrectResult}`);
  })
  .catch((error) => {
    console.error(`Problem: ${error}`);
  });

const checkSumCallback = (num1, num2, expSum, callback) => {
  // Do the usual processing.
  if ((num1 + num2) === expSum) {
    callback(null, expSum);
  } else {
    callback(new Error(expSum), null);
  }
};

const squareCorrectResultCallback = (correctResult, callback) => {
  callback(null, correctResult * correctResult);
};

checkSumCallback(1, 2, 3, (error, data) => {
  if (error) {
    console.error(`Problem: ${error}`);
  } else if (data) {
    squareCorrectResultCallback(data, (squareError, squareData) => {
      if (squareError) {
        console.error(`Square Problem: ${squareError}`);
      } else if (squareData) {
        console.log(`Square of the correct result: ${squareData}`);
      }
    });
  }
});
