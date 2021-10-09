const express = require('express')
const router = express()

router.get('/checkpermutation', (req, res) => {
    function arePermutation(str1, str2) {
        // Get lengths of both strings
        let n1 = str1.length;
        let n2 = str2.length;

        // If length of both strings is not same,

        // then they cannot be Permutation
        if (n1 != n2) {
            return false;
        }
        let ch1 = str1.split(' ');
        let ch2 = str2.split(' ');
        // Sort both strings
        ch1.sort();
        ch2.sort();
        for (let i = 0; i < n1; i++) {
            if (ch1[i] != ch2[i]) {
                return false;
            }
            return true;
        }

    }

    let str1 = "test";

    let str2 = "test";


    if (arePermutation(str1, str2)) {
        res.status(200).send("Yes");
    } else {
        res.status(500).send("No");
    }
})


module.exports = router