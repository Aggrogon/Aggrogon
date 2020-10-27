(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _menubar_menubar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menubar/menubar.component */ "./src/app/menubar/menubar.component.ts");
/* harmony import */ var _node_view_node_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node-view/node-view.component */ "./src/app/node-view/node-view.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");





class AppComponent {
    constructor() {
        this.title = 'MyndMap';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["mm-root"]], decls: 7, vars: 0, consts: [[1, "container"], [1, "one"], [1, "nodeview"], [1, "two"], [1, "map"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mm-menubar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mm-node-view", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mm-map", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_menubar_menubar_component__WEBPACK_IMPORTED_MODULE_1__["MenubarComponent"], _node_view_node_view_component__WEBPACK_IMPORTED_MODULE_2__["NodeViewComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mm-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _node_view_node_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node-view/node-view.component */ "./src/app/node-view/node-view.component.ts");
/* harmony import */ var _menubar_menubar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menubar/menubar.component */ "./src/app/menubar/menubar.component.ts");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _map_map_component__WEBPACK_IMPORTED_MODULE_4__["MapComponent"],
        _node_view_node_view_component__WEBPACK_IMPORTED_MODULE_5__["NodeViewComponent"],
        _menubar_menubar_component__WEBPACK_IMPORTED_MODULE_6__["MenubarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _map_map_component__WEBPACK_IMPORTED_MODULE_4__["MapComponent"],
                    _node_view_node_view_component__WEBPACK_IMPORTED_MODULE_5__["NodeViewComponent"],
                    _menubar_menubar_component__WEBPACK_IMPORTED_MODULE_6__["MenubarComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/control/eventhandlingcenter.ts":
/*!************************************************!*\
  !*** ./src/app/control/eventhandlingcenter.ts ***!
  \************************************************/
/*! exports provided: Eventhandlingcenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Eventhandlingcenter", function() { return Eventhandlingcenter; });
class Eventhandlingcenter {
    static addRedrawEventListener(listener) {
        this.redrawListeners.push(listener);
    }
    static removeRedrawEventListener(listener) {
        this.redrawListeners.splice(this.redrawListeners.indexOf(listener), 1);
    }
    static fireRedrawEvent() {
        console.log("fire redraw event on listeners");
        Eventhandlingcenter.redrawListeners.forEach(element => {
            element.redraw();
        });
    }
    static addNodeeventlistener(listener) {
        this.nodeEventListeners.push(listener);
    }
    static removeNodeeventlistener(listener) {
        this.nodeEventListeners.splice(this.nodeEventListeners.indexOf(listener), 1);
    }
    static nodeEvent(node) {
        this.nodeEventListeners.forEach(listener => {
            listener.nodeTextChange(node);
        });
    }
}
Eventhandlingcenter.nodeEventListeners = [];
// static connectionEventListeners: Connectioneventlistener[] = [];
Eventhandlingcenter.redrawListeners = [];


/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _model_mapmanager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/mapmanager */ "./src/app/model/mapmanager.ts");
/* harmony import */ var _control_eventhandlingcenter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../control/eventhandlingcenter */ "./src/app/control/eventhandlingcenter.ts");
/* harmony import */ var _shared_nodeselectservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/nodeselectservice.service */ "./src/app/shared/nodeselectservice.service.ts");
/* harmony import */ var _shared_mappersistenceservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/mappersistenceservice */ "./src/app/shared/mappersistenceservice.ts");
/* harmony import */ var _shared_map_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/map-navigation-service */ "./src/app/shared/map-navigation-service.ts");
/* harmony import */ var _shared_bread_crum_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/bread-crum-service */ "./src/app/shared/bread-crum-service.ts");









