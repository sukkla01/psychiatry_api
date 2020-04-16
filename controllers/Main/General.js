const moment = require('moment')

exports.getName = (req, res, next) => {
    let username = req.params.username

    req.getConnection((err, connection) => {
        if (err) return next(err)
        var sql = `SELECT username,name FROM addtimessw.USERINFO WHERE username= ?  `;
        // var params = "%" + req.query.term + "%"
        connection.query("SET NAMES utf8");
        connection.query(sql, [username], (err, results) => {
            if (err) return next(err)

            res.send(results)
        })
    })
}

exports.create = (req, res, next) => {
    var { body } = req
    console.log(body[0])
    var post = {
        username: body[0].general[0].username,
        tname: body[0].general[0].tname,
        type: body[0].general[0].type,
        tel: body[0].general[0].tel,
        age: body[0].general[0].age,
        no1: body[0].no1.chioce,
        no2: body[0].no2.chioce,
        no3: body[0].no3.chioce,
        no4: body[0].no4.chioce,
        no5: body[0].no5.chioce,
        no6: body[0].no6.chioce,
        detail: body[0].detail.detail,
        d_update : moment().format('YYYY-MM-DD') + ' ' + moment().format('HH:mm:ss')
    }
       

    req.getConnection(function (err, connection) {
        connection.query("SET NAMES utf8"); 
        connection.query("insert into quest set ?", post, (err, results) => {
            if (err) return console.log(err)
            res.send({ status: 'ok', results })
        })

    })

}