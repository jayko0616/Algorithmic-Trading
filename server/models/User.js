const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds= 10 ;
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        //공백 있을 시 없애주는 역할
        trim: true,
        //중복 금지
        unique: 1
    },
    password: {
        type: String
    },
    address:{
        type: String
    },
    phone:{
        type: String
    },
    coinApiKey:{
        type: String
    },
    accessKey:{
        type: String
    },
    role:{
        type: Number
    },
    token: {
        //유효성 관리할 떄 token이 필요함.
        type: String
    },
    tokenExp: {
        //todken의 유효기간
        type: Number
    },
    isAdmin: {
        type: Number
    },
    isAuth: {
        type: Number
    }
})


//index.js의 register router에서 정보들을 저장하기 전에 시행하는 함수
//save 전에 실행하겠다는 것! 

userSchema.pre('save', function( next ){
    //위의 내용들 가르킴
    var user = this;
    console.log(user);

    //비밀번호를 바꿨을 시에만 암호화 재설정을 위해 if문을 사용한 것
    if (user.isModified('password')){
        //비밀번호를 암호화
        bcrypt.genSalt(saltRounds, function(err, salt){
            if (err) {
                console.log("slat실패!");
                return next(err)
            }
            bcrypt.hash( user.password, salt, function (err, hash){
                if (err) {
                    console.log("hash 실패!!!!!");
                    return next(err)
                }
                user.password = hash; //plain password -> hash된 비밀번호로 바꿔줌 
                next()
            })
        })
    }
    else{
        next()
    }
})


//입력받은 비밀번호와 db에있는 비밀번호와 일치하는지 확인하는 함수
userSchema.methods.comparePassword = function(plainPassword, cb){
    // 입력받은 비밀번호를 암호화한 뒤 데이터베이스에 있는 암호화 된 비밀번호와 비교해야함!
    bcrypt.compare(''+plainPassword, this.password, function(err, isMatch){
        if(err) return cb(err);
        cb(null, isMatch);
    })
}

/**
 * 유저 token 생성 
 * @param {*} cb 
 */
userSchema.methods.generateToken = function(cb) {

    var user = this;

    //jsonwebtoken을 이용해서 token을 생성하기
    var token = jwt.sign(user._id.toHexString(), 'secretToken')
    
    //token = user._id + 'secretToken'
    //secretToken으로 user._id를 찾는 방식임.

    user.token = token //user db에 token 저장 
    user.save(function(err, user){
        if(err) return cb(err)
        cb(null, user)
    })
}

userSchema.statics.findByToken = function(token, cb) {
    var user = this;

    //cookie에 저장된 토큰을 decode 한다.  -> db의 user._id  
    jwt.verify(token, 'secretToken', function(err, decoded) {
        //유저 아이디(decoded)를 이용해서 유저를 찾은 다음에 
        //클라이언트에서 가져온 token과 DB에 보관된 토큰이 일치하는지 확인
        user.findOne({"_id": decoded, "token": token}, function(err, user){
            if(err) return cb(err);
            cb(null, user)
        })
    })
}

userSchema.methods.compareCoinApiKey = function(plainApiKey, cb) {
    //plainPassword 1234567 & 암호화된 비밀번호
    bcrypt.compare(plainApiKey, this.coinApiKey, function(err, isMatch){
        if(err) return cb(err)
        cb(null, isMatch)
    }) 
}


const User = mongoose.model('User',userSchema)

module.exports = { User }