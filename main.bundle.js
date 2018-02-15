webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/allMaterialModule.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AllMaterialModule = /** @class */ (function () {
    function AllMaterialModule() {
    }
    AllMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatPseudoCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatOptionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatSnackBarModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatPseudoCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatOptionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatSnackBarModule */]
            ],
        })
    ], AllMaterialModule);
    return AllMaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-sidenav-layout.m2app-dark \n{\n    background: black;\n  }\n  \n  .app-content {\n    padding: 20px;\n  }\n  \n  .app-content mat-card {\n    margin: 20px;\n  }\n  \n  .app-sidenav {\n    padding: 10px;\n    min-width: 100px;\n  }\n  \n  .app-content mat-checkbox {\n    margin: 10px;\n  }\n  \n  .app-toolbar-filler {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n  }\n  \n  .app-toolbar-menu {\n    padding: 0 14px 0 14px;\n    color: white;\n  }\n  \n  .app-icon-button {\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    background: none;\n    border: none;\n    cursor: pointer;\n    -webkit-filter: none;\n            filter: none;\n    font-weight: normal;\n    height: auto;\n    line-height: inherit;\n    margin: 0;\n    min-width: 0;\n    padding: 0;\n    text-align: left;\n    text-decoration: none;\n  }\n  \n  .app-action {\n    display: inline-block;\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n  }\n  \n  .app-spinner {\n    height: 30px;\n    width: 30px;\n    display: inline-block;\n  }\n  \n  .app-input-icon {\n    font-size: 16px;\n  }\n  \n  .app-list {\n    border: 1px solid rgba(0,0,0,0.12);\n    width: 350px;\n    margin: 20px;\n  }\n  \n  .app-progress {\n    margin: 20px;\n  }\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-sidenav-layout>\n  \n      \n    <mat-toolbar color=\"primary\">\n    \n      Aile Ağacı\n  \n      <span class=\"app-toolbar-filler\"></span>\n    </mat-toolbar>\n  \n    <div class=\"app-content\">\n  \n      <mat-card class=\"form-container\">\n          <mat-form-field>\n              <textarea [(ngModel)]=\"txt\" matInput placeholder=\"\" rows=\"10\"></textarea>              \n          </mat-form-field>          \n        \n        <button mat-button (click)=\"parse()\">Göster</button>        \n      </mat-card>\n\n\n      <mat-card>\n          <mat-tab-group>\n            <mat-tab label=\"Soy Ağacı\">\n              <h3 *ngIf=\"isLoaded\">Üst Soy</h3>\n              <div style=\"border:1px solid gray;\">\n                <chart-component [treeDataSource]=\"treeDataSource_parents\"></chart-component>\n              </div>\n\n              <h3 *ngIf=\"isLoaded\">Alt Soy</h3>\n              <div style=\"border:1px solid gray;\">\n                <chart-component [treeDataSource]=\"treeDataSource_childs\"></chart-component>\n              </div>      \n            </mat-tab>\n\n\n            <mat-tab label=\"Liste\">\n                <mat-table #table [datasource]=\"items\">\n\n                    \n\n                    <!-- rows -->\n                    <ng-container *ngFor=\"let col of columns\" matColumnDef=\"{{col.name}}\">\n                      <mat-header-cell *matHeaderCellDef>{{col.title}}</mat-header-cell>\n                      <mat-cell *matCellDef=\"let element\"> {{element[col.name]}} </mat-cell>\n                    </ng-container>\n                    \n                                \n                    <mat-header-row *matHeaderRowDef=\"columnNames\"></mat-header-row>\n                    <mat-row *matRowDef=\"let row; columns: columnNames;\"></mat-row>\n                </mat-table>\n                \n            </mat-tab>\n\n          </mat-tab-group>\n        </mat-card>\n    </div>\n  \n  </mat-sidenav-layout>\n  \n  <!-- <span class=\"app-action\">\n    <button mat-fab><mat-icon>check circle</mat-icon></button>\n  </span> -->\n  "

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ParserService__ = __webpack_require__("../../../../../src/app/services/ParserService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_UtilsService__ = __webpack_require__("../../../../../src/app/services/UtilsService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_PersonTreeService__ = __webpack_require__("../../../../../src/app/services/PersonTreeService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(parserService, utilsService, personTreeService) {
        this.parserService = parserService;
        this.utilsService = utilsService;
        this.personTreeService = personTreeService;
        this.txt = "";
        this.items = [];
        this.columns = [
            { name: "no", title: "No" },
            { name: "degree", title: "Yakınlık" },
            { name: "degreeCode", title: "Yakınlık Kodu" },
            { name: "gender", title: "Cinsiyet" },
            { name: "name", title: "Ad" },
            { name: "surname", title: "Soyad" },
        ];
        this.nodeSelf = {
            type: "",
            person: null,
            parentlist: [],
            childlist: []
        };
        this.isLoaded = false;
        this.treeDataSource_childs = { childsProp: "childlist", nodeself: this.nodeSelf };
        this.treeDataSource_parents = { childsProp: "parentlist", nodeself: this.nodeSelf };
        this.columnNames = this.getColNames(this.columns);
    }
    AppComponent.prototype.getColNames = function (cols) {
        var list = [];
        if (cols != null) {
            for (var i = 0; i < cols.length; i++) {
                var col = cols[i];
                list.push(col.name);
            }
        }
        return list;
    };
    AppComponent.prototype.parse = function () {
        var items = this.parserService.parse(this.txt);
        this.items = items;
        this.isLoaded = true;
        this.nodeSelf = this.personTreeService.generate(items);
        this.treeDataSource_childs = { childsProp: "childlist", nodeself: this.nodeSelf };
        this.treeDataSource_parents = { childsProp: "parentlist", nodeself: this.nodeSelf };
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_ParserService__["a" /* ParserService */], __WEBPACK_IMPORTED_MODULE_2__services_UtilsService__["a" /* UtilsService */], __WEBPACK_IMPORTED_MODULE_3__services_PersonTreeService__["a" /* PersonTreeService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__allMaterialModule__ = __webpack_require__("../../../../../src/app/allMaterialModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_ParserService__ = __webpack_require__("../../../../../src/app/services/ParserService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_ColumnNameListPipe__ = __webpack_require__("../../../../../src/app/pipes/ColumnNameListPipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_PersonTreeService__ = __webpack_require__("../../../../../src/app/services/PersonTreeService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_UtilsService__ = __webpack_require__("../../../../../src/app/services/UtilsService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_chart_component__ = __webpack_require__("../../../../../src/app/components/chart.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_chart_component__["a" /* ChartComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pipes_ColumnNameListPipe__["a" /* ColumnNameListPipePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__allMaterialModule__["a" /* AllMaterialModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__services_ParserService__["a" /* ParserService */],
                __WEBPACK_IMPORTED_MODULE_9__services_UtilsService__["a" /* UtilsService */],
                __WEBPACK_IMPORTED_MODULE_8__services_PersonTreeService__["a" /* PersonTreeService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"{{idName}}\"></div>"

/***/ }),

/***/ "../../../../../src/app/components/chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_UtilsService__ = __webpack_require__("../../../../../src/app/services/UtilsService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_PersonTreeService__ = __webpack_require__("../../../../../src/app/services/PersonTreeService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChartComponent = /** @class */ (function () {
    function ChartComponent(utilsService, personTreeService) {
        var _this = this;
        this.utilsService = utilsService;
        this.personTreeService = personTreeService;
        this.idName = "chartBody";
        this.d3 = null;
        this.tree = null;
        this.diagonal = null;
        this.vis = null;
        this.m = null;
        this.w = null;
        this.h = null;
        this.getChilds = function (d) {
            var childs = d[_this.treeDataSource.childsProp];
            return childs;
        };
        this.setChilds = function (d, childs) {
            d[_this.treeDataSource.childsProp] = childs;
        };
        this.prepareNode = function (parentNode) {
            if (parentNode == null) {
                return;
            }
            delete parentNode.id;
            delete parentNode.x;
            delete parentNode.y;
            delete parentNode.x0;
            delete parentNode.y0;
            delete parentNode.depth;
            delete parentNode._childlist;
            var childs = _this.getChilds(parentNode);
            if (childs != null) {
                for (var i = 0; i < childs.length; i++) {
                    var child = childs[i];
                    _this.prepareNode(child);
                }
            }
        };
        this.func_d3_json = function () {
            var root = _this.treeDataSource.nodeself;
            root.x0 = _this.h / 2;
            root.y0 = 0;
            _this.update();
        };
        this.toggleAll = function (d) {
            var childs = _this.getChilds(d);
            if (childs != null && childs.length > 0) {
                childs.forEach(_this.toggleAll);
                _this.toggle(d);
            }
        };
        this.getNodeTitle = function (d) {
            return d.person.name + " " + d.person.surname;
        };
        this.func_nodeEnter_append3 = function (d) {
            var childs = _this.getChilds(d);
            return ((childs != null && childs.length > 0) || (d._childlist != null && d._childlist.length > 0)) ? "end" : "start";
        };
        this.func_nodeEnter_append2 = function (d) {
            var childs = _this.getChilds(d);
            return ((childs != null && childs.length > 0) || (d._childlist != null && d._childlist.length > 0)) ? -10 : 10;
        };
        this.funct_node_enter_append_click = function (d) {
            _this.toggle(d);
            _this.update();
        };
        this.funct_node_enter_append = function (d) {
            var root = _this.treeDataSource.nodeself;
            return "translate(" + root.y0 + "," + root.x0 + ")";
        };
        this.func_node_exit_transition = function (d) {
            var root = _this.treeDataSource.nodeself;
            return "translate(" + root.y + "," + root.x + ")";
        };
        this.func_link_exit_transition = function (d) {
            var root = _this.treeDataSource.nodeself;
            var o = { x: root.x, y: root.y };
            return _this.diagonal({ source: o, target: o });
        };
        this.func_svgpath_diagonal = function (d) {
            var root = _this.treeDataSource.nodeself;
            var o = { x: root.x0, y: root.y0 };
            return _this.diagonal({ source: o, target: o });
        };
        // Toggle childlist.
        this.toggle = function (d) {
            var childs = _this.getChilds(d);
            if (childs) {
                d._childlist = childs;
                _this.setChilds(d, null);
            }
            else {
                _this.setChilds(d, d._childlist);
                d._childlist = null;
            }
        };
        this.idName = "chartBody_" + (Math.floor(Math.random() * 100) + 1);
        var w = window;
        this.d3 = w.d3;
    }
    Object.defineProperty(ChartComponent.prototype, "treeDataSource", {
        get: function () {
            return this._treeDataSource;
        },
        set: function (value) {
            this._treeDataSource = value;
            this.onDatasourceChanged();
        },
        enumerable: true,
        configurable: true
    });
    ChartComponent.prototype.onDatasourceChanged = function () {
        this.prepareNode(this.treeDataSource.nodeself);
        var m = [20, 20, 20, 220];
        var w = 1280 - m[1] - m[3];
        var h = 600 - m[0] - m[2];
        var i = 0;
        this.tree = this.d3.layout
            .tree()
            .children(this.getChilds)
            .size([h, w]);
        this.diagonal = this.d3.svg.diagonal().projection(function (d) {
            return [d.y, d.x];
        });
        var body = this.d3.select("#" + this.idName);
        //body.enter().append("svg:svg");
        body.html("");
        this.vis = body.append("svg:svg")
            .attr("width", w + m[1] + m[3])
            .attr("height", h + m[0] + m[2])
            .append("svg:g")
            .attr("transform", "translate(" + m[3] + "," + m[0] + ")");
        this.func_d3_json();
    };
    ChartComponent.prototype.update = function () {
        var duration = this.d3.event && this.d3.event.altKey ? 5000 : 500;
        var root = this.treeDataSource.nodeself;
        // Compute the new tree layout.
        var nodes = this.tree.nodes(root).reverse();
        // Normalize for fixed-depth.
        nodes.forEach(function (d) {
            d.y = d.depth * 180;
        });
        // Update the nodes…
        var i = 0;
        var node = this.vis.selectAll("g.node")
            .data(nodes, function (d) {
            return d.id || (d.id = ++i);
        });
        // Enter any new nodes at the parent's previous position.
        var nodeEnter = node.enter().append("svg:g")
            .attr("class", "node")
            .attr("transform", this.funct_node_enter_append)
            .on("click", this.funct_node_enter_append_click);
        nodeEnter.append("svg:circle")
            .attr("r", 20)
            .style("fill", function (d) {
            return (d._childlist != null && d._childlist.length > 0) ? "lightsteelblue" : "#fff";
        });
        nodeEnter.append('a')
            .attr('xlink:href', function (d) {
            return d.url;
        })
            .append("svg:text")
            .attr("x", this.func_nodeEnter_append2)
            .attr("dy", ".35em")
            .attr("text-anchor", this.func_nodeEnter_append3)
            .text(this.getNodeTitle)
            .style('fill', function (d) {
            return d.free ? 'black' : '#999';
        })
            .style("fill-opacity", 1e-6);
        nodeEnter.append("svg:title")
            .text(this.getNodeTitle);
        // Transition nodes to their new position.
        var nodeUpdate = node.transition()
            .duration(duration)
            .attr("transform", function (d) {
            return "translate(" + d.y + "," + d.x + ")";
        });
        nodeUpdate.select("circle")
            .attr("r", 6)
            .style("fill", function (d) {
            return (d._childlist != null && d._childlist.length > 0) ? "lightsteelblue" : "#fff";
        });
        nodeUpdate.select("text")
            .style("fill-opacity", 1);
        // Transition exiting nodes to the parent's new position.
        var nodeExit = node.exit().transition()
            .duration(duration)
            .attr("transform", this.func_node_exit_transition)
            .remove();
        nodeExit.select("circle")
            .attr("r", 1e-6);
        nodeExit.select("text")
            .style("fill-opacity", 1e-6);
        // Update the links…
        var link = this.vis.selectAll("path.link")
            .data(this.tree.links(nodes), function (d) {
            return d.target.id;
        });
        // Enter any new links at the parent's previous position.        
        link.enter().insert("svg:path", "g")
            .attr("class", "link")
            .attr("d", this.func_svgpath_diagonal)
            .transition()
            .duration(duration)
            .attr("d", this.diagonal);
        // Transition links to their new position.
        link.transition()
            .duration(duration)
            .attr("d", this.diagonal);
        // Transition exiting nodes to the parent's new position.
        link.exit().transition()
            .duration(duration)
            .attr("d", this.func_link_exit_transition)
            .remove();
        // Stash the old positions for transition.
        nodes.forEach(function (d) {
            d.x0 = d.x;
            d.y0 = d.y;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ChartComponent.prototype, "treeDataSource", null);
    ChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'chart-component',
            template: __webpack_require__("../../../../../src/app/components/chart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/chart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_UtilsService__["a" /* UtilsService */], __WEBPACK_IMPORTED_MODULE_2__services_PersonTreeService__["a" /* PersonTreeService */]])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/ColumnNameListPipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColumnNameListPipePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColumnNameListPipePipe = /** @class */ (function () {
    function ColumnNameListPipePipe() {
    }
    ColumnNameListPipePipe.prototype.transform = function (cols) {
        var list = [];
        if (cols != null) {
            for (var i = 0; i < cols.length; i++) {
                var col = cols[i];
                list.push(col.name);
            }
        }
        return list;
    };
    ColumnNameListPipePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'columnnames',
            pure: false
        }),
        __metadata("design:paramtypes", [])
    ], ColumnNameListPipePipe);
    return ColumnNameListPipePipe;
}());



