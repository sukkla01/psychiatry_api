

const passport = require('passport')
const passportService = require('./service/passport')
const requireSignin = passport.authenticate('local', { session: false })
const requireAuth = passport.authenticate('jwt', { session: false })
const users = require('./controllers/Users')
const Address = require('./controllers/Main/Address')
const General = require('./controllers/Main/General')
const Multipliers = require('./controllers/Main/Multipliers')




// const MailSend = require('./controllers/MailSend/Index')




module.exports = function (app) {
    app.get('/', function (req, res) {
        res.send("<h1 style='text-align:center;margin-top:150px; '>PSY Api</h1>")
    })
    app.post('/signin', requireSignin, users.signin)



    

    // Main
    app.get('/get-name/:username',General.getName)
    app.post('/add-quest',General.create)
    // app.get('/get-amp/:chw_id',Address.findAmp)
    // app.get('/get-tmb/:chw_id/:amp_id',Address.findTmb)
    // app.get('/get-lat-lng/:tmb_id',Address.findLatLong)


    // //Multipliers  แตกตัวคูณ
    // app.get('/get-group-pay',Multipliers.findGroupPay)
    // app.get('/get-sub-pay/:group_pay_id',Multipliers.findSubPay)



    //er monitor

    // app.get('/get-healing',erMonitor.findHealting)
    // app.get('/get-observ',erMonitor.findObserv)
    // app.get('/get-all',erMonitor.findAll)
    // app.get('/get-dch',erMonitor.findDch)
    // app.post('/update-dch',erMonitor.updateErDch)
    // app.post('/update-status',erMonitor.updateStatus)
    // app.get('/get-setting',erMonitor.findSetting)









}
