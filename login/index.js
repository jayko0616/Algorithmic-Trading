const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');

const config = require('./config/key')

const { User } = require("./models/User");

//client에서 오는 정보(application/x-www-form-urlencoded)를 server에서 분석
app.use(bodyParser.urlencoded({extended: true}));
//client에서 오는 정보(application/json)를 server에서 분석
app.use(bodyParser.json());



const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World! 하잉 바잉'))


app.post('/register', (req, res) => {
    //회원가입을 할 때 필요한 정보들을 client에서 가져오면
    //그것들을 데이터 베이스에 넣어준다!

    //req.body에 회원 정보가 저장될 수 있는 것은 body-parser가 있기에 가능!
    const user = new User(req.body)

    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err})
        //200은 성공했다는 뜻
        return res.status(200).json({
            success: true
        })
    })
})


app. listen(port, () => console.log(`Example app listening on port ${port}!`))