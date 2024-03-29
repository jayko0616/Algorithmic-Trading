const express = require('express') //express 모듈 가져옴
const app = express()
const port = 5000;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config/key');
const { auth } = require('./middleware/auth');
const { User } = require("./models/User");
const spawn = require('child_process').spawn;
const cors = require("cors");


var access;
var secret;

//application/x-www-form-urlencoded 이렇게 된 데이터를 분석해서 가져올 수 있게 함
app.use(bodyParser.urlencoded({extended: true}));

//application/json 얘는 이렇게 된 거 
// app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json())
app.use("*", cors())

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Conneted...'))
.catch(err => console.log(err))



/**
 * 회원가입 요청 
 */

app.post('/', function(req, res) {
  // do something w/ req.body or req.files 
});


app.post('/api/users/register', (req, res) => {
  
  //회원가입할 때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터베이스에 넣어준다. 
  User.init()
  const user = new User(req.body)
  
  //받은 데이터가 user model에 저장됨
  user.save((err, doc) => {
      if(err) {
        console.log(err);
        return res.json({ success: false, err})
      }
      //회원가입 성공
      return res.status(200).json({
        success: true
      })
  })
})

/**
 * 로그인 요청 
 */
app.post('/api/users/login', (req, res) => {

  //요청된 이메일을 데이터베이스에서 찾는다. 
  User.findOne({ email: req.body.email }, (err, user) => {
    if(!user) {
      return res.json({
        loginSuccess: false,
        message: "제공된 이메일에 해당하는 유저가 없습니다"
      })
    }
    //요청된 이메일이 데이터베이스에 있다면, 비밀번호가 맞는지 확인
    user.comparePassword(req.body.password, (err, isMatch) => {
      if(!isMatch) {
        return res.json({ 
          loginSuccess: false, 
          message: "비밀번호가 틀렸습니다."
        })
      }

      user.compareCoinApiKey(req.body.coinApiKey, (err, isMatch) => {
        if(!isMatch) {
          return res.json({ 
            loginSuccess: false, 
            message: "Api Key가 틀렸습니다."
          })
        }

        user.compareAccessApiKey(req.body.accessKey, (err, isMatch) => {
          if(!isMatch) {
            return res.json({ 
              loginSuccess: false, 
              message: "Access Key가 틀렸습니다."
            })
          }

          //비밀번호까지 맞다면, token을 생성하기 
          user.generateToken((err, user) => {
            if(err) return res.status(400).send(err);

            //accesskey and secretkey 설정 ! 
            access = req.body.accessKey;
            secret = req.body.coinApiKey;

            //client -> cookie에 token을 저장한다. cf. 서버는 DB에 저장
            res.cookie("x_auth", user.token)
              .status(200)
              .json({ loginSuccess: true, userId: user._id})
          })
        })
      })
    })
  })
})

app.get('/api/users/auth', auth, (req, res) => {
  //여기까지 미들웨어를 통과해 왔다는 얘기는 Authentication이 true라는 뜻.
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    name: req.user.name,
    email: req.user.email,
    coinApiKey: req.user.coinApiKey,
  })
})

app.get('/api/users/logout', auth, (req, res) => {
  User.findOneAndUpdate({_id: req.user._id},
    {token: ""},
    (err, user) => {
      if(err) return res.json({ success: false, err});
      access = '';
      secret = '';
      console.log("로그아웃!")
      return res.status(200).send({
        success: true
      })
    })
})

app.post('/api/users/coin/trading', (req, res) => {
  console.log("access: ", access)
  const result = spawn('python', ['./AutomaticTrading/getBalance.py', access, secret]);
  result.stdout.on('data', function(data) {
    console.log(data.toString());
  })
  result.stderr.on('data', function(data) {
    console.log(data.toString());
  })
})

app.post('/api/users/coin/balance', (req, res) => {  

  const result_01 = spawn('python', ['./AutomaticTrading/getBalance.py', access, secret]);

  result_01.stdout.on('data', function(data) {
    
    res.status(200).json({
      getUserBalance: true, 
      balance: data.toString()
    }) 
  });
})


app.post('/api/users/coin/dictionary', (req, res) => {  

  const result_02 = spawn('python', ['./AutomaticTrading/getList.py', access, secret]);

  result_02.stdout.on('data', function(data) {
    console.log(data.toString())
    res.status(200).json({
      getUserDictionary: true, 
      dictionary: data.toString()
    })
  });

})

app.get('api/users/coin/userData',(req, res)=>{
  console.log("서버로 요청은 들어옴")
  User.getInfo((err, info)=> {
    if(err) return console.log("user data err");
    console.log("userdata 돼")
    res.json({
      email: info.email,
      name: info.name,
      phone: info.phone
    })
  })
});

app.post('/api/users/coin/buy', (req, res)=>{
  let name = req.body;
  console.log(name);
  const spawn = require('child_process').spawn;

// 2. spawn을 통해 "python 파이썬파일.py" 명령어 실행
    const result = spawn('python', ['./Trade_function/buy.py']);

// 3. stdout의 'data'이벤트리스너로 실행결과를 받는다.
    result.stdout.on('data', function(data) {
        console.log(data.toString());
    });

// 4. 에러 발생 시, stderr의 'data'이벤트리스너로 실행결과를 받는다.
    result.stderr.on('data', function(data) {
        console.log(data.toString());
    });
});


app.post('/api/users/coin/sell', (req, res)=>{
  let name = req.body;
  console.log(name);
  // console.log('탐정이죠 ');
  const spawn = require('child_process').spawn;

// 2. spawn을 통해 "python 파이썬파일.py" 명령어 실행
    const result = spawn('python', ['./Trade_function/sell']);

// 3. stdout의 'data'이벤트리스너로 실행결과를 받는다.
    result.stdout.on('data', function(data) {
        console.log(data.toString());
    });

// 4. 에러 발생 시, stderr의 'data'이벤트리스너로 실행결과를 받는다.
    result.stderr.on('data', function(data) {
        console.log(data.toString());
    });
});

app.listen(port, () => console.log(`Jayko app listening on port ${port}`))
