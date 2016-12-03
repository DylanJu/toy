const test = (obj) => {
  let arr = [];
  // if (typeof obj === 'object' && Array.isArray(obj) === true) {
  //   for (var i = 0; i < obj.length; i++) {
  //     arr.push(Number(obj[i]));
  //   }
  // } else if (typeof obj === 'object') {
  //   for (var j in obj) {
  //     arr.push(obj[j]);
  //   }
  // } else if (typeof obj === 'string') {
  //   for (var k = 0; k < obj.length; k++) {
  //     arr.push(Number(obj[k]));
  //   }
  // } else if (typeof obj === 'number') {
  //   let str = obj.toString();
  //   for (var l = 0; l < str.length; l++) {
  //     arr.push(Number(str[l]));
  //   }
  // } else {
  //   throw "Wrong input value";
  // }
  const makeArray = (obj)=> {
    // let arr = [];

      // console.log(obj[j]);
      if (typeof obj === 'object') {
        if (Array.isArray(obj)) {
          for (var i = 0; i < obj.length; i++) {
            makeArray(obj[i]);
          }
        } else {
          for (var i in obj) {
            makeArray(obj[i]);
          }
        }
      } else if (typeof obj === 'string') {
        for (var i = 0; i < obj.length; i++) {
          arr.push(Number(obj[i]));
        }
      } else if (typeof obj === 'number') {
        const str = obj.toString();
        for (var i = 0; i < str.length; i++) {
          arr.push(Number(str[i]));
        }
      } else {
        throw 'Wrong Input Value';
      }
    return arr;
  }

  const result = makeArray(obj);
  console.log(result);
  for (var j = 0; j < result.length; j++) {
    if (result[j] === 1 && result[j+1] !== 2 && j !== result.length - 1) {
      return false;
    }
  }
  return true;
}

console.log(test([1, [2,1]]));
// console.log(test({a: 1, b: 2, c: 1, d: 2, e: 1}));
// console.log(test('12222112'));
// console.log(test(12222112));
// console.log(test(true));
// console.log(test([1,2,1,2,1,2,2,2,2,1]));
