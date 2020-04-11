exports.findGroupPay = (req, res, next) => {

    req.getConnection((err, connection) => {
        if (err) return next(err)
        var sql = `SELECT * from group_pay `;
        // var params = "%" + req.query.term + "%"
        connection.query("SET NAMES utf8"); 
        connection.query(sql, (err, results) => {
            if (err) return next(err)
           
            res.send(results)
        })
    })
}
exports.findSubPay = (req, res, next) => {
    let group_pay_id = req.params.group_pay_id

    req.getConnection((err, connection) => {
        if (err) return next(err)
        var sql = `SELECT * from sub_pay where group_pay_id = ?  and status = 'Y'`;
        // var params = "%" + req.query.term + "%"
        connection.query("SET NAMES utf8"); 
        connection.query(sql,[group_pay_id], (err, results) => {
            if (err) return next(err)
           
            res.send(results)
        })
    })
}