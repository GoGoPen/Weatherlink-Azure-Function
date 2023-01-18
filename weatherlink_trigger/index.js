//var _ = require("lodash");
//const request = require('request');
//var fetchUrl = require("fetch").fetchUrl;
const CryptoJS = require("crypto-js");
const axios =require('axios');

module.exports = async function (context, req) {

    context.log('JavaScript HTTP trigger function processed a request.');

    const api_secret = '';
    const api_key_v2 = '';
    const station_id = '';

    var t = Math.round((new Date()).getTime() / 1000);

    var stringToHash = `api-key${api_key_v2}station-id${station_id}t${t}`;

    var apiSignature = CryptoJS.HmacSHA256(stringToHash, api_secret).toString(CryptoJS.enc.Hex); 

    var current_conditions_link = `https://api.weatherlink.com/v2/current/${station_id}?api-key=${api_key_v2}&api-signature=${apiSignature}&t=${t}`;

    context.log("Sending API call to the weather link.");

    let data;
    const response = await axios.get(current_conditions_link, {data});
    let response_data = response.data;
    context.res.headers = { "Content-Type": "application/json" };
    context.res.body = JSON.stringify(response_data);
}

