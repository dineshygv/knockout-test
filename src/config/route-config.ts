import * as page from "page";
import * as ko from "knockout";
import * as $ from "jquery";

/**
 * If you import a module but don't use it,
 * ts compiler will remove it from the compiled file.
 * The work-around is to use plain require which typescript
 * won't understand but webpack will bundle the file.
 */
require("../pages/login-page/login-page.ts");
require("../pages/signup-page/signup-page.ts");

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
let routeSettings = ko.observable({
    page : '',
    pageParams : {}
});

let goToLoginPage =  () => {
    routeSettings({
        page : 'login-page',
        pageParams : {}    
    });
}

page('/', goToLoginPage);
page('login', goToLoginPage);

page('signup', () => {
    routeSettings({
        page : 'signup-page',
        pageParams : {}    
    });
});

$(() => {
    page.start();    
    ko.applyBindings(routeSettings, document.getElementById("container"));
});