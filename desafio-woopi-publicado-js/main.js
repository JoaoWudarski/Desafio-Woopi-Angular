(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\joaow\Desktop\desafio-woopi\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "HXYy":
/*!****************************************************!*\
  !*** ./src/app/show-users/show-users.component.ts ***!
  \****************************************************/
/*! exports provided: ShowUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowUsersComponent", function() { return ShowUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "xdv0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ShowUsersComponent_div_0_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "tr" + i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", user_r2.name, " ", user_r2.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2.tel1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2.tel2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2.teamId);
} }
function ShowUsersComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Usuarios Cadastrados");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Nome");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Nome de Usu\u00E1rio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Idade");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Telefone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Telefone 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Endere\u00E7o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Senha");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "ID Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ShowUsersComponent_div_0_tr_25_Template, 19, 11, "tr", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.userService.users);
} }
class ShowUsersComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
    }
}
ShowUsersComponent.ɵfac = function ShowUsersComponent_Factory(t) { return new (t || ShowUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
ShowUsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowUsersComponent, selectors: [["app-show-users"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "id", 4, "ngFor", "ngForOf"], [3, "id"]], template: function ShowUsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ShowUsersComponent_div_0_Template, 26, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userService.showUsers == true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG93LXVzZXJzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "OFKA":
/*!*************************!*\
  !*** ./src/app/Team.ts ***!
  \*************************/
/*! exports provided: Team */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Team", function() { return Team; });
class Team {
    constructor(id, name, color) {
        this.id = id;
        this.name = name;
        this.color = color;
    }
    ;
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _initial_view_initial_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initial-view/initial-view.component */ "Vx+b");
/* harmony import */ var _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-user/new-user.component */ "oT/u");
/* harmony import */ var _show_users_show_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-users/show-users.component */ "HXYy");
/* harmony import */ var _login_user_login_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-user/login-user.component */ "dot9");





class AppComponent {
    constructor() {
        this.title = 'desafio-woopi';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "background"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-initial-view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-new-user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-show-users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-login-user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_initial_view_initial_view_component__WEBPACK_IMPORTED_MODULE_1__["InitialViewComponent"], _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_2__["NewUserComponent"], _show_users_show_users_component__WEBPACK_IMPORTED_MODULE_3__["ShowUsersComponent"], _login_user_login_user_component__WEBPACK_IMPORTED_MODULE_4__["LoginUserComponent"]], styles: [".background[_ngcontent-%COMP%]{\r\n    background-color: gray;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG59Il19 */"] });


/***/ }),

/***/ "Vx+b":
/*!********************************************************!*\
  !*** ./src/app/initial-view/initial-view.component.ts ***!
  \********************************************************/
