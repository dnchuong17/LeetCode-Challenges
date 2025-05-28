var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const count = {};
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    //the value of count[char] is undefined at the first time
    //undefined == wrong || 0 => 0


    for (let char of t) {
        if (!count[char]) {
            return false;
        }
        count[char]--;
    }
    return true;
}

console.log(isAnagram("anagram", "nagaram"))