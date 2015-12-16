"use strict";
let $http = require("http-client-promise");

let options = {
  hostname: "api.openweathermap.org",
  port: 80,
  method: "GET",
  path: "/data/2.5/weather?q=london,uk&units=imperial&appid=2de143494c0b295cca9337e1e96b00e0"
};

$http.request(options).then(function (res) {
  return res.getData().then(function (body) {
    let obj = JSON.parse(body);
    console.log("The temperature in London is " + obj.main.temp + " °F");
  });
});