const _c0 = ["NodeDisplay"];
//import node n stuff
/**
 displays the Map itself, elements and connections.
*/
class MapComponent {
    constructor(nodeSelectionService, persistenceService, navigationService, breadCrumService) {
        this.counter = 0;
        this.clickDelay = 200;
        this.nodeSelectionService = nodeSelectionService;
        this.persistenceService = persistenceService;
        this.navigationService = navigationService;
        this.navigationService.goUpListeners.push(this);
        this.breadCrumService = breadCrumService;
        _control_eventhandlingcenter__WEBPACK_IMPORTED_MODULE_3__["Eventhandlingcenter"].addNodeeventlistener(this);
    }
    nodeTextChange(node) {
        var oldFont = this.ctx.font;
        this.ctx.font = "20px Arial";
        var titleLines = node.title.split("\n");
        var i = 1;
        var longestLine = 0;
        var totalHeight = 10;
        titleLines.forEach(line => {
            longestLine = Math.max(longestLine, this.ctx.measureText(line).width);
            totalHeight = totalHeight + 20;
        });
        longestLine += 10;
        node.viewModel.width = longestLine;
        node.viewModel.height = totalHeight;
        this.ctx.font = oldFont;
    }
    redraw() {
        this.update();
    }
    goBackUpTo(i) {
        this.mapmanager.goBackUpTo(i);
        this.breadCrumService.changeBreadCrums(this.mapmanager.mapPath);
        this.update();
    }
    ngOnInit() {
        console.log("l9p00000000000000009üüüüüüüüüüüüüüüü09999999u000000o05674 989ß759en088iuiortg  i");
        _control_eventhandlingcenter__WEBPACK_IMPORTED_MODULE_3__["Eventhandlingcenter"].addRedrawEventListener(this);
        this.mapmanager = new _model_mapmanager__WEBPACK_IMPORTED_MODULE_2__["Mapmanager"](this.persistenceService);
        this.timeOfLastMouseDownEvent = new Date();
        this.timeOfLastDoubleMouseDownEvent = new Date();
        this.TimeOfLastMouseUpAfterDoubleDown = new Date();
        this.MouseSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(document, 'mousemove').subscribe(e => this.performMouseMove(e)); //TODO: dont forget unsubscription
        this.MouseSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(document, 'mousedown').subscribe(e => this.performMouseDown(e));
        this.MouseSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(document, 'mouseup').subscribe(e => this.performMouseUp(e));
        this.ctx = this.canvas.nativeElement.getContext('2d');
        this.mapmanager.loadFromLocalStorage();
        //set canvas to use fill size of parent div
        var w = document.getElementsByClassName("two").item(0).clientWidth;
        var h = document.getElementsByClassName("two").item(0).clientHeight;
        // document.getElementsByClassName("two").item(0).addEventListener();
        this.canvas.nativeElement.width = w - 10;
        this.canvas.nativeElement.height = h - 20;
        this.update();
    }
    update() {
        const localcanvas = this.ctx.canvas;
        this.ctx.clearRect(0, 0, localcanvas.width, localcanvas.height);
        //paint node Delete Area
        this.drawDeleteZone();
        this.mapmanager.saveToLocalStorage();
        this.mapmanager.redrawMap(this.ctx);
    }
    updateWithoutPersistence() {
        const localcanvas = this.ctx.canvas;
        this.ctx.clearRect(0, 0, localcanvas.width, localcanvas.height);
        //paint node Delete Area
        this.drawDeleteZone();
        this.mapmanager.redrawMap(this.ctx);
    }
    drawDeleteZone() {
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(0, 0, 80, 80);
        this.ctx.font = "15px Arial";
        this.ctx.fillStyle = "white";
        this.ctx.fillText("delete ", 15, 30);
        this.ctx.fillText("here", 20, 50);
    }
    handle(event) {
        var reader = new FileReader();
        var result = "empty";
        if (event != null) {
            reader.onload = (event) => {
                result = event.target.result.toString();
                this.mapmanager.loadJsonAsMap(result);
            };
        }
        reader.readAsText(event.currentTarget.files[0]);
        this.update();
    }
    isEventOnCanvas(e) {
        return e.clientX > this.canvas.nativeElement.offsetLeft && e.clientX < this.canvas.nativeElement.width + this.canvas.nativeElement.offsetLeft
            && e.clientY > this.canvas.nativeElement.offsetTop && e.clientY < this.canvas.nativeElement.height + this.canvas.nativeElement.offsetTop;
    }
    performMouseDown(e) {
        var rect = e.target.getBoundingClientRect();
        var x = e.clientX - rect.left - 1; //x position within the element.
        var y = e.clientY - rect.top - 1; //y position within the element.
        if (this.isEventOnCanvas(e)) {
            var element = this.mapmanager.firstNodeAt(x, y);
            // console.log("element was found at: "+element.viewModel.x + ", " + element.viewModel.y)
            if (new Date().valueOf() - this.timeOfLastDoubleMouseDownEvent.valueOf() < this.clickDelay) {
                if (element != null) {
                    this.performTrippleMouseDownOnElement(x, y, element);
                }
                else {
                    this.performTrippleMouseDownOnEmptySpace(x, y);
                }
            }
            else if (new Date().valueOf() - this.timeOfLastMouseDownEvent.valueOf() < this.clickDelay) {
                this.timeOfLastDoubleMouseDownEvent = new Date();
                if (element != null) {
                    this.performDoubleMouseDownOnElement(x, y, element);
                }
                else {
                    this.performDoubleMouseDownOnEmptySpace(x, y);
                }
            }
            else {
                if (element != null) {
                    this.performSingleMouseDownOnElement(x, y, element);
                }
                else {
                    this.performSingleMouseDownOnEmptySpace(x, y);
                }
            }
            // console.log("updating last mouse down timer!")
            this.timeOfLastMouseDownEvent = new Date();
            this.update();
        }
    }
    performMouseUp(e) {
        if (this.isEventOnCanvas(e)) {
            // console.log('click performed at: ' + e.clientX + ' ' + e.clientY);
            var rect = e.target.getBoundingClientRect();
            var x = e.clientX - rect.left - 1; //x position within the element.
            var y = e.clientY - rect.top - 1; //y position within the element.
            //TODO: determin if event is on top of a node or connection
            var element = this.mapmanager.firstNodeAt(x, y);
            if (new Date().valueOf() - this.timeOfLastDoubleMouseDownEvent.valueOf() < this.clickDelay) {
                // console.log("we had a double Click event");
                if (element != null) {
                    // console.log("on an element");
                    this.performDoubleClickOnElement(x, y, element);
                }
                else {
                    // console.log("on empty space");
                    this.performDoubleClickOnEmptySpace(x, y);
                }
            }
            else {
                if (this.draged == null) { //TODO: there might be logic gap here, like, driggering a click instead of a unrelated mouseup
                    // console.log("we had a single click");
                    if (element != null) {
                        // console.log("on an element");
                        this.performSingleClickOnElement(x, y, element);
                    }
                    else {
                        // console.log("on empty space");
                        this.performSingleClickOnEmptySpace(x, y);
                    }
                }
                else {
                    // console.log("we had a drag stop");
                    if (element != null) {
                        this.performDragStopOnElement(x, y, element);
                        // console.log("on an element");
                    }
                    else {
                        // console.log("on empty space");
                        this.performDragStopOnEmptySpace(x, y);
                    }
                }
            }
            this.update();
        }
    }
    performSingleMouseDownOnEmptySpace(x, y) {
        // console.log("we had a single mousedown!");
        // console.log("on empty space");
        if (this.selected != null) {
            this.selected.viewModel.selected = false;
            this.selected = null;
            this.nodeSelectionService.changeSelection(null);
        }
    }
    performSingleMouseDownOnElement(x, y, element) {
        // console.log("we had a single mousedown!");
        // console.log("on an element");
        if (this.selected != null) {
            this.selected.viewModel.selected = false;
        }
        this.draggedOffsetX = x - element.viewModel.x;
        this.draggedOffsetY = y - element.viewModel.y;
        element.viewModel.selected = true;
        this.selected = element;
        this.nodeSelectionService.changeSelection(element);
        this.mouseDownStartLocationX = element.viewModel.x;
        this.mouseDownStartLocationY = element.viewModel.y;
        this.draged = element;
        this.draged.viewModel.dragged = true;
    }
    performDoubleMouseDownOnElement(x, y, element) {
        console.log("we had a double mousedown!");
        console.log("on an element");
        // throw new Error("performDoubleMouseDownOnElement not implemented.");
    }
    performDoubleMouseDownOnEmptySpace(x, y) {
        console.log("we had a double mousedown!");
        console.log("on empty space");
        // throw new Error("performDoubleMouseDownOnEmptySpace not implemented.");
    }
    performTrippleMouseDownOnElement(x, y, element) {
        console.log("we had a tripple mousedown!");
        console.log("on an element");
        // throw new Error("performTrippleMouseDownOnElement not implemented.");
    }
    performTrippleMouseDownOnEmptySpace(x, y) {
        console.log("we had a tripple mousedown!");
        console.log("on empty space");
        // throw new Error("performTrippleMouseDownOnEmptySpace not implemented.");
    }
    performDoubleClickOnElement(x, y, element) {
        // throw new Error("Method not implemented.");
        console.log("mapmanager go DEEPER");
        this.mapmanager.goDeeper(element);
        this.breadCrumService.changeBreadCrums(this.mapmanager.mapPath);
    }
    performDoubleClickOnEmptySpace(x, y) {
        console.log("calling mapmanager!");
        this.mapmanager.addNodeNewNode(x, y);
    }
    performSingleClickOnElement(x, y, element) {
        // throw new Error("Method not implemented.");
    }
    performSingleClickOnEmptySpace(x, y) {
        // throw new Error("Method not implemented.");
    }
    performDragStopOnElement(x, y, element) {
        console.log("mouseup on element, reset back to start position");
        this.draged.viewModel.x = this.mouseDownStartLocationX;
        this.draged.viewModel.y = this.mouseDownStartLocationY;
        var connection = this.mapmanager.findNodesConnection(this.draged, element);
        if (connection == null) {
            // console.log("connection was null, so we connect the nodes!");
            this.mapmanager.connectNodes(this.draged, element);
        }
        else {
            // console.log("connection was null, so we connect the nodes!");
            // Eventhandlingcenter.removeRedrawEventListener(connection);
            // this.mapmanager0.current.connections.splice(this.mapmanager.current.connections.indexOf(connection));
            this.mapmanager.diconnectNodes(this.draged, element, connection);
        }
        this.draged.viewModel.dragged = false;
        this.draged = null;
    }
    performDragStopOnEmptySpace(x, y) {
        this.draged.viewModel.x = x - this.draggedOffsetX;
        this.draged.viewModel.y = y - this.draggedOffsetY;
        this.draged.viewModel.dragged = false;
        if (x < 80 && y < 80) {
            this.selected = null;
            this.nodeSelectionService.changeSelection(null);
            this.mapmanager.deleteNode(this.draged);
            console.log("DELETE THIS");
        }
        this.draged = null;
    }
    performMouseMove(e) {
        if (this.isEventOnCanvas(e)) {
            if (this.draged != null) {
                var rect = e.target.getBoundingClientRect();
                var x = e.clientX - rect.left - 1; //x position within the element.
                var y = e.clientY - rect.top - 1; //y position within the element.
                //calculate offset
                //set new position with offset
                this.draged.viewModel.x = x - this.draggedOffsetX;
                this.draged.viewModel.y = y - this.draggedOffsetY;
                this.updateWithoutPersistence();
            }
        }
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_nodeselectservice_service__WEBPACK_IMPORTED_MODULE_4__["NodeselectserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_mappersistenceservice__WEBPACK_IMPORTED_MODULE_5__["Mappersistenceservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_map_navigation_service__WEBPACK_IMPORTED_MODULE_6__["MapNavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_bread_crum_service__WEBPACK_IMPORTED_MODULE_7__["BreadCrumService"])); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["mm-map"]], viewQuery: function MapComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    } }, decls: 3, vars: 0, consts: [["id", "mapview", "width", "800", "height", "700", 1, "canvas"], ["NodeDisplay", ""], ["type", "file", 2, "display", "none", 3, "change"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "canvas", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MapComponent_Template_input_change_2_listener($event) { return ctx.handle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcC9tYXAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mm-map',
                templateUrl: './map.component.html',
                styleUrls: ['./map.component.css']
            }]
    }], function () { return [{ type: _shared_nodeselectservice_service__WEBPACK_IMPORTED_MODULE_4__["NodeselectserviceService"] }, { type: _shared_mappersistenceservice__WEBPACK_IMPORTED_MODULE_5__["Mappersistenceservice"] }, { type: _shared_map_navigation_service__WEBPACK_IMPORTED_MODULE_6__["MapNavigationService"] }, { type: _shared_bread_crum_service__WEBPACK_IMPORTED_MODULE_7__["BreadCrumService"] }]; }, { canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['NodeDisplay', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/menubar/menubar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/menubar/menubar.component.ts ***!
  \**********************************************/
/*! exports provided: MenubarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenubarComponent", function() { return MenubarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_mappersistenceservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/mappersistenceservice */ "./src/app/shared/mappersistenceservice.ts");
/* harmony import */ var _shared_map_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/map-navigation-service */ "./src/app/shared/map-navigation-service.ts");
/* harmony import */ var _shared_bread_crum_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/bread-crum-service */ "./src/app/shared/bread-crum-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function MenubarComponent_a_14_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenubarComponent_a_14_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.selectBreadCrum(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.breadCrumList[i_r2].title);
} }
class MenubarComponent {
    constructor(persistenceService, navigationService, breadCrumService) {
        this.testText = "test";
        this.breadCrumList = [];
        this.persistenceService = persistenceService;
        this.navigationService = navigationService;
        this.breadCrumService = breadCrumService;
        this.breadCrumService.breadCrums.subscribe(breadCrums => this.setUpBreadCrums(breadCrums));
    }
    ngOnInit() {
    }
    selectBreadCrum(i) {
        this.navigationService.goBackUpTo(i);
    }
    setUpBreadCrums(breadCrums) {
        this.breadCrumList = breadCrums;
    }
    clear() {
        this.persistenceService.clearAll();
    }
    saveMap() {
        // console.log("saving map button pressed");
        this.persistenceService.save();
    }
    loadMap() {
        // console.log("loading map button pressed");
        this.persistenceService.load();
    }
}
MenubarComponent.ɵfac = function MenubarComponent_Factory(t) { return new (t || MenubarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_mappersistenceservice__WEBPACK_IMPORTED_MODULE_1__["Mappersistenceservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_map_navigation_service__WEBPACK_IMPORTED_MODULE_2__["MapNavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_bread_crum_service__WEBPACK_IMPORTED_MODULE_3__["BreadCrumService"])); };
MenubarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenubarComponent, selectors: [["mm-menubar"]], decls: 15, vars: 1, consts: [[1, "navbar"], [1, "dropdown"], [1, "dropbtn"], [1, "fa", "fa-caret-down"], [1, "dropdown-content"], ["href", "#", 3, "click"], ["href", "#", 1, "removeButton", 3, "click"], ["href", "#"], ["href", "#", 3, "click", 4, "ngFor", "ngForOf"]], template: function MenubarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Menu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenubarComponent_Template_a_click_6_listener() { return ctx.saveMap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "save map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenubarComponent_Template_a_click_8_listener() { return ctx.loadMap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "load map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenubarComponent_Template_a_click_10_listener() { return ctx.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Remove All!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Map History:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MenubarComponent_a_14_Template, 2, 1, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.breadCrumList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnViYXIvbWVudWJhci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenubarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mm-menubar',
                templateUrl: './menubar.component.html',
                styleUrls: ['./menubar.component.css']
            }]
    }], function () { return [{ type: _shared_mappersistenceservice__WEBPACK_IMPORTED_MODULE_1__["Mappersistenceservice"] }, { type: _shared_map_navigation_service__WEBPACK_IMPORTED_MODULE_2__["MapNavigationService"] }, { type: _shared_bread_crum_service__WEBPACK_IMPORTED_MODULE_3__["BreadCrumService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/model/connectionmodel.ts":
/*!******************************************!*\
  !*** ./src/app/model/connectionmodel.ts ***!
  \******************************************/
/*! exports provided: Connectionmodel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Connectionmodel", function() { return Connectionmodel; });
/* harmony import */ var _connectionviewmodel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connectionviewmodel */ "./src/app/model/connectionviewmodel.ts");

class Connectionmodel {
    constructor(node1, node2) {
        this.node1 = node1;
        this.node2 = node2;
        this.viewmodel = new _connectionviewmodel__WEBPACK_IMPORTED_MODULE_0__["Connectionviewmodel"]();
    }
}


/***/ }),

/***/ "./src/app/model/connectionviewmodel.ts":
/*!**********************************************!*\
  !*** ./src/app/model/connectionviewmodel.ts ***!
  \**********************************************/
/*! exports provided: Connectionviewmodel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Connectionviewmodel", function() { return Connectionviewmodel; });
class Connectionviewmodel {
    constructor(color = "black") {
        this.color = color;
    }
    draw(canvas, model) {
        canvas.strokeStyle = this.color;
        canvas.beginPath();
        canvas.moveTo(model.node1.viewModel.x + model.node1.viewModel.width / 2, model.node1.viewModel.y + model.node1.viewModel.height / 2);
        canvas.lineTo(model.node2.viewModel.x + model.node2.viewModel.width / 2, model.node2.viewModel.y + model.node2.viewModel.height / 2);
        canvas.stroke();
    }
}


/***/ }),

