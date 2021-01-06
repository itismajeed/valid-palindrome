const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please enter your text here...\n",answer => {
    if (isValidPalindrome(answer)) {
        console.log("It's a valid palindrome ");
    } else
        console.log("It's NOT a  valid palindrome ");
});



function isValidPalindrome(st) {
    let x = Math.floor(st.length / 2);
    if(st.length%2===0){
        return false;
    }
    for (let i = 0; i < x; i++) {
        if (st[i] !== st[st.length - i - 1]) {
            return false;
        }

    }
    return true;
}


