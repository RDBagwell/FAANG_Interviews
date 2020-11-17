const string = "A man, a plan, a canal: Panama";
const string2 = 'raceacar';
// Brute Force
function isPlindrome(s){
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let rev = '';
    for (let i = s.length - 1; i >= 0; i--) {
        rev += s[i];
    }
    return rev === s;
}

// Optimized
function isPlindromeB(s){
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let left = 0;
    let right = s.length -1;
    while (left <= right) {
        if(s[left] === s[right]){
            left++;
            right--;
        } else{
            return false;
        }
    }
    return true;
}

var validPalindrome = function(s) {
    let start = 0;
    let end = s.length - 1;
    while (start < end) {
        if (s[start] !== s[end]) {
            return validSubPalindrome(s, start + 1, end) || validSubPalindrome(s, start, end - 1);
        }
        start++;
        end--;
    }
    return true;
  };
  
  var validSubPalindrome = function(s, start, end) {
    while (start < end) {
        if (s[start] !== s[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
  };

console.log(validPalindrome(string2));