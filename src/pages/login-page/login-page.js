var ko = require("knockout");
var template = require("raw!./login-page.html");

function LoginPageModel(params){
    this.email = "Email";
    this.userName = " Login";
}

ko.components.register('login-page', {
    viewModel : LoginPageModel,
    template : template
});
