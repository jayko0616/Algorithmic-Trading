const request = require('request')
const uuidv4 = require("uuid/v4")
const sign = require('jsonwebtoken').sign

const access_key = "12QjuUlhZ7My1yDs3fCPqOx6OzNQhJa6xUMk7Rqk"
const secret_key = "6mZRDpZh8r8NvEP0AVNUurmruxx5r8NN9gQnrG7f"
const server_url = "https://api.upbit.com"

const payload = {
    access_key: access_key,
    nonce: uuidv4(),
}

const token = sign(payload, secret_key)

const options = {
    method: "GET",
    url: server_url + "/v1/accounts",
    headers: {Authorization: `Bearer ${token}`},
}

request(options, (error, response, body) => {
    if (error) throw new Error(error)
    console.log(body)
})

async function market_minute(market, unit, to, count) {
    //unit:  1, 3, 5, 15, 10, 30, 60, 240
    //to: yyyy-MM-dd'T'HH:mm:ssXXX
    const url = 'https://api.upbit.com/v1/candles/minutes/'+unit
    let qs = {market:market}
    if (to) qs.to = to
    if (count) qs.count = count

    let result = await request(url, qs)
    return result
}

