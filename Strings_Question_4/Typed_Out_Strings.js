const S = "ab#c", T = "ad#c"; // True

// Brute Force 
function backspaceCompare(S, T) {
    const string1 = buildString(S);
    const string2 = buildString(T);
    if(string1 === string2){
        return true;
    } else {
        return false;
    }
}

function buildString(string){
    const stringArray = string.split('');
    const finalString = [];
    stringArray.forEach(element => {
        if(element === '#'){
            finalString.pop();   
        } else {
            finalString.push(element);
        }
    });
    return finalString.join('');
}
// console.log(backspaceCompare(S, T));


// Optimal
function backspaceCompareB(S, T) {
    let p1 = S.length -1, p2 = T.length -1;
    while (p1 >= 0 || p2 >= 0) {
        if(S[p1] === '#' || T[p2] === '#'){
            if(S[p1] === '#'){
                let backcount = 2;
                while (backcount > 0) {
                    p1--;
                    backcount--;
                    if(S[p1] === '#'){
                        backcount = backcount + 2;
                    }
                }
            }

            if(T[p2] === '#'){
                let backcount = 2;
                while (backcount > 0) {
                    p2--;
                    backcount--;
                    if(T[p2] === '#'){
                        backcount = backcount + 2;
                    }
                }
            }
        } else {
            if(S[p1] !== T[p2]){
                return false;
            } else {
                p1--;
                p2--;
            }
        }
    }
    return true;
}
console.log(backspaceCompareB(S, T));