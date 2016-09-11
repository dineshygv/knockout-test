import * as ko from "knockout";

var template = require("raw!./login-page.html");

export default class LoginPageModel {
    email: string;
    userName: string;

    constructor(params){
        this.email = "Email";
        this.userName = " Login";
    }
}

ko.components.register('login-page', {
	viewModel : LoginPageModel,
	template : template
});