/***/ "./src/app/model/map-version-container.ts":
/*!************************************************!*\
  !*** ./src/app/model/map-version-container.ts ***!
  \************************************************/
/*! exports provided: MapVersionContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapVersionContainer", function() { return MapVersionContainer; });
class MapVersionContainer {
    constructor(map) {
        this.map = map;
        this.version = "0.0.1";
    }
}


/***/ }),

/***/ "./src/app/model/mapmanager.ts":
/*!*************************************!*\
  !*** ./src/app/model/mapmanager.ts ***!
  \*************************************/
/*! exports provided: Mapmanager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapmanager", function() { return Mapmanager; });
/* harmony import */ var _model_nodemodel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/nodemodel */ "./src/app/model/nodemodel.ts");
/* harmony import */ var _shared_point2_d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/point2-d */ "./src/app/shared/point2-d.ts");
/* harmony import */ var _connectionmodel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connectionmodel */ "./src/app/model/connectionmodel.ts");
/* harmony import */ var _map_version_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map-version-container */ "./src/app/model/map-version-container.ts");
/* harmony import */ var _mapmodel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapmodel */ "./src/app/model/mapmodel.ts");
/* harmony import */ var _nodeshape_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nodeshape.enum */ "./src/app/model/nodeshape.enum.ts");






