"use strict";
let $http = require("../$http.js");
let assert = require("assert");

describe("$http", function () {
  it("should request", function () {
    let options = {
      hostname: "api.openweathermap.org",
      port: 80,
      method: "GET",
      path: "/data/2.5/weather?q=albuquerque,us&units=imperial&appid=97deb1a62310b51f6a07885321377d5d"
    };

    return $http.request(options).then(function (res) {
      return res.getData().then(function (body) {
        assert.equal(res.statusCode, 200, body);
        let obj = JSON.parse(body);
        assert(obj.main.temp)
      });
    });
  });
});