/*! exports provided: InitialViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialViewComponent", function() { return InitialViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "xdv0");


class InitialViewComponent {
    constructor(userService) {
        this.userService = userService;
        this.backgImage = '/assets/wlp_CBLOL.png';
    }
    ngOnInit() {
    }
    showLogin() {
        if (this.userService.showLogin == true)
            this.userService.showLogin = false;
        else {
            this.userService.showLogin = true;
            this.userService.showRegister = false;
            this.userService.showUsers = false;
        }
    }
    showRegister() {
        if (this.userService.showRegister == true)
            this.userService.showRegister = false;
        else {
            this.userService.showLogin = false;
            this.userService.showRegister = true;
            this.userService.showUsers = false;
        }
    }
    showUsers() {
        if (this.userService.showUsers == true)
            this.userService.showUsers = false;
        else {
            this.userService.showLogin = false;
            this.userService.showRegister = false;
            this.userService.showUsers = true;
        }
    }
}
InitialViewComponent.ɵfac = function InitialViewComponent_Factory(t) { return new (t || InitialViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
InitialViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InitialViewComponent, selectors: [["app-initial-view"]], decls: 7, vars: 0, consts: [["id", "buttons"], ["id", "btn1", "type", "button", 1, "btn", "first", 3, "click"], ["id", "btn2", "type", "button", 1, "btn", "first", 3, "click"], ["id", "btn3", "type", "button", 1, "btn", "first", 3, "click"]], template: function InitialViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InitialViewComponent_Template_button_click_1_listener() { return ctx.showUsers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mostrar usu\u00E1rios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InitialViewComponent_Template_button_click_3_listener() { return ctx.showRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Registrar Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InitialViewComponent_Template_button_click_5_listener() { return ctx.showLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Fazer Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: #2c3e50;\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 16px;\r\n  }\r\n  \r\n  body[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    align-content: center;\r\n  }\r\n  \r\n  h1[_ngcontent-%COMP%] {\r\n    color: #f1c40f;\r\n    font-size: 4rem;\r\n    text-transform: uppercase;\r\n    display: block;\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n  \r\n  @media screen and (max-width: 600px) {\r\n    h1[_ngcontent-%COMP%] {\r\n      font-size: 3rem;\r\n    }\r\n  }\r\n  \r\n  p[_ngcontent-%COMP%] {\r\n    color: #f1c40f;\r\n    font-size: 1.2rem;\r\n    width: 100%;\r\n    padding: 20px;\r\n    text-align: center;\r\n  }\r\n  \r\n  .btn[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n    -webkit-appearance: none;\r\n       -moz-appearance: none;\r\n            appearance: none;\r\n    background-color: rgb(0, 0, 0);\r\n    border: 2px solid #e74c3c;\r\n    border-radius: 0.6em;\r\n    color: #e74c3c;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-self: center;\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n    line-height: 1;\r\n    margin: 20px;\r\n    padding: 1.2em 2.8em;\r\n    text-decoration: none;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 700;\r\n  }\r\n  \r\n  .btn[_ngcontent-%COMP%]:hover, .btn[_ngcontent-%COMP%]:focus {\r\n    color: #fff;\r\n    outline: 0;\r\n  }\r\n  \r\n  .first[_ngcontent-%COMP%] {\r\n    transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;\r\n  }\r\n  \r\n  .first[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 0 40px 40px #e74c3c inset;\r\n  }\r\n  \r\n  #buttons[_ngcontent-%COMP%]{\r\n    width: 100vw;\r\n    height: 60vh;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: url('/assets/background_CBLOL.jpg');\r\n    \r\n    \r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaXRpYWwtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixxQ0FBcUM7SUFDckMsZUFBZTtFQUNqQjs7RUFFQTtJQUlFLGFBQWE7SUFHTCxlQUFlO0lBR2YsNkJBQTZCO0lBSTdCLG1CQUFtQjtJQUduQixxQkFBcUI7RUFDL0I7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtFQUNwQjs7RUFDQTtJQUNFO01BQ0UsZUFBZTtJQUNqQjtFQUNGOztFQUVBO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0Qix3QkFBd0I7T0FDckIscUJBQXFCO1lBQ2hCLGdCQUFnQjtJQUN4Qiw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsZUFBZTtJQUlmLGFBQWE7SUFHTCxrQkFBa0I7SUFDMUIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixxQ0FBcUM7SUFDckMsZ0JBQWdCO0VBQ2xCOztFQUNBO0lBQ0UsV0FBVztJQUNYLFVBQVU7RUFDWjs7RUFFQTtJQUVFLGlFQUFpRTtFQUNuRTs7RUFDQTtJQUNFLHVDQUF1QztFQUN6Qzs7RUFFRjtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLCtDQUErQztJQUMvQyxnQkFBZ0I7SUFDaEIsc0NBQXNDO0lBQ3RDLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6ImluaXRpYWwtdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmMzZTUwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgYm9keSB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgLW1zLWZsZXgtcGFjazogZGlzdHJpYnV0ZTtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAtbXMtZmxleC1saW5lLXBhY2s6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICBoMSB7XHJcbiAgICBjb2xvcjogI2YxYzQwZjtcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgaDEge1xyXG4gICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHAge1xyXG4gICAgY29sb3I6ICNmMWM0MGY7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmJ0biB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2U3NGMzYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNmVtO1xyXG4gICAgY29sb3I6ICNlNzRjM2M7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIC1tcy1mbGV4LWl0ZW0tYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMS4yZW0gMi44ZW07XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIC5idG46aG92ZXIsIC5idG46Zm9jdXMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gIH1cclxuICBcclxuICAuZmlyc3Qge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3gtc2hhZG93IDMwMG1zIGVhc2UtaW4tb3V0LCBjb2xvciAzMDBtcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMzAwbXMgZWFzZS1pbi1vdXQsIGNvbG9yIDMwMG1zIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICAuZmlyc3Q6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDQwcHggNDBweCAjZTc0YzNjIGluc2V0O1xyXG4gIH1cclxuICBcclxuI2J1dHRvbnN7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDYwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9iYWNrZ3JvdW5kX0NCTE9MLmpwZycpO1xyXG4gICAgLyogRnVsbCBoZWlnaHQgKi9cclxuICAgIC8qIENlbnRlciBhbmQgc2NhbGUgdGhlIGltYWdlIG5pY2VseSAqL1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-text-mask */ "904P");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-user/new-user.component */ "oT/u");
/* harmony import */ var _show_users_show_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-users/show-users.component */ "HXYy");
/* harmony import */ var _login_user_login_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-user/login-user.component */ "dot9");
/* harmony import */ var _initial_view_initial_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./initial-view/initial-view.component */ "Vx+b");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_2__["TextMaskModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_4__["NewUserComponent"],
        _show_users_show_users_component__WEBPACK_IMPORTED_MODULE_5__["ShowUsersComponent"],
        _login_user_login_user_component__WEBPACK_IMPORTED_MODULE_6__["LoginUserComponent"],
        _initial_view_initial_view_component__WEBPACK_IMPORTED_MODULE_7__["InitialViewComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        angular2_text_mask__WEBPACK_IMPORTED_MODULE_2__["TextMaskModule"]] }); })();


/***/ }),

