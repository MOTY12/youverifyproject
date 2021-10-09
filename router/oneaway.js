const express = require('express')
const router = express()

router.get('/Oneaway', (req, res) => {

    function isEditDistanceOne(s1, s2) {

        // Find lengths of given strings

        let m = s1.length,
            n = s2.length;
        // If difference between lengths is 

        // more than 1, then strings can't 

        // be at one distance

        if (Math.abs(m - n) > 1) {
            return false;
        }
        // Count of edits

        let count = 0;

        let i = 0,
            j = 0;


        while (i < m && j < n) {
            // If current characters 

            // don't match

            if (s1[i] != s2[j]) {
                if (count == 1) return false;
                // If length of one string is

                // more, then only possible edit

                // is to remove a character

                if (m > n) {
                    i++;
                } else {
                    if (m < n) {
                        j++;
                    } else {
                        i++;
                        j++;
                    }
                    // Increment count of edits 
                    count++;
                }
                // If current characters match
            } else {
                i++;

                j++;

            }

        }


        // If last character is extra 

        // in any string

        if (i < m || j < n) {
            count++;
            return count == 1;

        }
    }



    let s1 = "pale";

    let s2 = "bake";

    if (isEditDistanceOne(s1, s2)) {
        res.status(200).json({ message: "Yes" });
    } else {
        res.status(500).json({ message: "No" });
    }



})


module.exports = router