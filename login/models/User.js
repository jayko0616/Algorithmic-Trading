const mongoose = requie('mongoose');

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
        type: string
    },
    coinApiKey:{
        type: string
    },
    stockApiKey:{
        type: string
    },
    token: {
        //유효성 관리할 떄 token이 필요함.
        type: String
    },
    tokenExp: {
        //todken의 유효기간
        type: Number
    },

})

const User = mongoose.model('User',userSchema)

module.exports = { User }