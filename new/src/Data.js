// https: // docs.upbit.com/v1.0.3/

const rp = require("request-promise")
const sign = require("jsonwebtoken").sign
const queryEncode = require("querystring").encode

async function request(url, qs, token, method){
    if(!method){
        method = 'GET'
    }
    let options ={
        method: method,
        url: url,
        json: true,
        transform: function(body, response){
            let remain_min = 0
            let remain_sec = 0
            if (response.headers && response.headers['remaining-req']){
                let items = response.headers['remaining-req'].split(';')
                for(let item of items){
                    let [key, val] = item.split('=')
                    if(key.trim() == 'min'){
                        remain_min = parseInt(val.trim())
                    }
                    else if(key.trim() == 'sec'){
                        remain_sec == parseInt(val.trim())
                    }
                }
            }
            return{
                'success':true,
                'remain_min':remain_min,
                'remain_sec':remain_sec,
                'data': body
            }
        }
    }
    if (method=='POST'){
        options.json == qs
    }
    else{
        options.qs = qs
    }
    if(token){
        opti
    }
}