/***/ }),

/***/ "../../../../../src/app/services/ParserService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PersonTreeService__ = __webpack_require__("../../../../../src/app/services/PersonTreeService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UtilsService__ = __webpack_require__("../../../../../src/app/services/UtilsService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ParserService = /** @class */ (function () {
    function ParserService(utilsService, personTreeService) {
        this.utilsService = utilsService;
        this.personTreeService = personTreeService;
    }
    ParserService.prototype.parse = function (txt) {
        var items = [];
        var linesTemp = txt.split("\n");
        var lines = this.normalizeLines(linesTemp);
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            var cols = line.split("\t");
            var person = {
                no: cols[0],
                gender: cols[1],
                degree: cols[2],
                name: cols[3],
                surname: cols[4],
                father: cols[5],
                mother: cols[6],
                birtplace: cols[7],
                city: cols[8],
                maritalstatus: cols[10],
                status: cols[11],
            };
            items.push(person);
        }
        this.personTreeService.prepareCodes(items);
        return items;
    };
    ParserService.prototype.mergeCols = function (cols) {
        var str = "";
        for (var i = 0; i < cols.length; i++) {
            var col = cols[i];
            str += col + "\t";
        }
        return str;
    };
    ParserService.prototype.normalizeLines = function (lineGroups) {
        var newLines = [];
        var cols = [];
        for (var i = 0; i < lineGroups.length; i++) {
            var lineGroup = lineGroups[i];
            var groupCols = lineGroup.split("\t");
            if (groupCols[0] == "Sıra")
                continue;
            cols = cols.concat(groupCols);
            if (cols.length >= 16) {
                var newLine = this.mergeCols(cols);
                newLine = this.utilsService.removeIfEndsWith(newLine, "\t");
                newLines.push(newLine);
                cols = [];
            }
        }
        return newLines;
    };
    ParserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__UtilsService__["a" /* UtilsService */], __WEBPACK_IMPORTED_MODULE_1__PersonTreeService__["a" /* PersonTreeService */]])
    ], ParserService);
    return ParserService;
}());



