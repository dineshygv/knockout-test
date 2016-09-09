var routeConfig = require("./config/route-config");

/**
 * Bootstrap needs jQuery exposed as global variable.
 * Webpack-expose loader exposes $ and jquery as globals
 * https://github.com/gowravshekar/bootstrap-webpack
 */
require('expose?$!expose?jQuery!jquery');
var boostrap = require("bootstrap");

