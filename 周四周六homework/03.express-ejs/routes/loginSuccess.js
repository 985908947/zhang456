var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var options = {
    host: 'localhost',
    port: 3308,
    user: 'root',
    password: ''
}
// 连接数据库
var connect = mysql.createConnection(options)
connect.connect(function (error) {
    if (error) {
        console.log("连接失败")
    } else {
        console.log("连接成功")
    }
})
// 使用数据库
var userDBSQL='use person'
connect.query(userDBSQL,function (error) {
    if (error) {
        console.log("使用失败")
    } else {
        console.log("使用成功")
    }
})


router.post('/',function (request,response) {
    console.log(request.body.username)
    console.log(request.body.password)
    var selectSQL = 'select * from user'
    connect.query(selectSQL,function (error,results) {
        if (error) {
            console.log("查询失败")
            console.error(error)
        } else {
            if(request.body.username == results[0].username && request.body.password == results[0].password){
                response.render('loginSuccess',{title: '登录成功'})
            }else{
                response.render('loginDefault',{title: '登录失败'})
            }

        }
    })
})
module.exports = router
