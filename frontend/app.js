"use strict";
document.getElementsById('loginButton').onclick = function () {
    require.ensure(['./login'], function (require) {
        let login = require("./login");
        login();
    });

    // require(['./login'], function (login) {
    //     login();
    // })


};