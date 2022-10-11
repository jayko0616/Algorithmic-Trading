const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds= 10 ;
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    id: {
        type: String,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    email: {
        type: String,
        //공백 있을 시 없애주는 역할
        trim: true,
        //중복 금지
        unique: 1
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
    stockApiKey:{
        type: String
    },
    role:{
        type: Number,
        default: 0
    },
    token: {
        //유효성 관리할 떄 token이 필요함.
        type: String
    },
    tokenExp: {
        //todken의 유효기간
        type: Number
    }

})


//index.js의 register router에서 정보들을 저장하기 전에 시행하는 함수
userSchema.pre('save', function( next ){
    //위의 내용들 가르킴
    var user = this;

    //비밀번호를 바꿨을 시에만 암호화 재설정을 위해 if문을 사용한 것
    if (user.isModified('password')){
        //비밀번호를 암호화
     bcrypt.genSalt(saltRounds, function(err, salt){
            if (err) return next(err)

            bcrypt.hash( user.password, salt, function (err, hash){
                if (err) return next(err)
                user.password = hash
                next()
        })
    })

    } else {
        next()
    }
})


//입력받은 비밀번호와 db에있는 비밀번호와 일치하는지 확인하는 함수
userSchema.methods.comparePassword = function(plainPassword, cb){
    // 입력받은 비밀번호를 암호화한 뒤 데이터베이스에 있는 암호화 된 비밀번호와 비교해야함!
    bcrypt.compare(plainPassword, this.password, function(err, isMatch){
        if(err) return cb(err),
            cb(null, isMatch)
    })
}


userSchema.methods.generateToken = function(cb) {

    var user = this;

    //jsonwebtoken을 이용해서 token을 생성하기
    var token = jwt.sign(user._id.toHexString(), 'secretToken')

    //token = user._id + 'secretToken'
    //secretToken으로 user._id를 찾는 방식임.

    user.token = token
    user.save(function(err, user){
        if(err) return cb(err)
        cb(null, user)
    })


}



const User = mongoose.model('User',userSchema)

module.exports = { User }