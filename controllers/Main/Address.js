const moment = require('moment')

exports.findChw = (req, res, next) => {
    req.getConnection((err, connection) => {
        if (err) return next(err)
        var sql = `SELECT CH_ID,CHANGWAT_T FROM tambon GROUP BY CH_ID ORDER BY CHANGWAT_T  `;
        // var params = "%" + req.query.term + "%"
        connection.query("SET NAMES utf8"); 
        connection.query(sql, (err, results) => {
            if (err) return next(err)
           
            res.send(results)
        })
    })
}
exports.findAmp = (req, res, next) => {
    let chw_id = req.params.chw_id

    req.getConnection((err, connection) => {
        if (err) return next(err)
        var sql = `SELECT AM_ID,AMPHOE_T FROM tambon WHERE  CH_ID = ? GROUP BY AM_ID ORDER BY AMPHOE_T  `;
        // var params = "%" + req.query.term + "%"
        connection.query("SET NAMES utf8"); 
        connection.query(sql,[chw_id], (err, results) => {
            if (err) return next(err)
           
            res.send(results)
        })
    })
}
exports.findTmb = (req, res, next) => {
    let chw_id = req.params.chw_id
    let amp_id = req.params.amp_id

    req.getConnection((err, connection) => {
        if (err) return next(err)
        var sql = `SELECT t.TA_ID,t.TAMBON_T,t.LAT,t.LONG FROM tambon t WHERE  CH_ID = ? AND AM_ID= ? ORDER BY TAMBON_T `;
        // var params = "%" + req.query.term + "%"
        connection.query("SET NAMES utf8"); 
        connection.query(sql,[chw_id,amp_id], (err, results) => {
            if (err) return next(err)
           
            res.send(results)
        })
    })
}
exports.findLatLong = (req, res, next) => {
    let tmb_id = req.params.tmb_id

    req.getConnection((err, connection) => {
        if (err) return next(err)
        var sql = `SELECT t.LAT,t.LONG FROM tambon t WHERE  TA_ID= ? `;
        // var params = "%" + req.query.term + "%"
        connection.query("SET NAMES utf8"); 
        connection.query(sql,[tmb_id], (err, results) => {
            if (err) return next(err)
           
            res.send(results)
        })
    })
}