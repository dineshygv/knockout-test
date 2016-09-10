var ko = require("knockout");
var template = require("raw!./signup-page.html");

function SignupPageModel(params){
    this.email = " Email";
    this.pageHeader = " Sign Up";
}

ko.components.register('signup-page', {
    viewModel : SignupPageModel,
    template : template
});
