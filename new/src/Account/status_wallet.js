const request = require('request')
const uuidv4 = require("uuid")
const sign = require('jsonwebtoken').sign

const access_key = '3Gqypce2hxLoIBxhJ32ePNsMx9gC5KWx1R0zYZ5e'
const secret_key = '4QIpwATaUkT8UiXZ2bqzh1EwN6tZUanUEouxAwLS'
const server_url = 'https://api.upbit.com'

const payload = {
    access_key: access_key,
    nonce: uuidv4.v4(),
}

const token = sign(payload, secret_key)

const options = {
    method: "GET",
    url: server_url + "/v1/status/wallet",
    headers: {Authorization: `Bearer ${token}`},
}

request(options, (error, response, body) => {
    if (error) throw new Error(error)
    console.log(body)
})