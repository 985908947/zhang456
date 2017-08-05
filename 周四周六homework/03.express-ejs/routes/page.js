var express = require('express')
var router = express.Router()

router.get('/',function (request,response) {
    // response渲染页面,views/page
    response.render('page',{ page: 'FEI页' })
})

module.exports = router;