const { User } = require("../models/User");

let auth = (req, res, next) => {

    // 인증 처리를 하는 곳

    //client 쿠키에서 token 가져오기 using 'cookei-parser'
    let token = req.cookies.x_auth;

    //token을 복호화한 후 유저를 찾는다.
    User.findByToken(token, (err, user) => {
        if(err) throw err;
        //유저가 없으면 인증 no!
        if(!user) return res.json({ isAuth: false, error: true})

        //유저가 있으면 인증 ok!
        req.token = token;
        req.user = user; //req에 저장 -> req 이용해서 유저 정보 참조 
        next(); //middleware -> 통과
    })
}

module.exports = { auth };