class Mapmanager {
    constructor(persistenceService) {
        this.current = new _mapmodel__WEBPACK_IMPORTED_MODULE_4__["Mapmodel"]("root");
        this.root = this.current;
        persistenceService.listeners.push(this);
        this.mapPath = [];
    }
    clear() {
        this.current = new _mapmodel__WEBPACK_IMPORTED_MODULE_4__["Mapmodel"]("root");
        this.root = this.current;
        this.mapPath = [];
    }
    get current() {
        return this._current;
    }
    set current(value) {
        this._current = value;
    }
    goDeeper(diveNode) {
        if (diveNode.submap == null) {
            diveNode.submap = new _mapmodel__WEBPACK_IMPORTED_MODULE_4__["Mapmodel"](diveNode.title);
        }
        this.mapPath.push(this.current);
        console.log("Is the Submap null? " + (diveNode.submap == null));
        this.current = diveNode.submap;
    }
    goBackUpTo(i) {
        console.log("cut to index: " + i);
        this.mapPath.splice(i + 1);
        if (this.mapPath.length > 0) {
            this.current = this.mapPath.pop();
            // console.log("going up one layer");
        }
        else {
            console.log("You seem to be at the root element");
        }
    }
    saveToLocalStorage() {
        if (window.localStorage) {
            window.localStorage.setItem('map.json', JSON.stringify(new _map_version_container__WEBPACK_IMPORTED_MODULE_3__["MapVersionContainer"](this.root), null, 2));
        }
    }
    loadFromLocalStorage() {
        if (window.localStorage) {
            const json = window.localStorage.getItem('map.json');
            if (json) {
                this.loadJsonAsMap(json);
            }
        }
    }
    clearFromLocalStorage() {
        if (window.localStorage) {
            window.localStorage.removeItem('map.json');
        }
    }
    addNodeNewNode(x, y) {
        this.addNode(new _model_nodemodel__WEBPACK_IMPORTED_MODULE_0__["NodeModel"](x, y, Mapmanager.nextID++));
    }
    save() {
        // console.log("called save")
        this.download('map.json', JSON.stringify(new _map_version_container__WEBPACK_IMPORTED_MODULE_3__["MapVersionContainer"](this.root), null, 2));
        // this.saveToLocalStorage();
    }
    download(filename, text) {
        // this works, dont ask why :D its not mine, I found it somewhere, possibly stack overflow
        var pom = document.createElement('a');
        pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        pom.setAttribute('download', filename);
        if (document.createEvent) {
            var event = document.createEvent('MouseEvents');
            event.initEvent('click', true, true);
            pom.dispatchEvent(event);
        }
        else {
            pom.click();
        }
    }
    load() {
        console.log("called load");
        this.openFile();
    }
    openFile() {
        document.querySelector('input').click();
    }
    loadJsonAsMap(json) {
        // console.log("trying to set up OLD MAP!")
        // console.log(json);
        let versioncontainer = JSON.parse(json);
        console.log("Loaded Version: " + versioncontainer.version);
        let instance = versioncontainer.map;
        // console.log("connections: " + instance.connections.length)
        // console.log("Nodes: " + instance.nodes.length);
        this.restoreConnectionNodes(instance);
        this.current = instance;
        this.root = instance;
        Mapmanager.nextID = this.getMaxID(this.root) + 1;
    }
    getMaxID(map) {
        var maxID = 0;
        map.nodes.forEach(node => {
            if (node.submap == null || node.submap.nodes.length == 0) {
                maxID = Math.max(maxID, node.id);
            }
            else {
                maxID = this.getMaxID(node.submap);
            }
        });
        return maxID;
    }
    firstNodeAt(x, y) {
        // console.log("searching for element at: "+x+", "+y)
        var node = null;
        this.current.nodes.forEach(element => {
            if (this.isUnder(element, x, y)) {
                node = element;
                return;
            }
        });
        return node;
    }
    isUnder(node, x, y) {
        // console.log("this node is dragged: ");
        // console.log(this.viewModel.dragged);
        if (!node.viewModel.dragged) {
            if (node.viewModel.shape == _nodeshape_enum__WEBPACK_IMPORTED_MODULE_5__["Nodeshape"].RECTANGLE) {
                return (node.viewModel.x < x
                    && node.viewModel.y < y
                    && node.viewModel.x + node.viewModel.width > x
                    && node.viewModel.y + node.viewModel.height > y);
            }
            else if (node.viewModel.shape == _nodeshape_enum__WEBPACK_IMPORTED_MODULE_5__["Nodeshape"].CIRCLE) {
                var centerX = node.viewModel.x + node.viewModel.width / 2;
                var centerY = node.viewModel.y + node.viewModel.height / 2;
                var radius = node.viewModel.height / 2;
            }
            else if (node.viewModel.shape == _nodeshape_enum__WEBPACK_IMPORTED_MODULE_5__["Nodeshape"].SQUARE) {
                return (node.viewModel.x < x
                    && node.viewModel.y < y
                    && node.viewModel.x + node.viewModel.width > x
                    && node.viewModel.y + node.viewModel.height > y);
            }
            else if (node.viewModel.shape == _nodeshape_enum__WEBPACK_IMPORTED_MODULE_5__["Nodeshape"].DIAMOND) { }
        }
        else {
            // console.log("this.viewModel.dragged was false");
            return false;
        }
    }
    redrawMap(canvas) {
        canvas.font = "20px Arial";
        canvas.fillStyle = "black";
        canvas.fillText("title: " + this.current.title, canvas.canvas.width / 2, 50);
        // console.log("drawing after update event");
        if (this.current.nodes.length == 0) {
            // console.log("printing default text");
            var lineOffset = 30;
            canvas.font = lineOffset + "px Arial";
            canvas.fillStyle = "black";
            canvas.fillText("1. double click to create a node", canvas.canvas.width / 2 - 15 * 10, canvas.canvas.height / 2);
            canvas.fillText("2.click once to select one, edit the content on the left", canvas.canvas.width / 2 - 24 * 10, canvas.canvas.height / 2 + lineOffset);
            canvas.fillText("3. drag one node on another to connect them", canvas.canvas.width / 2 - 22 * 10, canvas.canvas.height / 2 + lineOffset * 2);
            canvas.fillText("4. double click on a node will open/create its sub-map", canvas.canvas.width / 2 - 24 * 10, canvas.canvas.height / 2 + lineOffset * 3);
            // canvas.strokeText("opening your old map is nearly impossible, sorry...", canvas.canvas.width / 2 - 24 * 10, canvas.canvas.height / 2 + 80);
        }
        if (this.current.nodes.length > 0) {
            this.current.nodes.forEach(element => {
                this.drawNode(canvas, element);
            });
        }
        if (this.current.connections.length > 0) {
            this.current.connections.forEach(element => {
                this.drawConnection(canvas, element);
            });
        }
    }
    restoreConnectionNodes(map) {
        map.connections.forEach(connection => {
            map.nodes.forEach(newNode1 => {
                // console.log("looking for: " + connection.node1.title + " and new node had: " + newNode1.title)
                if (connection.node1.id == newNode1.id) {
                    // console.log("found node1 as : " + newNode1.title)
                    connection.node1 = newNode1;
                    return;
                }
            });
            map.nodes.forEach(newNode2 => {
                if (connection.node2.id == newNode2.id) {
                    // console.log("found node2 as : " + newNode2.title)
                    connection.node2 = newNode2;
                    return;
                }
            });
        });
    }
    findNodesConnection(node1, node2) {
        var con = null;
        this.current.connections.forEach(connection => {
            if ((connection.node1 == node1 && connection.node2 == node2) || connection.node2 == node1 && connection.node1 == node2) {
                con = connection;
                return;
            }
        });
        return con;
    }
    drawNode(canvas, model) {
        if (model.viewModel.selected == true) {
            canvas.strokeStyle = "green"; //TODO: make it changeable?
        }
        else {
            canvas.strokeStyle = model.viewModel.color;
        }
        if (model.viewModel.shape == _nodeshape_enum__WEBPACK_IMPORTED_MODULE_5__["Nodeshape"].CIRCLE) {
            canvas.ellipse(model.viewModel.x, model.viewModel.y, model.viewModel.width / 2, model.viewModel.height / 2, 0, 0, 0);
        }
        else if (model.viewModel.shape == _nodeshape_enum__WEBPACK_IMPORTED_MODULE_5__["Nodeshape"].DIAMOND) {
        }
        else if (model.viewModel.shape == _nodeshape_enum__WEBPACK_IMPORTED_MODULE_5__["Nodeshape"].RECTANGLE) {
            canvas.font = "20px Arial";
            var titleLines = model.title.split("\n");
            var i = 1;
            // var longestLine=0;
            // var totalHeight=10;
            canvas.fillStyle = "black";
            titleLines.forEach(line => {
                // longestLine=Math.max(longestLine,canvas.measureText(line).width);
                // totalHeight=totalHeight+20;
                canvas.fillText(line, model.viewModel.x + 5, model.viewModel.y + 20 * (i++));
            });
            // longestLine+=10;
            canvas.strokeRect(model.viewModel.x, model.viewModel.y, model.viewModel.width, model.viewModel.height);
            canvas.font = "8px Arial";
            canvas.strokeText((model.submap != null ? model.submap.nodes.length : "0") + "", model.viewModel.x + model.viewModel.width, model.viewModel.y + model.viewModel.height + 10);
        }
        else if (model.viewModel.shape == _nodeshape_enum__WEBPACK_IMPORTED_MODULE_5__["Nodeshape"].SQUARE) {
            canvas.strokeRect(model.viewModel.x, model.viewModel.y, model.viewModel.width, model.viewModel.height);
        }
    }
    deleteNode(node) {
        //find all connections with this node and kill them
        var consToDelete = [];
        node.viewModel.selected = false;
        this.current.connections.forEach(con => {
            if (con.node1 == node || con.node2 == node) {
                consToDelete.push(con);
            }
        });
        consToDelete.forEach(con => {
            this.current.connections.splice(this.current.connections.indexOf(con), 1);
        });
        //find this node in list and kill it
        this.current.nodes.splice(this.current.nodes.indexOf(node), 1);
    }
    getIntersectionPoint(vector1, vector2) {
        var factor = 0;
        return new _shared_point2_d__WEBPACK_IMPORTED_MODULE_1__["Point2D"](vector1.x * factor, vector1.y * factor);
    }
    GetConnectionStart(self, target) {
        switch (self.viewModel.shape) {
            case _nodeshape_enum__WEBPACK_IMPORTED_MODULE_5__["Nodeshape"].RECTANGLE:
            case _nodeshape_enum__WEBPACK_IMPORTED_MODULE_5__["Nodeshape"].SQUARE:
                const rec = {
                    center: {
                        x: self.viewModel.x + self.viewModel.width / 2,
                        y: self.viewModel.y + self.viewModel.height / 2
                    },
                    top: self.viewModel.y,
                    bottom: self.viewModel.y + self.viewModel.height,
                    left: self.viewModel.x,
                    right: self.viewModel.x + self.viewModel.width,
                    width: self.viewModel.width,
                    height: self.viewModel.height,
                };
                const targetCenter = this.GetCenter(target);
                const selfCenter = rec.center;
                const relativeVector = { x: selfCenter.x - targetCenter.x, y: selfCenter.y - targetCenter.y };
                const m1 = (targetCenter.y - selfCenter.y) / (targetCenter.x - selfCenter.x);
                const m2 = (targetCenter.x - selfCenter.x) / (targetCenter.y - selfCenter.y);
                if (relativeVector.x / relativeVector.y < 1 && relativeVector.x / relativeVector.y > -1 && relativeVector.y < 0) {
                    // over
                    return { x: selfCenter.x + rec.height / 2 * m2, y: rec.bottom };
                }
                else if (relativeVector.x / relativeVector.y < 1 && relativeVector.x / relativeVector.y > -1 && relativeVector.y >= 0) {
                    // under
                    return { x: selfCenter.x - rec.height / 2 * m2, y: rec.top };
                }
                else if ((relativeVector.x / relativeVector.y >= 1 || relativeVector.x / relativeVector.y <= -1) && relativeVector.x > 0) {
                    // right
                    return { x: rec.left, y: selfCenter.y - rec.width / 2 * m1 };
                }
                else if ((relativeVector.x / relativeVector.y >= 1 || relativeVector.x / relativeVector.y <= -1) && relativeVector.x <= 0) {
                    // left
                    return { x: rec.right, y: selfCenter.y + rec.width / 2 * m1 };
                }
                break;
            default:
                return this.GetCenter(self);
        }
    }
    GetCenter(self) {
        switch (self.viewModel.shape) {
            case _nodeshape_enum__WEBPACK_IMPORTED_MODULE_5__["Nodeshape"].SQUARE:
            case _nodeshape_enum__WEBPACK_IMPORTED_MODULE_5__["Nodeshape"].RECTANGLE:
                return {
                    x: self.viewModel.x + self.viewModel.width / 2,
                    y: self.viewModel.y + self.viewModel.height / 2
                };
            default:
                return {
                    x: self.viewModel.x + self.viewModel.width / 2,
                    y: self.viewModel.y + self.viewModel.height / 2
                };
                break;
        }
    }
    drawConnection(canvas, model) {
        canvas.strokeStyle = model.viewmodel.color;
        // console.log("color of connection: "+ model.viewmodel.color)
        canvas.beginPath();
        const start = this.GetConnectionStart(model.node1, model.node2);
        const end = this.GetConnectionStart(model.node2, model.node1);
        canvas.moveTo(start.x, start.y);
        canvas.lineTo(end.x, end.y);
        canvas.stroke();
    }
    getRect(n) {
        return {
            center: {
                x: n.viewModel.x + n.viewModel.width / 2,
                y: n.viewModel.y + n.viewModel.height / 2
            },
            top: n.viewModel.y,
            bottom: n.viewModel.y + n.viewModel.height,
            left: n.viewModel.x,
            right: n.viewModel.x + n.viewModel.width,
            width: n.viewModel.width,
            height: n.viewModel.height,
        };
    }
    connectNodes(node1, node2) {
        if (this.current.nodes.includes(node1) && this.current.nodes.includes(node2)) {
            var connection = new _connectionmodel__WEBPACK_IMPORTED_MODULE_2__["Connectionmodel"](node1, node2);
            // node1.addConnection(connection);
            // node2.addConnection(connection);
            this.current.connections.push(connection);
        }
        else {
            console.log("you managed to try to connect two nodes of which one wasnt even in this map. amazing and weird");
        }
    }
    diconnectNodes(node1, node2, connection) {
        this.current.connections.splice(this.current.connections.lastIndexOf(connection), 1);
    }
    addNode(node) {
        // console.log("adding node " + node.viewModel.x + ", " + node.viewModel.y + " " + node.title);
        this.current.nodes.push(node);
    }
}
Mapmanager.nextID = 0;


