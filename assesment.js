function assesment(...value) {
  const arrayStr = ["abc", "bca", "fhj", "asd", "sdf", "ghj", "iuy"];

  let inputArray = [];
  let indexArr = "";

  for (let i = 0; i < value.length; i++) {
    // do looping
    if (!inputArray.includes(value[i])) {
      // if inside inputArray doesn't exist the value then the value only
      inputArray.push(value[i]);
    }
    // console.log(inputArray);
  }

  for (let j = 0; j < inputArray.length; j++) {
    // do looping for inputArray
    for (let n = 0; n < arrayStr.length; n++) {
      // do looping for arrayStr
      if (inputArray[j] === arrayStr[n]) {
        // if the text in inputArray similar with arrayStr then show the index number in the same position
        indexArr += ` ${n} `;
      }
    }
  }
  console.log(indexArr);
}

assesment("abc", "asd", "sdf", "abc", "rty", "bca");
