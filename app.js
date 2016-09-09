var page = require("page");
var ko = require("knockout");
var $ = require("jquery");
var loginPage = require("./login-page");

/**
 * Bootstrap needs jQuery exposed as global variable.
 * Webpack-expose loader exposes $ and jquery as globals
 * https://github.com/gowravshekar/bootstrap-webpack
 */
require('expose?$!expose?jQuery!jquery');
var boostrap = require("bootstrap");

/**
 * Setting base to /# is required to add hash param to URL
 * Without this, page.js directly sets page URL which casuses
 * a 404 when the page is reloaded
 */
page.base('/#');

/**
 * These are default route settings. * 
 * routeSettings.page should match the name of the page component.
 * routeSettings.pageParams are additional params obtained rom URL to 
 * pass to the page component.
 */
var routeSettings = {
    page : 'login-page',
    pageParams : {}    
};

/**
 * Home page is the login-page.
 * TODO: Move route config to its own config file
 */
page('/', function(){
    routeSettings.page = "login-page";
    routeSettings.pageParams = {};
});

$(function() {
    page.start();
    ko.applyBindings(routeSettings, document.getElementById("container"));
});
