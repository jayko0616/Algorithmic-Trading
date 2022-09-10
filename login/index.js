const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config/key')

const { User } = require("./models/User");

//client에서 오는 정보(application/x-www-form-urlencoded)를 server에서 분석
app.use(bodyParser.urlencoded({extended: true}));
//client에서 오는 정보(application/json)를 server에서 분석
app.use(bodyParser.json());
app.use(cookieParser());


const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World! 하잉 바잉'))


//register router
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



app.post('/login', (req,res) => {

 //*요청된 아이디가 데이터베이스에 있는지 찾기
    //findOne: 몽고 디비에서 제공하는 함수
    User.findOne({ id: req.body.id }, (err, user) => {
        if(!user){
            return res.json({
                loginSuccess: false,
                message: "입력하신 아이디에 해당하는 사용자가 없습니다."
            })
        }

    //*요청된 아이디가 데이터베이스에 있다면 비밀번호가 일치하는 지 확인
    user.comparePassword(req.body.password, (err, isMatch) => {
        if (!isMatch)
            return res.json({ loginSuccess: false, message: "비밀번호를 틀렸습니다."})
        
        //*비밀번호까지 맞았다면 토큰을 생성
        user.generateToken((err,user) => {
            if(err) return res.status(400).send(err);

            //토큰 생성 후 쿠키에 저장
            res.cookie("x_auth", user.token)
            .status(200)
            .json({ loginSuccess: true, userId: user._id})

        })
      })
    })
})






app. listen(port, () => console.log(`Example app listening on port ${port}!`))