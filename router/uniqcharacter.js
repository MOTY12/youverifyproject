const express = require('express')
const router = express()

router.get('/uniqueCharacters', (req, res) => {

    function uniqueCharacters(str) {
        for (let i = 0; i < str.length; i++) {

            for (let j = i + 1; j < str.length; j++) {
                if (str[i] == str[j]) {
                    return false;
                }
            }
        }
        return true;
    }
    let input = "come";


    if (uniqueCharacters(input) == true) {
        res.status(200).send("The String " + input + " has all unique characters" + "</br>");
    } else {
        res.status(200).send("The String " + input + " has duplicate characters");
    }

})


module.exports = router