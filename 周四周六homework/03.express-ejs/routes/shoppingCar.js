var express = require('express')
var router = express.Router()

router.get('/',function (request,response) {
    response.render('shoppingCar',{ title : '购物车'})
})
module.exports = router