/***/ }),

/***/ "./src/app/model/mapmodel.ts":
/*!***********************************!*\
  !*** ./src/app/model/mapmodel.ts ***!
  \***********************************/
/*! exports provided: Mapmodel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapmodel", function() { return Mapmodel; });
class Mapmodel {
    // source: Mapmodel;
    constructor(title) {
        console.log("title of new map: " + title);
        // this.source = source;
        this.title = title;
        this.nodes = [];
        this.connections = [];
    }
}


/***/ }),

/***/ "./src/app/model/nodemodel.ts":
/*!************************************!*\
  !*** ./src/app/model/nodemodel.ts ***!
  \************************************/
/*! exports provided: NodeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeModel", function() { return NodeModel; });
/* harmony import */ var _nodeviewmodel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodeviewmodel */ "./src/app/model/nodeviewmodel.ts");

class NodeModel {
    constructor(x, y, id) {
        this.id = id;
        this.title = "title";
        this.content = this.title + "\n\n[nodeDisplayEnd]\n\n" + "content";
        this.viewModel = new _nodeviewmodel__WEBPACK_IMPORTED_MODULE_0__["Nodeviewmodel"](x, y, 40, 40);
        // Eventhandlingcenter.addRedrawEventListener(this);
        // this.connections=[];
    }
}


