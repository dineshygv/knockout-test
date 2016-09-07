
var ko = require("knockout");
var $ = require("jquery");
var loginPage = require("./login-page");

var pageParams = {
    page : 'login-page',
    pageParams : {
        userName : "Ludo"
    }    
};

$(function() {
    ko.applyBindings(pageParams, document.getElementById("container"));
});
