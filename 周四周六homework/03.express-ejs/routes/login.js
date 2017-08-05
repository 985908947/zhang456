var express = require('express')
var router = express.Router()

router.get('/',function (request, response) {
    response.render('login',{title: '登录注册'})
})
module.exports = router