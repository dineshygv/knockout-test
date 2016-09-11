import * as ko from "knockout";

var template = require("raw!./signup-page.html");

export default class SignupPageViewModel {
    email: string;
    userName: string;
    pageHeader: string;

    constructor(params){
        this.email = "Email";
        this.userName = " Sign Up";
        this.pageHeader = " Sign Up";
    }
}

ko.components.register('signup-page', {
	viewModel : SignupPageViewModel,
	template : template
});
