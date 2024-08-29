export function isPalindrome(string) {
  const list = string.split("");
  //console.log(list);
  const reversed = list.toReversed();
  //console.log(reversed);
  const string2 = reversed.join("");
  //console.log(string2);
  if (string == string2) {
    return true;
  }
  return false;
}

console.log(isPalindrome("racecar"));