/***/ }),

/***/ "../../../../../src/app/services/PersonTreeService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonTreeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UtilsService__ = __webpack_require__("../../../../../src/app/services/UtilsService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonTreeService = /** @class */ (function () {
    function PersonTreeService(utilsService) {
        this.utilsService = utilsService;
    }
    PersonTreeService.prototype.createNode = function (person) {
        var type = "";
        var isRoot = (person == null);
        if (!isRoot) {
            switch (person.degree) {
                case "Kendisi":
                    type = "self";
                    break;
                case "Babası":
                    type = "father";
                    break;
                case "Annesi":
                    type = "mother";
                    break;
                case "Oğlu":
                    type = "son";
                    break;
                case "Kızı":
                    type = "doughter";
                    break;
                default:
                    type = "other";
                    break;
            }
        }
        var node = {
            type: type,
            person: person,
            childlist: [],
            parentlist: [],
        };
        return node;
    };
    PersonTreeService.prototype.getSelfNode = function (list) {
        var person = null;
        for (var i = 0; list.length; i++) {
            var item = list[i];
            if (item.degreeCode == "S") {
                person = item;
                break;
            }
        }
        if (person == null)
            throw new Error("Kendisi türünde bir kayıt bulunamadı!");
        var node = this.createNode(person);
        return node;
    };
    PersonTreeService.prototype.generate = function (list) {
        // collect
        //var nodeRoot:PersonNode=this.createNode(null);
        var nodeSelf = this.getSelfNode(list);
        var listUnused = [].concat(list);
        // childs
        this.generateChilds(nodeSelf, listUnused);
        // parents
        this.generateParents(nodeSelf, listUnused);
        return nodeSelf;
    };
    PersonTreeService.prototype.prepareCodes = function (list) {
        for (var i = 0; i < list.length; i++) {
            var item = list[i];
            var degreeCode = this.getRelativeCodeFromTextAll(item.degree);
            item.degreeCode = degreeCode;
        }
    };
    PersonTreeService.prototype.generateChilds = function (parentNode, listUnused) {
        var parentCode = ((parentNode.person == null || parentNode.person.degreeCode == "S") ? "" : parentNode.person.degreeCode);
        var newRelativeCodeExtensions = ["O", "K"];
        var listPerson = [];
        for (var i = 0; i < newRelativeCodeExtensions.length; i++) {
            var newRelativeCodeExtension = newRelativeCodeExtensions[i];
            var newCode = parentCode + newRelativeCodeExtension;
            var listPersonTemp = this.getByRelativeFullCode(listUnused, newCode);
            if (listPersonTemp != null) {
                this.utilsService.removeAll(listUnused, listPersonTemp);
                listPerson = listPerson.concat(listPersonTemp);
            }
        }
        // add relations
        for (var _i = 0, listPerson_1 = listPerson; _i < listPerson_1.length; _i++) {
            var item = listPerson_1[_i];
            var node = this.createNode(item);
            parentNode.childlist.push(node);
            node.parentlist.push(parentNode);
            this.generateChilds(node, listUnused);
        }
    };
    PersonTreeService.prototype.generateParents = function (parentNode, listUnused) {
        var parentCode = ((parentNode.person == null || parentNode.person.degreeCode == "S") ? "" : parentNode.person.degreeCode);
        var newRelativeCodeExtensions = ["A", "B"];
        var listPerson = [];
        for (var i = 0; i < newRelativeCodeExtensions.length; i++) {
            var newRelativeCodeExtension = newRelativeCodeExtensions[i];
            var newCode = parentCode + newRelativeCodeExtension;
            var listPersonTemp = this.getByRelativeFullCode(listUnused, newCode);
            if (listPersonTemp != null) {
                this.utilsService.removeAll(listUnused, listPersonTemp);
                listPerson = listPerson.concat(listPersonTemp);
            }
        }
        // add relations
        for (var _i = 0, listPerson_2 = listPerson; _i < listPerson_2.length; _i++) {
            var item = listPerson_2[_i];
            var node = this.createNode(item);
            parentNode.parentlist.push(node);
            node.childlist.push(parentNode);
            this.generateParents(node, listUnused);
        }
    };
    // OKOOK => Oğlunu oğlunun kızı
    // BAB => Oğlunu oğlunun kızı
    PersonTreeService.prototype.getByRelativeFullCode = function (list, degreeCodeFull) {
        var results = [];
        for (var i = 0; i < list.length; i++) {
            var item = list[i];
            if (item.degreeCode == degreeCodeFull)
                results.push(item);
        }
        return results;
    };
    PersonTreeService.prototype.hasRelativeCodes = function (list, relativeCodes) {
        var relativeNames = this.getRelativeNames(relativeCodes);
        for (var i = 0; list.length; i++) {
            var item = list[i];
            if (this.utilsService.isIn(item.degree, relativeNames))
                return true;
        }
        return false;
    };
    PersonTreeService.prototype.getRelativeNames = function (relativeCodes) {
        var relativeNames = [];
        for (var i = 0; relativeCodes.length; i++) {
            var relativeCode = relativeCodes[i];
            var relativeName = this.getRelativeFullText(relativeCode);
            relativeNames.push(relativeName);
        }
        return relativeNames;
    };
    PersonTreeService.prototype.getNextRelativeCodes = function (codes) {
        if (codes == null || codes == "")
            throw new Error("codes cannot be NULL!");
        var result = [];
        var lastCode = codes.substring(codes.length - 1, 1);
        switch (lastCode) {
            case "O":
            case "K":
                result.push(codes + "O");
                result.push(codes + "K");
                break;
            case "A":
            case "B":
                result.push(codes + "A");
                result.push(codes + "B");
                break;
            default:
                throw new Error("Unsupported code! code: " + lastCode);
        }
        return result;
    };
    PersonTreeService.prototype.getRelativeFullText = function (codes) {
        var result = "";
        for (var i = 0; i < codes.length; i++) {
            var codeSingle = codes[i];
            var isLast = (i < (codes.length - 1));
            var text = this.getRelativeFullTextSingle(codeSingle, isLast);
            result += text + " ";
        }
        result = this.utilsService.removeIfEndsWith(result, " ");
        return result;
    };
    PersonTreeService.prototype.getRelativeFullTextSingle = function (codeSingle, isLast) {
        var result = "";
        switch (codeSingle) {
            case "A":
                result = (isLast ? "Annesi" : "Annesinin");
                break;
            case "B":
                result = (isLast ? "Babası" : "Babasının");
                break;
            case "O":
                result = (isLast ? "Oğlu" : "Oğlunun");
                break;
            case "K":
                result = (isLast ? "Kızı" : "Kızının");
                break;
            default:
                throw new Error("Bilinmeyen kod! codeSingle: " + codeSingle);
        }
        return result;
    };
    PersonTreeService.prototype.getRelativeCodeFromTextAll = function (textAll) {
        var codes = "";
        var parts = textAll.split(" ");
        for (var i = 0; i < parts.length; i++) {
            var part = parts[i];
            var code = this.getRelativeCodeFromTextSingle(part);
            codes += code;
        }
        return codes;
    };
    PersonTreeService.prototype.getRelativeCodeFromTextSingle = function (textSingle) {
        var result = "";
        switch (textSingle) {
            case "Annesi":
            case "Annesinin":
                result = "A";
                break;
            case "Babası":
            case "Babasının":
                result = "B";
                break;
            case "Oğlu":
            case "Oğlunun":
                result = "O";
                break;
            case "Kızı":
            case "Kızının":
                result = "K";
                break;
            case "Kendisi":
                result = "S";
                break;
            default:
                throw new Error("Bilinmeyen kod! textSingle: " + textSingle);
        }
        return result;
    };
    PersonTreeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__UtilsService__["a" /* UtilsService */]])
    ], PersonTreeService);
    return PersonTreeService;
}());



/***/ }),

/***/ "../../../../../src/app/services/UtilsService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UtilsService = /** @class */ (function () {
    function UtilsService() {
    }
    UtilsService.prototype.removeAll = function (list, items) {
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            this.removeItem(list, item);
        }
    };
    UtilsService.prototype.removeItem = function (list, item) {
        var index = list.indexOf(item, 0);
        if (index > -1) {
            list = list.splice(index, 1);
        }
    };
    UtilsService.prototype.isIn = function (str, list) {
        for (var i = 0; i < list.length; i++) {
            if (str == list[i])
                return true;
        }
        return false;
    };
    UtilsService.prototype.removeIfEndsWith = function (str, strRemove) {
        var result = str;
        if (result.endsWith(strRemove))
            result = result.substring(0, result.length - strRemove.length);
        return result;
    };
    UtilsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UtilsService);
    return UtilsService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map