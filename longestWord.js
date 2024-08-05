function longestWord(str) {
    let stri = str.split(' ');
    let longest = 0;
    let longest_world = null;
    for (let i = 0; i < stri.length; i++) {
        if(longest < stri[i].length ){
            longest = stri[i].length;
            longest_world = stri[i];
        }
    }
    return longest_world
}

const long = 'Hello guys this is geeksforgeeks where students learn programming'
console.log(longestWord(long))