/***/ }),

/***/ "./src/app/model/nodeshape.enum.ts":
/*!*****************************************!*\
  !*** ./src/app/model/nodeshape.enum.ts ***!
  \*****************************************/
/*! exports provided: Nodeshape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nodeshape", function() { return Nodeshape; });
var Nodeshape;
(function (Nodeshape) {
    Nodeshape[Nodeshape["SQUARE"] = 0] = "SQUARE";
    Nodeshape[Nodeshape["CIRCLE"] = 1] = "CIRCLE";
    Nodeshape[Nodeshape["RECTANGLE"] = 2] = "RECTANGLE";
    Nodeshape[Nodeshape["DIAMOND"] = 3] = "DIAMOND";
})(Nodeshape || (Nodeshape = {}));


/***/ }),

/***/ "./src/app/model/nodeviewmodel.ts":
/*!****************************************!*\
  !*** ./src/app/model/nodeviewmodel.ts ***!
  \****************************************/
/*! exports provided: Nodeviewmodel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nodeviewmodel", function() { return Nodeviewmodel; });
/* harmony import */ var _nodeshape_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodeshape.enum */ "./src/app/model/nodeshape.enum.ts");

class Nodeviewmodel {
    constructor(x, y, width, height, shape = _nodeshape_enum__WEBPACK_IMPORTED_MODULE_0__["Nodeshape"].RECTANGLE, color = "black") {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.shape = shape;
        this.color = color;
        this.dragged = false;
        this.selected = false;
    }
}


