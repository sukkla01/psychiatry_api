const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const myConnection = require('express-myconnection')
const http = require('http')
const socketIO = require('socket.io')
const moment = require('moment')
const errorHandler = require('./middleware/errorHandler')

const config = require('./config')
const routes = require('./routes')


const PORT = 4033
const strQrcode = '';


// our server instance
const server = http.createServer(app)

// This creates our socket using the instance of the server
const io = socketIO(server)

app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ type: '*/*' }))

app.use(myConnection(mysql, config.dbOption, 'pool'))
routes(app)

const con = mysql.createConnection(
    config.dbOption
)
con.connect(function (err) {
    if (err) throw err
    const connectt = con.query
    if (!connectt.length)
        throw new Errors.InternalServerError('country not found');


})
// io.on('connection', socket => {
//     // console.log('New client connected')


//     socket.on('edit_admin', (id) => {
//         console.log('edit')
//         io.sockets.emit('show_web')

//     })

//     socket.on('disconnect', () => {
//         console.log('user disconnected')
//     })
// })






app.use(errorHandler) 


server.listen(PORT, () => {
    console.log('test')
})