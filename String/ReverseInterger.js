var reverse = function(x) {
    let rev = 0;
    while (x !=0) {
        let remainder = x % 10;
        x = (x / 10) | 0;

        if (rev > 214748364) return 0;
        if (rev < -214748364) return 0; //out of bound

        rev = rev * 10 + remainder;
    }
    return rev;
};

console.log(reverse(123))