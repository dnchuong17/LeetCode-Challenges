var reverseString = function(s) {

    const reverse = (start, end) => {
        while (start < end) {
            [s[start], s[end]] = [s[end], s[start]];
            start++;
            end--;
        }
    }

    reverse(0, s.length-1);

    return s;
};

console.log(reverseString(["h","e","l","l","o"]));