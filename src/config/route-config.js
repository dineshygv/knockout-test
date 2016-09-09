var page = require("page");
var $ = require("jquery");
var ko = require("knockout");

var loginPage = require("../pages/login-page/login-page");
var signupPage = require("../pages/signup-page/signup-page");


/**
 * Setting base to /# is required to add hash param to URL
 * Without this, page.js directly sets page URL which casuses
 * a 404 when the page is reloaded
 */
page.base('/#');

/**
 * routeSettings.page should match the name of the page component.
 * routeSettings.pageParams are additional params obtained from URL to 
 * pass to the page component.
 */
var routeSettings = ko.observable({
    page : '',
    pageParams : {}
});

page(['/', 'login'], function() {    
    routeSettings({
        page : 'login-page',
        pageParams : {}    
    });
});

page('signup', function() {
    routeSettings({
        page : 'signup-page',
        pageParams : {}    
    });
});

$(function() {
    page.start();    
    ko.applyBindings(routeSettings, document.getElementById("container"));
});