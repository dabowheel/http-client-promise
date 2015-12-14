# A Node.js http wrapper module that supports promises

## example:
    "use strict";
    let $http = require("http-client-promise");

    let options = {
      hostname: "api.openweathermap.org",
      port: 80,
      method: "GET",
      path: "/data/2.5/weather?q=albuquerque,us&units=imperial&appid=97deb1a62310b51f6a07885321377d5d"
    };

    $http.request(options).then(function (res) {
      return res.getData().then(function (body) {
        if (res.statusCode != 200) {
          console.log(body);
          return;
        }
        
        let obj = JSON.parse(body);
        console.log("temp", obj.main.temp);
      });
    });
