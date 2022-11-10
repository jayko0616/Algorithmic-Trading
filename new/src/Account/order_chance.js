const request = require('request')
const uuidv4 = require("uuid")
const crypto = require('crypto')
const sign = require('jsonwebtoken').sign
const queryEncode = require("querystring").encode

const access_key = '3Gqypce2hxLoIBxhJ32ePNsMx9gC5KWx1R0zYZ5e'
const secret_key = '4QIpwATaUkT8UiXZ2bqzh1EwN6tZUanUEouxAwLS'
const server_url = 'https://api.upbit.com'

const state = 'done'
const uuids = [
    '9ca023a5-851b-4fec-9f0a-48cd83c2eaae',
    //...
]

const non_array_body = {
    state: state,
}
const array_body = {
    uuids: uuids,
}
const body = {
    ...non_array_body,
    ...array_body
}

const uuid_query = uuids.map(uuid => `uuids[]=${uuid}`).join('&')
const query = queryEncode(non_array_body) + '&' + uuid_query

const hash = crypto.createHash('sha512')
const queryHash = hash.update(query, 'utf-8').digest('hex')

const payload = {
    access_key: access_key,
    nonce: uuidv4.v4(),
    query_hash: queryHash,
    query_hash_alg: 'SHA512',
}

const token = sign(payload, secret_key)

const options = {
    method: "GET",
    url: server_url + "/v1/orders?" + query,
    headers: {Authorization: `Bearer ${token}`},
    json: body
}

request(options, (error, response, body) => {
    if (error) throw new Error(error)
    console.log(body)
})