var express = require('express')
var router = express.Router()

router.get('/',function (request,response) {
    response.render('loginSuccess',{ title : '注册成功'})
})
module.exports = router
