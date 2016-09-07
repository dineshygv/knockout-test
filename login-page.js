var ko = require("knockout");
var template = require("raw!./login-page.html");

function LoginPageModel(params){
    this.email = "Email";
    this.userName = " Hi, " + params.userName;
}

ko.components.register('login-page', {
    viewModel : LoginPageModel,
    template : template
});
