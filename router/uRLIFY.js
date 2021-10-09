const express = require('express')
const router = express()

router.get('/urlify', (req, res) => {
    var url = "www.moty.com this is youverify url"
    var urlsplit = url.split(' ').join('%20')
    res.status(200).json({ message: urlsplit });
})

module.exports = router