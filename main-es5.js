function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _menubar_menubar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./menubar/menubar.component */
    "./src/app/menubar/menubar.component.ts");
    /* harmony import */


    var _node_view_node_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./node-view/node-view.component */
    "./src/app/node-view/node-view.component.ts");
    /* harmony import */


    var _map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./map/map.component */
    "./src/app/map/map.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'MyndMap';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["mm-root"]],
      decls: 7,
      vars: 0,
      consts: [[1, "container"], [1, "one"], [1, "nodeview"], [1, "two"], [1, "map"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      },
      directives: [_menubar_menubar_component__WEBPACK_IMPORTED_MODULE_1__["MenubarComponent"], _node_view_node_view_component__WEBPACK_IMPORTED_MODULE_2__["NodeViewComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mm-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _map_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./map/map.component */
    "./src/app/map/map.component.ts");
    /* harmony import */


    var _node_view_node_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./node-view/node-view.component */
    "./src/app/node-view/node-view.component.ts");
    /* harmony import */


    var _menubar_menubar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./menubar/menubar.component */
    "./src/app/menubar/menubar.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_4__["MapComponent"], _node_view_node_view_component__WEBPACK_IMPORTED_MODULE_5__["NodeViewComponent"], _menubar_menubar_component__WEBPACK_IMPORTED_MODULE_6__["MenubarComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_4__["MapComponent"], _node_view_node_view_component__WEBPACK_IMPORTED_MODULE_5__["NodeViewComponent"], _menubar_menubar_component__WEBPACK_IMPORTED_MODULE_6__["MenubarComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/control/eventhandlingcenter.ts":
  /*!************************************************!*\
    !*** ./src/app/control/eventhandlingcenter.ts ***!
    \************************************************/

  /*! exports provided: Eventhandlingcenter */

  /***/
  function srcAppControlEventhandlingcenterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Eventhandlingcenter", function () {
      return Eventhandlingcenter;
    });

    var Eventhandlingcenter = /*#__PURE__*/function () {
      function Eventhandlingcenter() {
        _classCallCheck(this, Eventhandlingcenter);
      }

      _createClass(Eventhandlingcenter, null, [{
        key: "addRedrawEventListener",
        value: function addRedrawEventListener(listener) {
          this.redrawListeners.push(listener);
        }
      }, {
        key: "removeRedrawEventListener",
        value: function removeRedrawEventListener(listener) {
          this.redrawListeners.splice(this.redrawListeners.indexOf(listener), 1);
        }
      }, {
        key: "fireRedrawEvent",
        value: function fireRedrawEvent() {
          console.log("fire redraw event on listeners");
          Eventhandlingcenter.redrawListeners.forEach(function (element) {
            element.redraw();
          });
        }
      }, {
        key: "addNodeeventlistener",
        value: function addNodeeventlistener(listener) {
          this.nodeEventListeners.push(listener);
        }
      }, {
        key: "removeNodeeventlistener",
        value: function removeNodeeventlistener(listener) {
          this.nodeEventListeners.splice(this.nodeEventListeners.indexOf(listener), 1);
        }
      }, {
        key: "nodeEvent",
        value: function nodeEvent(node) {
          this.nodeEventListeners.forEach(function (listener) {
            listener.nodeTextChange(node);
          });
        }
      }]);

      return Eventhandlingcenter;
    }();

    Eventhandlingcenter.nodeEventListeners = []; // static connectionEventListeners: Connectioneventlistener[] = [];

    Eventhandlingcenter.redrawListeners = [];
    /***/
  },

  /***/
  "./src/app/map/map.component.ts":
  /*!**************************************!*\
    !*** ./src/app/map/map.component.ts ***!
    \**************************************/

  /*! exports provided: MapComponent */

  /***/
  function srcAppMapMapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapComponent", function () {
      return MapComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _model_mapmanager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../model/mapmanager */
    "./src/app/model/mapmanager.ts");
    /* harmony import */


    var _control_eventhandlingcenter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../control/eventhandlingcenter */
    "./src/app/control/eventhandlingcenter.ts");
    /* harmony import */


    var _shared_nodeselectservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/nodeselectservice.service */
    "./src/app/shared/nodeselectservice.service.ts");
    /* harmony import */


    var _shared_mappersistenceservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/mappersistenceservice */
    "./src/app/shared/mappersistenceservice.ts");
    /* harmony import */


    var _shared_map_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/map-navigation-service */
    "./src/app/shared/map-navigation-service.ts");
    /* harmony import */


    var _shared_bread_crum_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/bread-crum-service */
    "./src/app/shared/bread-crum-service.ts");

    var _c0 = ["NodeDisplay"]; //import node n stuff

    /**
     displays the Map itself, elements and connections.
    */

    var MapComponent = /*#__PURE__*/function () {
      function MapComponent(nodeSelectionService, persistenceService, navigationService, breadCrumService) {
        _classCallCheck(this, MapComponent);

        this.counter = 0;
        this.clickDelay = 200;
        this.nodeSelectionService = nodeSelectionService;
        this.persistenceService = persistenceService;
        this.navigationService = navigationService;
        this.navigationService.goUpListeners.push(this);
        this.breadCrumService = breadCrumService;

        _control_eventhandlingcenter__WEBPACK_IMPORTED_MODULE_3__["Eventhandlingcenter"].addNodeeventlistener(this);
      }

      _createClass(MapComponent, [{
        key: "nodeTextChange",
        value: function nodeTextChange(node) {
          var _this = this;

          var oldFont = this.ctx.font;
          this.ctx.font = "20px Arial";
          var titleLines = node.title.split("\n");
          var i = 1;
          var longestLine = 0;
          var totalHeight = 10;
          titleLines.forEach(function (line) {
            longestLine = Math.max(longestLine, _this.ctx.measureText(line).width);
            totalHeight = totalHeight + 20;
          });
          longestLine += 10;
          node.viewModel.width = longestLine;
          node.viewModel.height = totalHeight;
          this.ctx.font = oldFont;
        }
      }, {
        key: "redraw",
        value: function redraw() {
          this.update();
        }
      }, {
        key: "goBackUpTo",
        value: function goBackUpTo(i) {
          this.mapmanager.goBackUpTo(i);
          this.breadCrumService.changeBreadCrums(this.mapmanager.mapPath);
          this.update();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          console.log("l9p00000000000000009üüüüüüüüüüüüüüüü09999999u000000o05674 989ß759en088iuiortg  i");

          _control_eventhandlingcenter__WEBPACK_IMPORTED_MODULE_3__["Eventhandlingcenter"].addRedrawEventListener(this);

          this.mapmanager = new _model_mapmanager__WEBPACK_IMPORTED_MODULE_2__["Mapmanager"](this.persistenceService);
          this.timeOfLastMouseDownEvent = new Date();
          this.timeOfLastDoubleMouseDownEvent = new Date();
          this.TimeOfLastMouseUpAfterDoubleDown = new Date();
          this.MouseSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(document, 'mousemove').subscribe(function (e) {
            return _this2.performMouseMove(e);
          }); //TODO: dont forget unsubscription

          this.MouseSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(document, 'mousedown').subscribe(function (e) {
            return _this2.performMouseDown(e);
          });
          this.MouseSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(document, 'mouseup').subscribe(function (e) {
            return _this2.performMouseUp(e);
          });
          this.ctx = this.canvas.nativeElement.getContext('2d');
          this.mapmanager.loadFromLocalStorage(); //set canvas to use fill size of parent div

          var w = document.getElementsByClassName("two").item(0).clientWidth;
          var h = document.getElementsByClassName("two").item(0).clientHeight; // document.getElementsByClassName("two").item(0).addEventListener();

          this.canvas.nativeElement.width = w - 10;
          this.canvas.nativeElement.height = h - 20;
          this.update();
        }
      }, {
        key: "update",
        value: function update() {
          var localcanvas = this.ctx.canvas;
          this.ctx.clearRect(0, 0, localcanvas.width, localcanvas.height); //paint node Delete Area

          this.drawDeleteZone();
          this.mapmanager.saveToLocalStorage();
          this.mapmanager.redrawMap(this.ctx);
        }
      }, {
        key: "updateWithoutPersistence",
        value: function updateWithoutPersistence() {
          var localcanvas = this.ctx.canvas;
          this.ctx.clearRect(0, 0, localcanvas.width, localcanvas.height); //paint node Delete Area

          this.drawDeleteZone();
          this.mapmanager.redrawMap(this.ctx);
        }
      }, {
        key: "drawDeleteZone",
        value: function drawDeleteZone() {
          this.ctx.fillStyle = "red";
          this.ctx.fillRect(0, 0, 80, 80);
          this.ctx.font = "15px Arial";
          this.ctx.fillStyle = "white";
          this.ctx.fillText("delete ", 15, 30);
          this.ctx.fillText("here", 20, 50);
        }
      }, {
        key: "handle",
        value: function handle(event) {
          var _this3 = this;

          var reader = new FileReader();
          var result = "empty";

          if (event != null) {
            reader.onload = function (event) {
              result = event.target.result.toString();

              _this3.mapmanager.loadJsonAsMap(result);
            };
          }

          reader.readAsText(event.currentTarget.files[0]);
          this.update();
        }
      }, {
        key: "isEventOnCanvas",
        value: function isEventOnCanvas(e) {
          return e.clientX > this.canvas.nativeElement.offsetLeft && e.clientX < this.canvas.nativeElement.width + this.canvas.nativeElement.offsetLeft && e.clientY > this.canvas.nativeElement.offsetTop && e.clientY < this.canvas.nativeElement.height + this.canvas.nativeElement.offsetTop;
        }
      }, {
        key: "performMouseDown",
        value: function performMouseDown(e) {
          var rect = e.target.getBoundingClientRect();
          var x = e.clientX - rect.left - 1; //x position within the element.

          var y = e.clientY - rect.top - 1; //y position within the element.

          if (this.isEventOnCanvas(e)) {
            var element = this.mapmanager.firstNodeAt(x, y); // console.log("element was found at: "+element.viewModel.x + ", " + element.viewModel.y)

            if (new Date().valueOf() - this.timeOfLastDoubleMouseDownEvent.valueOf() < this.clickDelay) {
              if (element != null) {
                this.performTrippleMouseDownOnElement(x, y, element);
              } else {
                this.performTrippleMouseDownOnEmptySpace(x, y);
              }
            } else if (new Date().valueOf() - this.timeOfLastMouseDownEvent.valueOf() < this.clickDelay) {
              this.timeOfLastDoubleMouseDownEvent = new Date();

              if (element != null) {
                this.performDoubleMouseDownOnElement(x, y, element);
              } else {
                this.performDoubleMouseDownOnEmptySpace(x, y);
              }
            } else {
              if (element != null) {
                this.performSingleMouseDownOnElement(x, y, element);
              } else {
                this.performSingleMouseDownOnEmptySpace(x, y);
              }
            } // console.log("updating last mouse down timer!")


            this.timeOfLastMouseDownEvent = new Date();
            this.update();
          }
        }
      }, {
        key: "performMouseUp",
        value: function performMouseUp(e) {
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
              } else {
                // console.log("on empty space");
                this.performDoubleClickOnEmptySpace(x, y);
              }
            } else {
              if (this.draged == null) {
                //TODO: there might be logic gap here, like, driggering a click instead of a unrelated mouseup
                // console.log("we had a single click");
                if (element != null) {
                  // console.log("on an element");
                  this.performSingleClickOnElement(x, y, element);
                } else {
                  // console.log("on empty space");
                  this.performSingleClickOnEmptySpace(x, y);
                }
              } else {
                // console.log("we had a drag stop");
                if (element != null) {
                  this.performDragStopOnElement(x, y, element); // console.log("on an element");
                } else {
                  // console.log("on empty space");
                  this.performDragStopOnEmptySpace(x, y);
                }
              }
            }

            this.update();
          }
        }
      }, {
        key: "performSingleMouseDownOnEmptySpace",
        value: function performSingleMouseDownOnEmptySpace(x, y) {
          // console.log("we had a single mousedown!");
          // console.log("on empty space");
          if (this.selected != null) {
            this.selected.viewModel.selected = false;
            this.selected = null;
            this.nodeSelectionService.changeSelection(null);
          }
        }
      }, {
        key: "performSingleMouseDownOnElement",
        value: function performSingleMouseDownOnElement(x, y, element) {
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
      }, {
        key: "performDoubleMouseDownOnElement",
        value: function performDoubleMouseDownOnElement(x, y, element) {
          console.log("we had a double mousedown!");
          console.log("on an element"); // throw new Error("performDoubleMouseDownOnElement not implemented.");
        }
      }, {
        key: "performDoubleMouseDownOnEmptySpace",
        value: function performDoubleMouseDownOnEmptySpace(x, y) {
          console.log("we had a double mousedown!");
          console.log("on empty space"); // throw new Error("performDoubleMouseDownOnEmptySpace not implemented.");
        }
      }, {
        key: "performTrippleMouseDownOnElement",
        value: function performTrippleMouseDownOnElement(x, y, element) {
          console.log("we had a tripple mousedown!");
          console.log("on an element"); // throw new Error("performTrippleMouseDownOnElement not implemented.");
        }
      }, {
        key: "performTrippleMouseDownOnEmptySpace",
        value: function performTrippleMouseDownOnEmptySpace(x, y) {
          console.log("we had a tripple mousedown!");
          console.log("on empty space"); // throw new Error("performTrippleMouseDownOnEmptySpace not implemented.");
        }
      }, {
        key: "performDoubleClickOnElement",
        value: function performDoubleClickOnElement(x, y, element) {
          // throw new Error("Method not implemented.");
          console.log("mapmanager go DEEPER");
          this.mapmanager.goDeeper(element);
          this.breadCrumService.changeBreadCrums(this.mapmanager.mapPath);
        }
      }, {
        key: "performDoubleClickOnEmptySpace",
        value: function performDoubleClickOnEmptySpace(x, y) {
          console.log("calling mapmanager!");
          this.mapmanager.addNodeNewNode(x, y);
        }
      }, {
        key: "performSingleClickOnElement",
        value: function performSingleClickOnElement(x, y, element) {// throw new Error("Method not implemented.");
        }
      }, {
        key: "performSingleClickOnEmptySpace",
        value: function performSingleClickOnEmptySpace(x, y) {// throw new Error("Method not implemented.");
        }
      }, {
        key: "performDragStopOnElement",
        value: function performDragStopOnElement(x, y, element) {
          console.log("mouseup on element, reset back to start position");
          this.draged.viewModel.x = this.mouseDownStartLocationX;
          this.draged.viewModel.y = this.mouseDownStartLocationY;
          var connection = this.mapmanager.findNodesConnection(this.draged, element);

          if (connection == null) {
            // console.log("connection was null, so we connect the nodes!");
            this.mapmanager.connectNodes(this.draged, element);
          } else {
            // console.log("connection was null, so we connect the nodes!");
            // Eventhandlingcenter.removeRedrawEventListener(connection);
            // this.mapmanager0.current.connections.splice(this.mapmanager.current.connections.indexOf(connection));
            this.mapmanager.diconnectNodes(this.draged, element, connection);
          }

          this.draged.viewModel.dragged = false;
          this.draged = null;
        }
      }, {
        key: "performDragStopOnEmptySpace",
        value: function performDragStopOnEmptySpace(x, y) {
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
      }, {
        key: "performMouseMove",
        value: function performMouseMove(e) {
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
      }]);

      return MapComponent;
    }();

    MapComponent.ɵfac = function MapComponent_Factory(t) {
      return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_nodeselectservice_service__WEBPACK_IMPORTED_MODULE_4__["NodeselectserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_mappersistenceservice__WEBPACK_IMPORTED_MODULE_5__["Mappersistenceservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_map_navigation_service__WEBPACK_IMPORTED_MODULE_6__["MapNavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_bread_crum_service__WEBPACK_IMPORTED_MODULE_7__["BreadCrumService"]));
    };

    MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MapComponent,
      selectors: [["mm-map"]],
      viewQuery: function MapComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
        }
      },
      decls: 3,
      vars: 0,
      consts: [["id", "mapview", "width", "800", "height", "700", 1, "canvas"], ["NodeDisplay", ""], ["type", "file", 2, "display", "none", 3, "change"]],
      template: function MapComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "canvas", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MapComponent_Template_input_change_2_listener($event) {
            return ctx.handle($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcC9tYXAuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mm-map',
          templateUrl: './map.component.html',
          styleUrls: ['./map.component.css']
        }]
      }], function () {
        return [{
          type: _shared_nodeselectservice_service__WEBPACK_IMPORTED_MODULE_4__["NodeselectserviceService"]
        }, {
          type: _shared_mappersistenceservice__WEBPACK_IMPORTED_MODULE_5__["Mappersistenceservice"]
        }, {
          type: _shared_map_navigation_service__WEBPACK_IMPORTED_MODULE_6__["MapNavigationService"]
        }, {
          type: _shared_bread_crum_service__WEBPACK_IMPORTED_MODULE_7__["BreadCrumService"]
        }];
      }, {
        canvas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['NodeDisplay', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/menubar/menubar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/menubar/menubar.component.ts ***!
    \**********************************************/

  /*! exports provided: MenubarComponent */

  /***/
  function srcAppMenubarMenubarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenubarComponent", function () {
      return MenubarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_mappersistenceservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/mappersistenceservice */
    "./src/app/shared/mappersistenceservice.ts");
    /* harmony import */


    var _shared_map_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/map-navigation-service */
    "./src/app/shared/map-navigation-service.ts");
    /* harmony import */


    var _shared_bread_crum_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/bread-crum-service */
    "./src/app/shared/bread-crum-service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MenubarComponent_a_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenubarComponent_a_14_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var i_r2 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.selectBreadCrum(i_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r2 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.breadCrumList[i_r2].title);
      }
    }

    var MenubarComponent = /*#__PURE__*/function () {
      function MenubarComponent(persistenceService, navigationService, breadCrumService) {
        var _this4 = this;

        _classCallCheck(this, MenubarComponent);

        this.testText = "test";
        this.breadCrumList = [];
        this.persistenceService = persistenceService;
        this.navigationService = navigationService;
        this.breadCrumService = breadCrumService;
        this.breadCrumService.breadCrums.subscribe(function (breadCrums) {
          return _this4.setUpBreadCrums(breadCrums);
        });
      }

      _createClass(MenubarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectBreadCrum",
        value: function selectBreadCrum(i) {
          this.navigationService.goBackUpTo(i);
        }
      }, {
        key: "setUpBreadCrums",
        value: function setUpBreadCrums(breadCrums) {
          this.breadCrumList = breadCrums;
        }
      }, {
        key: "clear",
        value: function clear() {
          this.persistenceService.clearAll();
        }
      }, {
        key: "saveMap",
        value: function saveMap() {
          // console.log("saving map button pressed");
          this.persistenceService.save();
        }
      }, {
        key: "loadMap",
        value: function loadMap() {
          // console.log("loading map button pressed");
          this.persistenceService.load();
        }
      }]);

      return MenubarComponent;
    }();

    MenubarComponent.ɵfac = function MenubarComponent_Factory(t) {
      return new (t || MenubarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_mappersistenceservice__WEBPACK_IMPORTED_MODULE_1__["Mappersistenceservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_map_navigation_service__WEBPACK_IMPORTED_MODULE_2__["MapNavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_bread_crum_service__WEBPACK_IMPORTED_MODULE_3__["BreadCrumService"]));
    };

    MenubarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenubarComponent,
      selectors: [["mm-menubar"]],
      decls: 15,
      vars: 1,
      consts: [[1, "navbar"], [1, "dropdown"], [1, "dropbtn"], [1, "fa", "fa-caret-down"], [1, "dropdown-content"], ["href", "#", 3, "click"], ["href", "#", 1, "removeButton", 3, "click"], ["href", "#"], ["href", "#", 3, "click", 4, "ngFor", "ngForOf"]],
      template: function MenubarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Menu ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenubarComponent_Template_a_click_6_listener() {
            return ctx.saveMap();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "save map");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenubarComponent_Template_a_click_8_listener() {
            return ctx.loadMap();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "load map");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenubarComponent_Template_a_click_10_listener() {
            return ctx.clear();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Remove All!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Map History:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MenubarComponent_a_14_Template, 2, 1, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.breadCrumList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnViYXIvbWVudWJhci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenubarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mm-menubar',
          templateUrl: './menubar.component.html',
          styleUrls: ['./menubar.component.css']
        }]
      }], function () {
        return [{
          type: _shared_mappersistenceservice__WEBPACK_IMPORTED_MODULE_1__["Mappersistenceservice"]
        }, {
          type: _shared_map_navigation_service__WEBPACK_IMPORTED_MODULE_2__["MapNavigationService"]
        }, {
          type: _shared_bread_crum_service__WEBPACK_IMPORTED_MODULE_3__["BreadCrumService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/model/connectionmodel.ts":
  /*!******************************************!*\
    !*** ./src/app/model/connectionmodel.ts ***!
    \******************************************/

  /*! exports provided: Connectionmodel */

  /***/
  function srcAppModelConnectionmodelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Connectionmodel", function () {
      return Connectionmodel;
    });
    /* harmony import */


    var _connectionviewmodel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./connectionviewmodel */
    "./src/app/model/connectionviewmodel.ts");

    var Connectionmodel = function Connectionmodel(node1, node2) {
      _classCallCheck(this, Connectionmodel);

      this.node1 = node1;
      this.node2 = node2;
      this.viewmodel = new _connectionviewmodel__WEBPACK_IMPORTED_MODULE_0__["Connectionviewmodel"]();
    };
    /***/

  },

  /***/
  "./src/app/model/connectionviewmodel.ts":
  /*!**********************************************!*\
    !*** ./src/app/model/connectionviewmodel.ts ***!
    \**********************************************/

  /*! exports provided: Connectionviewmodel */

  /***/
  function srcAppModelConnectionviewmodelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Connectionviewmodel", function () {
      return Connectionviewmodel;
    });

    var Connectionviewmodel = /*#__PURE__*/function () {
      function Connectionviewmodel() {
        var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "black";

        _classCallCheck(this, Connectionviewmodel);

        this.color = color;
      }

      _createClass(Connectionviewmodel, [{
        key: "draw",
        value: function draw(canvas, model) {
          canvas.strokeStyle = this.color;
          canvas.beginPath();
          canvas.moveTo(model.node1.viewModel.x + model.node1.viewModel.width / 2, model.node1.viewModel.y + model.node1.viewModel.height / 2);
          canvas.lineTo(model.node2.viewModel.x + model.node2.viewModel.width / 2, model.node2.viewModel.y + model.node2.viewModel.height / 2);
          canvas.stroke();
        }
      }]);

      return Connectionviewmodel;
    }();
    /***/

  },

  /***/
  "./src/app/model/map-version-container.ts":
  /*!************************************************!*\
    !*** ./src/app/model/map-version-container.ts ***!
    \************************************************/

  /*! exports provided: MapVersionContainer */

  /***/
  function srcAppModelMapVersionContainerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapVersionContainer", function () {
      return MapVersionContainer;
    });

    var MapVersionContainer = function MapVersionContainer(map) {
      _classCallCheck(this, MapVersionContainer);

      this.map = map;
      this.version = "0.0.1";
    };
    /***/

  },

  /***/
  "./src/app/model/mapmanager.ts":
  /*!*************************************!*\
    !*** ./src/app/model/mapmanager.ts ***!
    \*************************************/

  /*! exports provided: Mapmanager */

  /***/
  function srcAppModelMapmanagerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Mapmanager", function () {
      return Mapmanager;
    });
    /* harmony import */


    var _model_nodemodel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../model/nodemodel */
    "./src/app/model/nodemodel.ts");
    /* harmony import */


    var _shared_point2_d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/point2-d */
    "./src/app/shared/point2-d.ts");
    /* harmony import */


    var _connectionmodel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./connectionmodel */
    "./src/app/model/connectionmodel.ts");
    /* harmony import */


    var _map_version_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./map-version-container */
    "./src/app/model/map-version-container.ts");
    /* harmony import */


    var _mapmodel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./mapmodel */
    "./src/app/model/mapmodel.ts");
    /* harmony import */


    var _nodeshape_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./nodeshape.enum */
    "./src/app/model/nodeshape.enum.ts");

    var Mapmanager = /*#__PURE__*/function () {
      function Mapmanager(persistenceService) {
        _classCallCheck(this, Mapmanager);

        this.current = new _mapmodel__WEBPACK_IMPORTED_MODULE_4__["Mapmodel"]("root");
        this.root = this.current;
        persistenceService.listeners.push(this);
        this.mapPath = [];
      }

      _createClass(Mapmanager, [{
        key: "clear",
        value: function clear() {
          this.current = new _mapmodel__WEBPACK_IMPORTED_MODULE_4__["Mapmodel"]("root");
          this.root = this.current;
          this.mapPath = [];
        }
      }, {
        key: "goDeeper",
        value: function goDeeper(diveNode) {
          if (diveNode.submap == null) {
            diveNode.submap = new _mapmodel__WEBPACK_IMPORTED_MODULE_4__["Mapmodel"](diveNode.title);
          }

          this.mapPath.push(this.current);
          console.log("Is the Submap null? " + (diveNode.submap == null));
          this.current = diveNode.submap;
        }
      }, {
        key: "goBackUpTo",
        value: function goBackUpTo(i) {
          console.log("cut to index: " + i);
          this.mapPath.splice(i + 1);

          if (this.mapPath.length > 0) {
            this.current = this.mapPath.pop(); // console.log("going up one layer");
          } else {
            console.log("You seem to be at the root element");
          }
        }
      }, {
        key: "saveToLocalStorage",
        value: function saveToLocalStorage() {
          if (window.localStorage) {
            window.localStorage.setItem('map.json', JSON.stringify(new _map_version_container__WEBPACK_IMPORTED_MODULE_3__["MapVersionContainer"](this.root), null, 2));
          }
        }
      }, {
        key: "loadFromLocalStorage",
        value: function loadFromLocalStorage() {
          if (window.localStorage) {
            var json = window.localStorage.getItem('map.json');

            if (json) {
              this.loadJsonAsMap(json);
            }
          }
        }
      }, {
        key: "clearFromLocalStorage",
        value: function clearFromLocalStorage() {
          if (window.localStorage) {
            window.localStorage.removeItem('map.json');
          }
        }
      }, {
        key: "addNodeNewNode",
        value: function addNodeNewNode(x, y) {
          this.addNode(new _model_nodemodel__WEBPACK_IMPORTED_MODULE_0__["NodeModel"](x, y, Mapmanager.nextID++));
        }
      }, {
        key: "save",
        value: function save() {
          // console.log("called save")
          this.download('map.json', JSON.stringify(new _map_version_container__WEBPACK_IMPORTED_MODULE_3__["MapVersionContainer"](this.root), null, 2)); // this.saveToLocalStorage();
        }
      }, {
        key: "download",
        value: function download(filename, text) {
          // this works, dont ask why :D its not mine, I found it somewhere, possibly stack overflow
          var pom = document.createElement('a');
          pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
          pom.setAttribute('download', filename);

          if (document.createEvent) {
            var event = document.createEvent('MouseEvents');
            event.initEvent('click', true, true);
            pom.dispatchEvent(event);
          } else {
            pom.click();
          }
        }
      }, {
        key: "load",
        value: function load() {
          console.log("called load");
          this.openFile();
        }
      }, {
        key: "openFile",
        value: function openFile() {
          document.querySelector('input').click();
        }
      }, {
        key: "loadJsonAsMap",
        value: function loadJsonAsMap(json) {
          // console.log("trying to set up OLD MAP!")
          // console.log(json);
          var versioncontainer = JSON.parse(json);
          console.log("Loaded Version: " + versioncontainer.version);
          var instance = versioncontainer.map; // console.log("connections: " + instance.connections.length)
          // console.log("Nodes: " + instance.nodes.length);

          this.restoreConnectionNodes(instance);
          this.current = instance;
          this.root = instance;
          Mapmanager.nextID = this.getMaxID(this.root) + 1;
        }
      }, {
        key: "getMaxID",
        value: function getMaxID(map) {
          var _this5 = this;

          var maxID = 0;
          map.nodes.forEach(function (node) {
            if (node.submap == null || node.submap.nodes.length == 0) {
              maxID = Math.max(maxID, node.id);
            } else {
              maxID = _this5.getMaxID(node.submap);
            }
          });
          return maxID;
        }
      }, {
        key: "firstNodeAt",
        value: function firstNodeAt(x, y) {
          var _this6 = this;

          // console.log("searching for element at: "+x+", "+y)
          var node = null;
          this.current.nodes.forEach(function (element) {
            if (_this6.isUnder(element, x, y)) {
              node = element;
              return;
            }
          });
          return node;
        }
      }, {
        key: "isUnder",
        value: function isUnder(node, x, y) {
          // console.log("this node is dragged: ");
          // console.log(this.viewModel.dragged);
          if (!node.viewModel.dragged) {
            if (node.viewModel.shape == _nodeshape_enum__WEBPACK_IMPORTED_MODULE_5__["Nodeshape"].RECTANGLE) {
              return node.viewModel.x < x && node.viewModel.y < y && node.viewModel.x + node.viewModel.width > x && node.viewModel.y + node.viewModel.height > y;
            } else if (node.viewModel.shape == _nodeshape_enum__WEBPACK_IMPORTED_MODULE_5__["Nodeshape"].CIRCLE) {
              var centerX = node.viewModel.x + node.viewModel.width / 2;
              var centerY = node.viewModel.y + node.viewModel.height / 2;
              var radius = node.viewModel.height / 2;
            } else if (node.viewModel.shape == _nodeshape_enum__WEBPACK_IMPORTED_MODULE_5__["Nodeshape"].SQUARE) {
              return node.viewModel.x < x && node.viewModel.y < y && node.viewModel.x + node.viewModel.width > x && node.viewModel.y + node.viewModel.height > y;
            } else if (node.viewModel.shape == _nodeshape_enum__WEBPACK_IMPORTED_MODULE_5__["Nodeshape"].DIAMOND) {}
          } else {
            // console.log("this.viewModel.dragged was false");
            return false;
          }
        }
      }, {
        key: "redrawMap",
        value: function redrawMap(canvas) {
          var _this7 = this;

          canvas.font = "20px Arial";
          canvas.fillStyle = "black";
          canvas.fillText("title: " + this.current.title, canvas.canvas.width / 2, 50); // console.log("drawing after update event");

          if (this.current.nodes.length == 0) {
            // console.log("printing default text");
            var lineOffset = 30;
            canvas.font = lineOffset + "px Arial";
            canvas.fillStyle = "black";
            canvas.fillText("1. double click to create a node", canvas.canvas.width / 2 - 15 * 10, canvas.canvas.height / 2);
            canvas.fillText("2.click once to select one, edit the content on the left", canvas.canvas.width / 2 - 24 * 10, canvas.canvas.height / 2 + lineOffset);
            canvas.fillText("3. drag one node on another to connect them", canvas.canvas.width / 2 - 22 * 10, canvas.canvas.height / 2 + lineOffset * 2);
            canvas.fillText("4. double click on a node will open/create its sub-map", canvas.canvas.width / 2 - 24 * 10, canvas.canvas.height / 2 + lineOffset * 3); // canvas.strokeText("opening your old map is nearly impossible, sorry...", canvas.canvas.width / 2 - 24 * 10, canvas.canvas.height / 2 + 80);
          }

          if (this.current.nodes.length > 0) {
            this.current.nodes.forEach(function (element) {
              _this7.drawNode(canvas, element);
            });
          }

          if (this.current.connections.length > 0) {
            this.current.connections.forEach(function (element) {
              _this7.drawConnection(canvas, element);
            });
          }
        }
      }, {
        key: "restoreConnectionNodes",
        value: function restoreConnectionNodes(map) {
          map.connections.forEach(function (connection) {
            map.nodes.forEach(function (newNode1) {
              // console.log("looking for: " + connection.node1.title + " and new node had: " + newNode1.title)
              if (connection.node1.id == newNode1.id) {
                // console.log("found node1 as : " + newNode1.title)
                connection.node1 = newNode1;
                return;
              }
            });
            map.nodes.forEach(function (newNode2) {
              if (connection.node2.id == newNode2.id) {
                // console.log("found node2 as : " + newNode2.title)
                connection.node2 = newNode2;
                return;
              }
            });
          });
        }
      }, {
        key: "findNodesConnection",
        value: function findNodesConnection(node1, node2) {
          var con = null;
          this.current.connections.forEach(function (connection) {
            if (connection.node1 == node1 && connection.node2 == node2 || connection.node2 == node1 && connection.node1 == node2) {
              con = connection;
              return;
            }
          });
          return con;
        }
      }, {
        key: "drawNode",
        value: function drawNode(canvas, model) {
          if (model.viewModel.selected == true) {
            canvas.strokeStyle = "green"; //TODO: make it changeable?
          } else {
            canvas.strokeStyle = model.viewModel.color;
          }

          if (model.viewModel.shape == _nodeshape_enum__WEBPACK_IMPORTED_MODULE_5__["Nodeshape"].CIRCLE) {
            canvas.ellipse(model.viewModel.x, model.viewModel.y, model.viewModel.width / 2, model.viewModel.height / 2, 0, 0, 0);
          } else if (model.viewModel.shape == _nodeshape_enum__WEBPACK_IMPORTED_MODULE_5__["Nodeshape"].DIAMOND) {} else if (model.viewModel.shape == _nodeshape_enum__WEBPACK_IMPORTED_MODULE_5__["Nodeshape"].RECTANGLE) {
            canvas.font = "20px Arial";
            var titleLines = model.title.split("\n");
            var i = 1; // var longestLine=0;
            // var totalHeight=10;

            canvas.fillStyle = "black";
            titleLines.forEach(function (line) {
              // longestLine=Math.max(longestLine,canvas.measureText(line).width);
              // totalHeight=totalHeight+20;
              canvas.fillText(line, model.viewModel.x + 5, model.viewModel.y + 20 * i++);
            }); // longestLine+=10;

            canvas.strokeRect(model.viewModel.x, model.viewModel.y, model.viewModel.width, model.viewModel.height);
            canvas.font = "8px Arial";
            canvas.strokeText((model.submap != null ? model.submap.nodes.length : "0") + "", model.viewModel.x + model.viewModel.width, model.viewModel.y + model.viewModel.height + 10);
          } else if (model.viewModel.shape == _nodeshape_enum__WEBPACK_IMPORTED_MODULE_5__["Nodeshape"].SQUARE) {
            canvas.strokeRect(model.viewModel.x, model.viewModel.y, model.viewModel.width, model.viewModel.height);
          }
        }
      }, {
        key: "deleteNode",
        value: function deleteNode(node) {
          var _this8 = this;

          //find all connections with this node and kill them
          var consToDelete = [];
          node.viewModel.selected = false;
          this.current.connections.forEach(function (con) {
            if (con.node1 == node || con.node2 == node) {
              consToDelete.push(con);
            }
          });
          consToDelete.forEach(function (con) {
            _this8.current.connections.splice(_this8.current.connections.indexOf(con), 1);
          }); //find this node in list and kill it

          this.current.nodes.splice(this.current.nodes.indexOf(node), 1);
        }
      }, {
        key: "getIntersectionPoint",
        value: function getIntersectionPoint(vector1, vector2) {
          var factor = 0;
          return new _shared_point2_d__WEBPACK_IMPORTED_MODULE_1__["Point2D"](vector1.x * factor, vector1.y * factor);
        }
      }, {
        key: "GetConnectionStart",
        value: function GetConnectionStart(self, target) {
          switch (self.viewModel.shape) {
            case _nodeshape_enum__WEBPACK_IMPORTED_MODULE_5__["Nodeshape"].RECTANGLE:
            case _nodeshape_enum__WEBPACK_IMPORTED_MODULE_5__["Nodeshape"].SQUARE:
              var rec = {
                center: {
                  x: self.viewModel.x + self.viewModel.width / 2,
                  y: self.viewModel.y + self.viewModel.height / 2
                },
                top: self.viewModel.y,
                bottom: self.viewModel.y + self.viewModel.height,
                left: self.viewModel.x,
                right: self.viewModel.x + self.viewModel.width,
                width: self.viewModel.width,
                height: self.viewModel.height
              };
              var targetCenter = this.GetCenter(target);
              var selfCenter = rec.center;
              var relativeVector = {
                x: selfCenter.x - targetCenter.x,
                y: selfCenter.y - targetCenter.y
              };
              var m1 = (targetCenter.y - selfCenter.y) / (targetCenter.x - selfCenter.x);
              var m2 = (targetCenter.x - selfCenter.x) / (targetCenter.y - selfCenter.y);

              if (relativeVector.x / relativeVector.y < 1 && relativeVector.x / relativeVector.y > -1 && relativeVector.y < 0) {
                // over
                return {
                  x: selfCenter.x + rec.height / 2 * m2,
                  y: rec.bottom
                };
              } else if (relativeVector.x / relativeVector.y < 1 && relativeVector.x / relativeVector.y > -1 && relativeVector.y >= 0) {
                // under
                return {
                  x: selfCenter.x - rec.height / 2 * m2,
                  y: rec.top
                };
              } else if ((relativeVector.x / relativeVector.y >= 1 || relativeVector.x / relativeVector.y <= -1) && relativeVector.x > 0) {
                // right
                return {
                  x: rec.left,
                  y: selfCenter.y - rec.width / 2 * m1
                };
              } else if ((relativeVector.x / relativeVector.y >= 1 || relativeVector.x / relativeVector.y <= -1) && relativeVector.x <= 0) {
                // left
                return {
                  x: rec.right,
                  y: selfCenter.y + rec.width / 2 * m1
                };
              }

              break;

            default:
              return this.GetCenter(self);
          }
        }
      }, {
        key: "GetCenter",
        value: function GetCenter(self) {
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
      }, {
        key: "drawConnection",
        value: function drawConnection(canvas, model) {
          canvas.strokeStyle = model.viewmodel.color; // console.log("color of connection: "+ model.viewmodel.color)

          canvas.beginPath();
          var start = this.GetConnectionStart(model.node1, model.node2);
          var end = this.GetConnectionStart(model.node2, model.node1);
          canvas.moveTo(start.x, start.y);
          canvas.lineTo(end.x, end.y);
          canvas.stroke();
        }
      }, {
        key: "getRect",
        value: function getRect(n) {
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
            height: n.viewModel.height
          };
        }
      }, {
        key: "connectNodes",
        value: function connectNodes(node1, node2) {
          if (this.current.nodes.includes(node1) && this.current.nodes.includes(node2)) {
            var connection = new _connectionmodel__WEBPACK_IMPORTED_MODULE_2__["Connectionmodel"](node1, node2); // node1.addConnection(connection);
            // node2.addConnection(connection);

            this.current.connections.push(connection);
          } else {
            console.log("you managed to try to connect two nodes of which one wasnt even in this map. amazing and weird");
          }
        }
      }, {
        key: "diconnectNodes",
        value: function diconnectNodes(node1, node2, connection) {
          this.current.connections.splice(this.current.connections.lastIndexOf(connection), 1);
        }
      }, {
        key: "addNode",
        value: function addNode(node) {
          // console.log("adding node " + node.viewModel.x + ", " + node.viewModel.y + " " + node.title);
          this.current.nodes.push(node);
        }
      }, {
        key: "current",
        get: function get() {
          return this._current;
        },
        set: function set(value) {
          this._current = value;
        }
      }]);

      return Mapmanager;
    }();

    Mapmanager.nextID = 0;
    /***/
  },

  /***/
  "./src/app/model/mapmodel.ts":
  /*!***********************************!*\
    !*** ./src/app/model/mapmodel.ts ***!
    \***********************************/

  /*! exports provided: Mapmodel */

  /***/
  function srcAppModelMapmodelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Mapmodel", function () {
      return Mapmodel;
    });

    var Mapmodel = // source: Mapmodel;
    function Mapmodel(title) {
      _classCallCheck(this, Mapmodel);

      console.log("title of new map: " + title); // this.source = source;

      this.title = title;
      this.nodes = [];
      this.connections = [];
    };
    /***/

  },

  /***/
  "./src/app/model/nodemodel.ts":
  /*!************************************!*\
    !*** ./src/app/model/nodemodel.ts ***!
    \************************************/

  /*! exports provided: NodeModel */

  /***/
  function srcAppModelNodemodelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NodeModel", function () {
      return NodeModel;
    });
    /* harmony import */


    var _nodeviewmodel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./nodeviewmodel */
    "./src/app/model/nodeviewmodel.ts");

    var NodeModel = function NodeModel(x, y, id) {
      _classCallCheck(this, NodeModel);

      this.id = id;
      this.title = "title";
      this.content = this.title + "\n\n[nodeDisplayEnd]\n\n" + "content";
      this.viewModel = new _nodeviewmodel__WEBPACK_IMPORTED_MODULE_0__["Nodeviewmodel"](x, y, 40, 40); // Eventhandlingcenter.addRedrawEventListener(this);
      // this.connections=[];
    };
    /***/

  },

  /***/
  "./src/app/model/nodeshape.enum.ts":
  /*!*****************************************!*\
    !*** ./src/app/model/nodeshape.enum.ts ***!
    \*****************************************/

  /*! exports provided: Nodeshape */

  /***/
  function srcAppModelNodeshapeEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Nodeshape", function () {
      return Nodeshape;
    });

    var Nodeshape;

    (function (Nodeshape) {
      Nodeshape[Nodeshape["SQUARE"] = 0] = "SQUARE";
      Nodeshape[Nodeshape["CIRCLE"] = 1] = "CIRCLE";
      Nodeshape[Nodeshape["RECTANGLE"] = 2] = "RECTANGLE";
      Nodeshape[Nodeshape["DIAMOND"] = 3] = "DIAMOND";
    })(Nodeshape || (Nodeshape = {}));
    /***/

  },

  /***/
  "./src/app/model/nodeviewmodel.ts":
  /*!****************************************!*\
    !*** ./src/app/model/nodeviewmodel.ts ***!
    \****************************************/

  /*! exports provided: Nodeviewmodel */

  /***/
  function srcAppModelNodeviewmodelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Nodeviewmodel", function () {
      return Nodeviewmodel;
    });
    /* harmony import */


    var _nodeshape_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./nodeshape.enum */
    "./src/app/model/nodeshape.enum.ts");

    var Nodeviewmodel = function Nodeviewmodel(x, y, width, height) {
      var shape = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _nodeshape_enum__WEBPACK_IMPORTED_MODULE_0__["Nodeshape"].RECTANGLE;
      var color = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "black";

      _classCallCheck(this, Nodeviewmodel);

      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.shape = shape;
      this.color = color;
      this.dragged = false;
      this.selected = false;
    };
    /***/

  },

  /***/
  "./src/app/node-view/node-view.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/node-view/node-view.component.ts ***!
    \**************************************************/

  /*! exports provided: NodeViewComponent */

  /***/
  function srcAppNodeViewNodeViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NodeViewComponent", function () {
      return NodeViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _control_eventhandlingcenter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../control/eventhandlingcenter */
    "./src/app/control/eventhandlingcenter.ts");
    /* harmony import */


    var _shared_nodeselectservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/nodeselectservice.service */
    "./src/app/shared/nodeselectservice.service.ts");
    /**
     * component to display details of a selected Node, like bigger version of immages, Text, or combination of both
     */


    var NodeViewComponent = /*#__PURE__*/function () {
      function NodeViewComponent(nodeSelectionService) {
        _classCallCheck(this, NodeViewComponent);

        this.nodeSelectionService = nodeSelectionService;
      }

      _createClass(NodeViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.nodeSelectionService.currentSelection.subscribe(function (node) {
            return _this9.changeNode(node);
          });
        } // displayText(node: NodeModel): string {
        //   if (node == null)
        //     return "";
        //   else return node.title + " \n" + node.content;
        // }

      }, {
        key: "changeNode",
        value: function changeNode(node) {
          // console.log("new node"+node.title+ "set with content"+ node.content);
          var textArea = document.getElementById("nodeContentEditor");
          this.node = node;

          if (node != null) {
            textArea.value = this.node.content;
          } else {
            textArea.value = "";
          }
        }
      }, {
        key: "changeText",
        value: function changeText(value) {
          var textArea = document.getElementById("nodeContentEditor");
          this.caretPosition = textArea.selectionStart;
          this.node.title = value.split("[nodeDisplayEnd]")[0].trim();
          this.node.content = value;

          _control_eventhandlingcenter__WEBPACK_IMPORTED_MODULE_1__["Eventhandlingcenter"].nodeEvent(this.node);

          textArea.selectionStart = this.caretPosition;

          _control_eventhandlingcenter__WEBPACK_IMPORTED_MODULE_1__["Eventhandlingcenter"].fireRedrawEvent();
        }
      }]);

      return NodeViewComponent;
    }();

    NodeViewComponent.ɵfac = function NodeViewComponent_Factory(t) {
      return new (t || NodeViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_nodeselectservice_service__WEBPACK_IMPORTED_MODULE_2__["NodeselectserviceService"]));
    };

    NodeViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NodeViewComponent,
      selectors: [["mm-node-view"]],
      decls: 2,
      vars: 0,
      consts: [["id", "nodeContentEditor", 3, "input"], ["textbox", ""]],
      template: function NodeViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "textarea", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function NodeViewComponent_Template_textarea_input_0_listener($event) {
            return ctx.changeText($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["textarea[_ngcontent-%COMP%]   .boxsizingBorder[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm9kZS12aWV3L25vZGUtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBR1ksc0JBQXNCO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvbm9kZS12aWV3L25vZGUtdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGV4dGFyZWEgLmJveHNpemluZ0JvcmRlciB7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NodeViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mm-node-view',
          template: '{{node}}',
          templateUrl: './node-view.component.html',
          styleUrls: ['./node-view.component.css']
        }]
      }], function () {
        return [{
          type: _shared_nodeselectservice_service__WEBPACK_IMPORTED_MODULE_2__["NodeselectserviceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/bread-crum-service.ts":
  /*!**********************************************!*\
    !*** ./src/app/shared/bread-crum-service.ts ***!
    \**********************************************/

  /*! exports provided: BreadCrumService */

  /***/
  function srcAppSharedBreadCrumServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadCrumService", function () {
      return BreadCrumService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var BreadCrumService = /*#__PURE__*/function () {
      function BreadCrumService() {
        _classCallCheck(this, BreadCrumService);

        this.breadCrumSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.breadCrums = this.breadCrumSource.asObservable();
      }

      _createClass(BreadCrumService, [{
        key: "changeBreadCrums",
        value: function changeBreadCrums(mapList) {
          console.log("breadcrums changed to " + mapList.length);
          this.breadCrumSource.next(mapList);
        }
      }]);

      return BreadCrumService;
    }();

    BreadCrumService.ɵfac = function BreadCrumService_Factory(t) {
      return new (t || BreadCrumService)();
    };

    BreadCrumService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BreadCrumService,
      factory: BreadCrumService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadCrumService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/map-navigation-service.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/map-navigation-service.ts ***!
    \**************************************************/

  /*! exports provided: MapNavigationService */

  /***/
  function srcAppSharedMapNavigationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapNavigationService", function () {
      return MapNavigationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MapNavigationService = /*#__PURE__*/function () {
      function MapNavigationService() {
        _classCallCheck(this, MapNavigationService);

        this.goUpListeners = [];
      }

      _createClass(MapNavigationService, [{
        key: "goBackUpTo",
        value: function goBackUpTo(i) {
          this.goUpListeners.forEach(function (element) {
            element.goBackUpTo(i);
          });
        }
      }]);

      return MapNavigationService;
    }();

    MapNavigationService.ɵfac = function MapNavigationService_Factory(t) {
      return new (t || MapNavigationService)();
    };

    MapNavigationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MapNavigationService,
      factory: MapNavigationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapNavigationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/mappersistenceservice.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/mappersistenceservice.ts ***!
    \*************************************************/

  /*! exports provided: Mappersistenceservice */

  /***/
  function srcAppSharedMappersistenceserviceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Mappersistenceservice", function () {
      return Mappersistenceservice;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Mappersistenceservice = /*#__PURE__*/function () {
      function Mappersistenceservice() {
        _classCallCheck(this, Mappersistenceservice);

        this.listeners = [];
      }

      _createClass(Mappersistenceservice, [{
        key: "save",
        value: function save() {
          // console.log("PersistenceService SAVE called");
          this.listeners.forEach(function (listener) {
            listener.save();
          });
        }
      }, {
        key: "load",
        value: function load() {
          // console.log("PersistenceService LOAD called");
          this.listeners.forEach(function (listener) {
            listener.load();
          });
        }
      }, {
        key: "clearAll",
        value: function clearAll() {
          this.listeners.forEach(function (listener) {
            listener.clear();
          });
        }
      }, {
        key: "listeners",
        get: function get() {
          return this._listeners;
        },
        set: function set(value) {
          this._listeners = value;
        }
      }]);

      return Mappersistenceservice;
    }();

    Mappersistenceservice.ɵfac = function Mappersistenceservice_Factory(t) {
      return new (t || Mappersistenceservice)();
    };

    Mappersistenceservice.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: Mappersistenceservice,
      factory: Mappersistenceservice.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Mappersistenceservice, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/nodeselectservice.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/nodeselectservice.service.ts ***!
    \*****************************************************/

  /*! exports provided: NodeselectserviceService */

  /***/
  function srcAppSharedNodeselectserviceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NodeselectserviceService", function () {
      return NodeselectserviceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var NodeselectserviceService = /*#__PURE__*/function () {
      function NodeselectserviceService() {
        _classCallCheck(this, NodeselectserviceService);

        this.selectionSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.currentSelection = this.selectionSource.asObservable();
      }

      _createClass(NodeselectserviceService, [{
        key: "changeSelection",
        value: function changeSelection(node) {
          // console.log("CHANGE SELECTION!")
          this.selectionSource.next(node);
        }
      }]);

      return NodeselectserviceService;
    }();

    NodeselectserviceService.ɵfac = function NodeselectserviceService_Factory(t) {
      return new (t || NodeselectserviceService)();
    };

    NodeselectserviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NodeselectserviceService,
      factory: NodeselectserviceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NodeselectserviceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/point2-d.ts":
  /*!************************************!*\
    !*** ./src/app/shared/point2-d.ts ***!
    \************************************/

  /*! exports provided: Point2D */

  /***/
  function srcAppSharedPoint2DTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Point2D", function () {
      return Point2D;
    });

    var Point2D = function Point2D(x, y) {
      _classCallCheck(this, Point2D);

      this.x = x;
      this.y = y;
    };
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/runner/work/MyndMap/MyndMap/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map