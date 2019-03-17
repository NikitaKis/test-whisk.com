"use strict";
const rp = require("request-promise");

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": true
};

function successResponse(params) {
  return { statusCode: 200, headers, body: JSON.stringify(params) };
}

module.exports.recipes_search = (event, context, callback) => {
  const headers = {
    Authorization: `Token ${process.env.TOKEN}`,
    Accept: "application/json"
  };
  var queryParamsStr = "https://graph.whisk.com/v1/search";
  if (event.queryStringParameters) {
    var queryParams = Object.keys(event.queryStringParameters).map(function(key) {
      var obj = key + "=" + event.queryStringParameters[key];
      return obj;
    });
    queryParamsStr += "?" + queryParams.join("&");
  }
  const paramsGet = {
    uri: queryParamsStr,
    method: "GET",
    headers,
    json: true,
    timeout: 10000,
    agent: false
  };
  rp(paramsGet)
    .then(response => {
      console.log("response is ", JSON.stringify(response, null, 2));
      callback(null, successResponse({ ...response }));
    })
    .catch(err => {
      console.log("err is ", err);
      callback(err);
    });
};
