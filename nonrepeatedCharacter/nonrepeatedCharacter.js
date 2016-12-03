/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  for(let i=0; i<string.length; i++) {
    let nonRepeated = true;
    for(let j=i+1; j<string.length; j++) {
      if(string[i] === string[j]) {
        nonRepeated = false;
      }
    }
    if(nonRepeated) {
      return string[i];
    }
  }
  return false;
};

console.log(firstNonRepeatedCharacter('AACBDBA'))
