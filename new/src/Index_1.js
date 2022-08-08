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

const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open('GET', 'https://api.upbit.com/v1/candles/minutes/1?market=KRW-BTC&count=1');
xhr.setRequestHeader('Accept', 'application/json');

xhr.send(data);
