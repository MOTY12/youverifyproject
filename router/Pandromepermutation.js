const express = require('express')
const router = express()


router.get('/pandrompermutation', (req, res) => {
    function canFormPalindrome(str)

    {

        let count = Array(NO_OF_CHARS).fill(0);

        for (let i = 0; i < str.length; i++) {
            count[str[i].charCodeAt()]++;

            let odd = 0;

            for (let i = 0; i < NO_OF_CHARS; i++) {

                if ((count[i] & 1) == 1) {
                    odd++;

                    if (odd > 1) {
                        return false;
                    }
                }

            }
        }


        // Return true if odd count is 0 or 1,

        return true;

    }



    // Driver program 

    if (canFormPalindrome("geeksogeeks")) {
        console.log("Yes");
    } else {
        console.log("No");
    }



})

module.exports = router