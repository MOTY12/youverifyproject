const express = require('express')
const app = express()


app.use(express.json())

app.get('/uniqueCharacters', (req, res) => {

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
    let input = "GeeksforGeeks";


    if (uniqueCharacters(input) == true) {
        res.status(200).send("The String " + input + " has all unique characters" + "</br>");
    } else {
        res.status(200).send("The String " + input + " has duplicate characters");
    }

})



app.get('/checkpermutation', (req, res) => {


})

app.listen(process.env.PORT || 5000)