/***/ "dot9":
/*!****************************************************!*\
  !*** ./src/app/login-user/login-user.component.ts ***!
  \****************************************************/
/*! exports provided: LoginUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginUserComponent", function() { return LoginUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "xdv0");
/* harmony import */ var _teams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../teams.service */ "s0ZW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function LoginUserComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Nome de Usu\u00E1rio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginUserComponent_div_0_div_1_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.username = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Senha");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginUserComponent_div_0_div_1_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginUserComponent_div_0_div_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Fazer Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.password);
} }
function LoginUserComponent_div_0_div_2_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginUserComponent_div_0_div_2_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r8.logoff(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Deslogar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginUserComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginUserComponent_div_0_div_2_button_4_Template, 2, 0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolateV"](["Ei, voc\u00EA ", ctx_r2.loginUser.name, " ", ctx_r2.loginUser.lastName, ", de ", ctx_r2.loginUser.age, " anos, que mora na ", ctx_r2.loginUser.address, " e que \u00E9 f\u00E3 da ", ctx_r2.team, " eSports, obrigado por se cadastrar!!. Assim que alguma informa\u00E7\u00E3o da ", ctx_r2.team, " sair, entraremos em contato por ", ctx_r2.loginUser.email, " ou por SMS em ", ctx_r2.loginUser.tel1, " como ", ctx_r2.loginUser.username, ". Obrigado!! "]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.getImageOfTeam(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.loginActive == true);
} }
function LoginUserComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginUserComponent_div_0_div_1_Template, 9, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginUserComponent_div_0_div_2_Template, 5, 11, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loginActive == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loginActive == true);
} }
class LoginUserComponent {
    constructor(userService, teamService) {
        this.userService = userService;
        this.teamService = teamService;
        this.loginActive = false;
    }
    ngOnInit() {
    }
    login() {
        for (var i = 0; i < this.userService.users.length; i++) {
            if (this.username == this.userService.users[i].username && this.password == this.userService.users[i].password) {
                this.loginActive = true;
                this.loginUser = this.userService.users[i];
                this.team = this.teamService.teams[this.loginUser.teamId - 1].name;
                return;
            }
        }
        this.loginActive = false;
        return false;
    }
    logoff() {
        this.loginActive = false;
    }
    getImageOfTeam() {
        return "/assets/" + this.teamService.teams[this.loginUser.teamId - 1].name + ".png";
    }
}
LoginUserComponent.ɵfac = function LoginUserComponent_Factory(t) { return new (t || LoginUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_teams_service__WEBPACK_IMPORTED_MODULE_2__["TeamsService"])); };
LoginUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginUserComponent, selectors: [["app-login-user"]], decls: 1, vars: 1, consts: [["class", "main", 4, "ngIf"], [1, "main"], [4, "ngIf"], ["type", "text", 3, "ngModel", "ngModelChange"], ["type", "password", 3, "ngModel", "ngModelChange"], ["type", "button", 3, "click"], [3, "src"], ["class", "btn-hover", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn-hover", 3, "click"]], template: function LoginUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoginUserComponent_div_0_Template, 3, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userService.showLogin == true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".main[_ngcontent-%COMP%]{\r\n    font-family: 'Montserrat', sans-serif;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFDQUFxQztBQUN6QyIsImZpbGUiOiJsb2dpbi11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbntcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "oT/u":
/*!************************************************!*\
  !*** ./src/app/new-user/new-user.component.ts ***!
  \************************************************/
/*! exports provided: NewUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserComponent", function() { return NewUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "xdv0");
/* harmony import */ var _teams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../teams.service */ "s0ZW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-text-mask */ "904P");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_5__);






function NewUserComponent_table_0_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Nome inv\u00E1lido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewUserComponent_table_0_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Sobrenome inv\u00E1lido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewUserComponent_table_0_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Idade inv\u00E1lida");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewUserComponent_table_0_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Email inv\u00E1lido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewUserComponent_table_0_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Endere\u00E7o inv\u00E1lido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { mask: a0 }; };
function NewUserComponent_table_0_tr_40_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Telefone 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewUserComponent_table_0_tr_40_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.user.tel2 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.user.tel2)("textMask", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r6.mask));
} }
function NewUserComponent_table_0_option_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const team_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", team_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](team_r12.name);
} }
function NewUserComponent_table_0_td_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Nome de usu\u00E1rio j\u00E1 existe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewUserComponent_table_0_td_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Senhas n\u00E3o correspondem");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewUserComponent_table_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nome");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewUserComponent_table_0_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.user.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NewUserComponent_table_0_td_7_Template, 2, 0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sobrenome");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewUserComponent_table_0_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.user.lastName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NewUserComponent_table_0_td_13_Template, 2, 0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Idade");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewUserComponent_table_0_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.user.age = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NewUserComponent_table_0_td_19_Template, 2, 0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewUserComponent_table_0_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.user.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, NewUserComponent_table_0_td_25_Template, 2, 0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Endere\u00E7o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewUserComponent_table_0_Template_input_ngModelChange_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.user.address = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, NewUserComponent_table_0_td_31_Template, 2, 0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Telefone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewUserComponent_table_0_Template_input_ngModelChange_36_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.user.tel1 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewUserComponent_table_0_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.telAppears(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, NewUserComponent_table_0_tr_40_Template, 5, 4, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Selecione o time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewUserComponent_table_0_Template_select_ngModelChange_46_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.user.teamId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "--Selecione--");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, NewUserComponent_table_0_option_49_Template, 2, 2, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "tr", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Nome de Usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewUserComponent_table_0_Template_input_ngModelChange_57_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.user.username = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, NewUserComponent_table_0_td_58_Template, 2, 0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tr", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Criar senha");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewUserComponent_table_0_Template_input_ngModelChange_63_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.user.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tr", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Repetir senha");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewUserComponent_table_0_Template_input_ngModelChange_68_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.senha = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, NewUserComponent_table_0_td_69_Template, 2, 0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewUserComponent_table_0_Template_button_click_72_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.addUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Adicionar Usu\u00E1rio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.nameValid() ? "backgroundRight" : "backgroundErrors");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.nameValid() == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.lastNameValid() ? "backgroundRight" : "backgroundErrors");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.user.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.lastNameValid() == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.user.age >= 18 ? "backgroundRight" : "backgroundErrors");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.user.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.user.age < 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.emailValid() ? "backgroundRight" : "backgroundErrors");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.emailValid() == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.addressValid() ? "backgroundRight" : "backgroundErrors");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.user.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.addressValid() == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.user.tel1)("textMask", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c0, ctx_r0.mask));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.nameButton());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.user.tel2Exists == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.user.teamId)("ngClass", ctx_r0.getColorTeam(ctx_r0.user.teamId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.teamsService.teams);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.getImageOfTeam(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.validUserName() ? "backgroundRight" : "backgroundErrors");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.validUserName() == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.validPassword() ? "backgroundRight" : "backgroundErrors");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.user.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.validPassword() ? "backgroundRight" : "backgroundErrors");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.senha);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.validPassword() == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.userValid() == false);
} }
class NewUserComponent {
    constructor(userService, teamsService) {
        this.userService = userService;
        this.teamsService = teamsService;
        this.mask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.user = {
            name: "exemplo",
            lastName: "costa",
            username: "xxxxxx",
            age: 18,
            email: "exemplo@dominio.com",
            tel1: "99999999999",
            tel2Exists: false,
            tel2: "",
            address: "Rua X, numero Y",
            password: "aaaaa",
            teamId: 1,
        };
    }
    ngOnInit() {
    }
    getImageOfTeam() {
        return "/assets/" + this.teamsService.teams[this.user.teamId - 1].name + ".png";
    }
    getColorTeam(id) {
        return this.teamsService.teams[id - 1].name;
    }
    getRegister() {
        return this.userService.showRegister;
    }
    addUser() {
        const copy = Object.assign({}, this.user);
        this.userService.addUser(copy);
    }
    telAppears() {
        if (this.user.tel2Exists == true)
            this.user.tel2Exists = false;
        else
            this.user.tel2Exists = true;
    }
    nameButton() {
        if (this.user.tel2Exists == true)
            return "Remover outro telefone";
        else
            return "Adicionar outro telefone";
    }
    emailValid() {
        if (this.user.email.indexOf(" ") == -1) {
            if (this.user.email.indexOf("@") != -1) {
                if (this.user.email.indexOf("@") != 0 && this.user.email.indexOf("@") != (this.user.email.length - 1)) {
                    const str1 = this.user.email.substring(this.user.email.indexOf("@"));
                    if (str1.indexOf(".") != -1 && str1.indexOf(".") != (str1.length - 1)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    userValid() {
        if (this.emailValid() && this.user.age >= 18 && this.validPassword() &&
            this.nameValid() && this.lastNameValid() && this.addressValid() &&
            this.validPassword() && this.validUserName())
            return true;
        else
            return false;
    }
    nameValid() {
        if (this.user.name != "" && this.user.name.length >= 3)
            return true;
        else
            return false;
    }
    lastNameValid() {
        if (this.user.lastName != "" && this.user.lastName.length >= 3)
            return true;
        else
            return false;
    }
    addressValid() {
        if (this.user.address != "" && this.user.address.length > 3)
            return true;
        else
            return false;
    }
    validPassword() {
        if (this.senha == this.user.password)
            return true;
        else
            return false;
    }
    validUserName() {
        for (var i = 0; i < this.userService.users.length; i++) {
            if (this.user.username == this.userService.users[i].username)
                return false;
        }
        return true;
    }
}
NewUserComponent.ɵfac = function NewUserComponent_Factory(t) { return new (t || NewUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_teams_service__WEBPACK_IMPORTED_MODULE_2__["TeamsService"])); };
NewUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewUserComponent, selectors: [["app-new-user"]], decls: 1, vars: 1, consts: [["id", "table", 4, "ngIf"], ["id", "table"], [3, "ngClass"], ["type", "text", 3, "ngModel", "ngModelChange"], ["class", "errors", 4, "ngIf"], ["type", "number", 3, "ngModel", "ngModelChange"], ["type", "email", 3, "ngModel", "ngModelChange"], ["TelefoneMask", "", "type", "text", 3, "ngModel", "textMask", "ngModelChange"], ["type", "button", 1, "btn", "fourth", 3, "click"], [4, "ngIf"], [3, "ngModel", "ngClass", "ngModelChange"], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], ["width", "70", 3, "src"], ["type", "password", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "fourth", 3, "disabled", "click"], [1, "errors"], [3, "value"]], template: function NewUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NewUserComponent_table_0_Template, 74, 34, "table", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getRegister());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_5__["MaskedInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".errors[_ngcontent-%COMP%]{\r\n    color: rgb(0, 0, 0);\r\n    font-family: Andale Mono, monospace;\r\n}\r\n\r\n.backgroundErrors[_ngcontent-%COMP%]{\r\n    background-color: #ff8800;\r\n}\r\n\r\n.backgroundRight[_ngcontent-%COMP%]{\r\n    background-color:#89D312;\r\n}\r\n\r\n.INTZ[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    color: black;\r\n}\r\n\r\n.PAIN[_ngcontent-%COMP%]{\r\n    background-color: crimson;\r\n    color: white;\r\n}\r\n\r\n.KABUM[_ngcontent-%COMP%]{\r\n    background-color: orange;\r\n    color: white;\r\n}\r\n\r\n.RED[_ngcontent-%COMP%]{\r\n    background-color: red;\r\n    color: white;\r\n}\r\n\r\n.FLAMENGO[_ngcontent-%COMP%]{\r\n    background-color: darkred;\r\n    color: black;\r\n}\r\n\r\n.CRUZEIRO[_ngcontent-%COMP%]{\r\n    background-color: blue;\r\n    color: white;\r\n}\r\n\r\n.LOUD[_ngcontent-%COMP%]{\r\n    background-color: lime;\r\n    color: white;\r\n}\r\n\r\n.VORAX[_ngcontent-%COMP%]{\r\n    background-color: rgb(77, 1, 77);\r\n    color: black;\r\n}\r\n\r\n.RENSGA[_ngcontent-%COMP%]{\r\n    background-color: yellow;\r\n    color: blue;\r\n}\r\n\r\n.FURIA[_ngcontent-%COMP%]{\r\n    background-color: black;\r\n    color: white;\r\n}\r\n\r\n#table[_ngcontent-%COMP%]{\r\n    font-family: Impact, fantasy;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n    -webkit-appearance: none;\r\n       -moz-appearance: none;\r\n            appearance: none;\r\n    background-color: rgb(0, 0, 0);\r\n    border: 2px solid #e74c3c;\r\n    border-radius: 0.6em;\r\n    color: #e74c3c;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-self: center;\r\n    font-size: 10px;\r\n    font-weight: 400;\r\n    line-height: 1;\r\n    margin: 20px;\r\n    padding: 1.2em 2.8em;\r\n    text-decoration: none;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 700;\r\n  }\r\n\r\n.btn[_ngcontent-%COMP%]:hover, .btn[_ngcontent-%COMP%]:focus {\r\n    color: #fff;\r\n    outline: 0;\r\n  }\r\n\r\n.fourth[_ngcontent-%COMP%] {\r\n    border-color: #e74c3c;\r\n    color: #fff;\r\n    background-image: linear-gradient(45deg, #e74c3c 50%, transparent 50%);\r\n    background-position: 100%;\r\n    background-size: 400%;\r\n    transition: background 300ms ease-in-out;\r\n  }\r\n\r\n.fourth[_ngcontent-%COMP%]:hover {\r\n    background-position: 0;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFHQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix3QkFBd0I7T0FDckIscUJBQXFCO1lBQ2hCLGdCQUFnQjtJQUN4Qiw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsZUFBZTtJQUlmLGFBQWE7SUFHTCxrQkFBa0I7SUFDMUIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixxQ0FBcUM7SUFDckMsZ0JBQWdCO0VBQ2xCOztBQUNBO0lBQ0UsV0FBVztJQUNYLFVBQVU7RUFDWjs7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixXQUFXO0lBRVgsc0VBQXNFO0lBQ3RFLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFFckIsd0NBQXdDO0VBQzFDOztBQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCIiwiZmlsZSI6Im5ldy11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3Jze1xyXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIGZvbnQtZmFtaWx5OiBBbmRhbGUgTW9ubywgbW9ub3NwYWNlO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZEVycm9yc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjg4MDA7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kUmlnaHR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM4OUQzMTI7XHJcbn1cclxuXHJcbi5JTlRae1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5QQUlOe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLktBQlVNe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uUkVEe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uRkxBTUVOR097XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uQ1JVWkVJUk97XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uTE9VRHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpbWU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5WT1JBWHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3NywgMSwgNzcpO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uUkVOU0dBe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbn1cclxuXHJcbi5GVVJJQXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuI3RhYmxle1xyXG4gICAgZm9udC1mYW1pbHk6IEltcGFjdCwgZmFudGFzeTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2U3NGMzYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNmVtO1xyXG4gICAgY29sb3I6ICNlNzRjM2M7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIC1tcy1mbGV4LWl0ZW0tYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMS4yZW0gMi44ZW07XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIC5idG46aG92ZXIsIC5idG46Zm9jdXMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gIH1cclxuXHJcbiAgLmZvdXJ0aCB7XHJcbiAgICBib3JkZXItY29sb3I6ICNlNzRjM2M7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZTc0YzNjIDUwJSwgdHJhbnNwYXJlbnQgNTAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2U3NGMzYyA1MCUsIHRyYW5zcGFyZW50IDUwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA0MDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDMwMG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAzMDBtcyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgLmZvdXJ0aDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwO1xyXG4gIH1cclxuICAiXX0= */"] });


/***/ }),

/***/ "s0ZW":
/*!**********************************!*\
  !*** ./src/app/teams.service.ts ***!
  \**********************************/
/*! exports provided: TeamsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsService", function() { return TeamsService; });
/* harmony import */ var _Team__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Team */ "OFKA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TeamsService {
    constructor() {
        this.teams = [
            new _Team__WEBPACK_IMPORTED_MODULE_0__["Team"](1, 'INTZ', 'gray'),
            new _Team__WEBPACK_IMPORTED_MODULE_0__["Team"](2, 'PAIN', 'crimson'),
            new _Team__WEBPACK_IMPORTED_MODULE_0__["Team"](3, 'KABUM', 'orange'),
            new _Team__WEBPACK_IMPORTED_MODULE_0__["Team"](4, 'RED', 'red'),
            new _Team__WEBPACK_IMPORTED_MODULE_0__["Team"](5, 'FLAMENGO', 'darkred'),
            new _Team__WEBPACK_IMPORTED_MODULE_0__["Team"](6, 'CRUZEIRO', 'blue'),
            new _Team__WEBPACK_IMPORTED_MODULE_0__["Team"](7, 'FURIA', 'black'),
            new _Team__WEBPACK_IMPORTED_MODULE_0__["Team"](8, 'LOUD', 'lime'),
            new _Team__WEBPACK_IMPORTED_MODULE_0__["Team"](9, 'VORAX', 'purple'),
            new _Team__WEBPACK_IMPORTED_MODULE_0__["Team"](10, 'RENSGA', 'yellow'),
        ];
    }
}
TeamsService.ɵfac = function TeamsService_Factory(t) { return new (t || TeamsService)(); };
TeamsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TeamsService, factory: TeamsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "xdv0":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class UserService {
    constructor() {
        this.users = [];
        this.showLogin = false;
        this.showUsers = false;
        this.showRegister = false;
    }
    addUser(user) {
        if (!user.tel2Exists)
            user.tel2 = "";
        this.users.push(user);
        console.log(user);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map