/***/ }),

/***/ "./src/app/node-view/node-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/node-view/node-view.component.ts ***!
  \**************************************************/
/*! exports provided: NodeViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeViewComponent", function() { return NodeViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _control_eventhandlingcenter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../control/eventhandlingcenter */ "./src/app/control/eventhandlingcenter.ts");
/* harmony import */ var _shared_nodeselectservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/nodeselectservice.service */ "./src/app/shared/nodeselectservice.service.ts");




/**
 * component to display details of a selected Node, like bigger version of immages, Text, or combination of both
 */
class NodeViewComponent {
    constructor(nodeSelectionService) {
        this.nodeSelectionService = nodeSelectionService;
    }
    ngOnInit() {
        this.nodeSelectionService.currentSelection.subscribe(node => this.changeNode(node));
    }
    // displayText(node: NodeModel): string {
    //   if (node == null)
    //     return "";
    //   else return node.title + " \n" + node.content;
    // }
    changeNode(node) {
        // console.log("new node"+node.title+ "set with content"+ node.content);
        var textArea = document.getElementById("nodeContentEditor");
        this.node = node;
        if (node != null) {
            textArea.value = this.node.content;
        }
        else {
            textArea.value = "";
        }
    }
    changeText(value) {
        var textArea = document.getElementById("nodeContentEditor");
        this.caretPosition = textArea.selectionStart;
        this.node.title = value.split("[nodeDisplayEnd]")[0].trim();
        this.node.content = value;
        _control_eventhandlingcenter__WEBPACK_IMPORTED_MODULE_1__["Eventhandlingcenter"].nodeEvent(this.node);
        textArea.selectionStart = this.caretPosition;
        _control_eventhandlingcenter__WEBPACK_IMPORTED_MODULE_1__["Eventhandlingcenter"].fireRedrawEvent();
    }
}
NodeViewComponent.ɵfac = function NodeViewComponent_Factory(t) { return new (t || NodeViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_nodeselectservice_service__WEBPACK_IMPORTED_MODULE_2__["NodeselectserviceService"])); };
NodeViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NodeViewComponent, selectors: [["mm-node-view"]], decls: 2, vars: 0, consts: [["id", "nodeContentEditor", 3, "input"], ["textbox", ""]], template: function NodeViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "textarea", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function NodeViewComponent_Template_textarea_input_0_listener($event) { return ctx.changeText($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["textarea[_ngcontent-%COMP%]   .boxsizingBorder[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm9kZS12aWV3L25vZGUtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBR1ksc0JBQXNCO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvbm9kZS12aWV3L25vZGUtdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGV4dGFyZWEgLmJveHNpemluZ0JvcmRlciB7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NodeViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mm-node-view',
                template: '{{node}}',
                templateUrl: './node-view.component.html',
                styleUrls: ['./node-view.component.css'],
            }]
    }], function () { return [{ type: _shared_nodeselectservice_service__WEBPACK_IMPORTED_MODULE_2__["NodeselectserviceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/bread-crum-service.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/bread-crum-service.ts ***!
  \**********************************************/
/*! exports provided: BreadCrumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadCrumService", function() { return BreadCrumService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class BreadCrumService {
    constructor() {
        this.breadCrumSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.breadCrums = this.breadCrumSource.asObservable();
    }
    changeBreadCrums(mapList) {
        console.log("breadcrums changed to " + mapList.length);
        this.breadCrumSource.next(mapList);
    }
}
BreadCrumService.ɵfac = function BreadCrumService_Factory(t) { return new (t || BreadCrumService)(); };
BreadCrumService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BreadCrumService, factory: BreadCrumService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadCrumService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/map-navigation-service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/map-navigation-service.ts ***!
  \**************************************************/
/*! exports provided: MapNavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapNavigationService", function() { return MapNavigationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MapNavigationService {
    constructor() {
        this.goUpListeners = [];
    }
    goBackUpTo(i) {
        this.goUpListeners.forEach(element => {
            element.goBackUpTo(i);
        });
    }
}
MapNavigationService.ɵfac = function MapNavigationService_Factory(t) { return new (t || MapNavigationService)(); };
MapNavigationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MapNavigationService, factory: MapNavigationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapNavigationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/mappersistenceservice.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/mappersistenceservice.ts ***!
  \*************************************************/
/*! exports provided: Mappersistenceservice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mappersistenceservice", function() { return Mappersistenceservice; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Mappersistenceservice {
    constructor() { this.listeners = []; }
    get listeners() {
        return this._listeners;
    }
    set listeners(value) {
        this._listeners = value;
    }
    save() {
        // console.log("PersistenceService SAVE called");
        this.listeners.forEach(listener => {
            listener.save();
        });
    }
    load() {
        // console.log("PersistenceService LOAD called");
        this.listeners.forEach(listener => {
            listener.load();
        });
    }
    clearAll() {
        this.listeners.forEach(listener => {
            listener.clear();
        });
    }
}
Mappersistenceservice.ɵfac = function Mappersistenceservice_Factory(t) { return new (t || Mappersistenceservice)(); };
Mappersistenceservice.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Mappersistenceservice, factory: Mappersistenceservice.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Mappersistenceservice, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/nodeselectservice.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/nodeselectservice.service.ts ***!
  \*****************************************************/
/*! exports provided: NodeselectserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeselectserviceService", function() { return NodeselectserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class NodeselectserviceService {
    constructor() {
        this.selectionSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.currentSelection = this.selectionSource.asObservable();
    }
    changeSelection(node) {
        // console.log("CHANGE SELECTION!")
        this.selectionSource.next(node);
    }
}
NodeselectserviceService.ɵfac = function NodeselectserviceService_Factory(t) { return new (t || NodeselectserviceService)(); };
NodeselectserviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NodeselectserviceService, factory: NodeselectserviceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NodeselectserviceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/point2-d.ts":
/*!************************************!*\
  !*** ./src/app/shared/point2-d.ts ***!
  \************************************/
/*! exports provided: Point2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point2D", function() { return Point2D; });
class Point2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/MyndMap/MyndMap/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map