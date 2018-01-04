webpackJsonp(["dashboard.module"],{

/***/ "../../../../../src/app/dashboard/dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */],
        data: {
            title: 'Dashboard'
        }
    }
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());

//# sourceMappingURL=dashboard-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  \n  \n   \n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <table class=\"table table-responsive table-hover table-outline mb-0\">\n            <thead class=\"thead-default\">\n              <tr>\n                <th class=\"text-center\"><i class=\"icon-people\"></i></th>\n                <th>User</th> \n                <th>Attendance</th> \n                <th>Count</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let item of employeeAttendanceArrProcessed let i = index\">\n                <td class=\"text-center\">\n                  <div class=\"avatar\">\n                    <img src=\"assets/img/avatars/1.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\" src=\"assets/img/avatars/1.jpg\">\n                    <span class=\"avatar-status badge-success\"></span>\n                  </div>\n                </td>\n                <td>\n                  <div>{{item.name}}</div>\n                  <div class=\"small text-muted\">\n                    <span>New</span> | Registered: Jan 1, 2018\n                  </div>\n                </td>\n                \n                <td>\n                  <div class=\"clearfix\">\n                    <div class=\"float-left\" >\n                      <strong>1/2Present</strong>\n                    </div>\n                     <br>\n                     <div class=\"float-left\" >\n                      <strong>Absent</strong>\n                    </div>\n                    <br>\n                     <div class=\"float-left\" >\n                      <strong>On WeeklyOff</strong>\n                    </div>\n                    <br>\n                     <div class=\"float-left\" >\n                      <strong>Present</strong>\n                    </div>\n                    <br>\n                     <div class=\"float-left\" >\n                      <strong>on leave(CL)</strong>\n                    </div>\n                    <br>\n                     <div class=\"float-left\" >\n                      <strong>on leave(SL)</strong>\n                    </div>\n\n                    \n                    \n                  </div>\n                  \n                </td>\n                \n                <td> \n                  <strong>-: {{item[\"1/2Present\"]}}</strong>\n                  <br>\n                  <strong>-: {{item[\"Absent\"]}}</strong>\n                  <br>\n                  <strong>-: {{item[\"On WeeklyOff\"]}}</strong>\n                  <br>\n                  <strong>-: {{item[\"Present\"]}}</strong>\n                  <br>\n                  <strong>-: {{item[\"on leave(CL)\"]}}</strong>\n                  <br>\n                  <strong>-: {{item[\"on leave(SL)\"]}}</strong>\n                  <br>\n                </td>\n              </tr> \n            </tbody>\n          </table>\n    </div><!--/.col-->\n  </div><!--/.row-->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(dataService) {
        this.dataService = dataService;
        this.employeeAttendanceArr = [];
        this.employeeAttendanceArrProcessed = [];
        this.loadAttendance();
    }
    DashboardComponent.prototype.loadAttendance = function () {
        var _this = this;
        this.dataService.getPostData('http://kabanip-dev.us-east-1.elasticbeanstalk.com/getDistinctEmployeesO', null).subscribe(function (data) {
            _this.employeeAttendanceArr = data;
            _this.employeeAttendanceArr.forEach(function (item, index) {
                var obj = { name: "" };
                obj.name = item[1];
                obj[item[2]] = item[0];
                var nameArr = _this.employeeAttendanceArrProcessed.map(function (val) { return val.name; });
                index = nameArr.indexOf(item[1]);
                console.log(index);
                if (index < 0) {
                    _this.employeeAttendanceArrProcessed.push(obj);
                }
                else {
                    _this.employeeAttendanceArrProcessed[index][item[2]] = item[0];
                }
            });
            console.log("----" + JSON.stringify(_this.employeeAttendanceArrProcessed));
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a;
}());

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_routing_module__ = __webpack_require__("../../../../../src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__dashboard_routing_module__["a" /* DashboardRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__data_service__["a" /* DataService */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__dashboard_component__["a" /* DashboardComponent */]]
        })
    ], DashboardModule);
    return DashboardModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map