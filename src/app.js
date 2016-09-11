var routeConfig = require("./config/route-config");
var tstest = require("./tstest.ts").default;

console.log(new tstest("dinesh").print());

/**
 * Bootstrap needs jQuery exposed as global variable.
 * Webpack-expose loader exposes $ and jquery as globals
 * https://github.com/gowravshekar/bootstrap-webpack
 */
require('expose?$!expose?jQuery!jquery');
var boostrap = require("bootstrap");

