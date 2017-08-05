var express = require('express')
var router = express.Router()

router.get('/',function (request,response) {
    response.render('awhile',{ title : '片刻网'})
})
module.exports = router
