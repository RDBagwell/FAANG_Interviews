const string = "abcabcbb";

// Brute Force Time: O(n^2), Space: O(n)
function lengthOfLongestSubstring(s){
  let longest  = 0;
  if(s.length <=1){
    return s.length;
  }
  for(let left = 0; left < s.length; left++){
    let seenChars = {}, currentLength = 0;
    for (let right = left; right < s.length; right++) {
      const currentChar = s[right];
      if(!seenChars[currentChar]){
        currentLength++;
        seenChars[currentChar] = true;
        longest = Math.max(longest, currentLength)
      } else {
        break;
      }
    }
  }
    console.log(longest);
}

lengthOfLongestSubstring(string);

