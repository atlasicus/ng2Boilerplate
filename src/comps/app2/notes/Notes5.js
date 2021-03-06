"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var Sliderpanel_1 = require("../../sliderpanel/Sliderpanel");
var CommBroker_1 = require("../../../services/CommBroker");
var NotesBase_1 = require("./NotesBase");
var CountDown_1 = require("../../countdown/CountDown");
var NotesService = (function () {
    function NotesService(config) {
        this.config = config;
    }
    NotesService.prototype.showConfigValue = function () {
        console.log(this.config.noteDefault);
    };
    NotesService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject("NotesConfigValue")), 
        __metadata('design:paramtypes', [Object])
    ], NotesService);
    return NotesService;
}());
var Notes5 = (function (_super) {
    __extends(Notes5, _super);
    function Notes5(NotesService, sliderPanel, commBroker) {
        _super.call(this, sliderPanel, commBroker);
        this.NotesService = NotesService;
        this.sliderPanel = sliderPanel;
        this.commBroker = commBroker;
        NotesService.showConfigValue();
        this.me = this;
        this.slideRight = 'notes4';
    }
    Notes5 = __decorate([
        core_1.Component({
            selector: 'Notes5',
            directives: [CountDown_1.CountDown],
            providers: [
                NotesService,
                core_1.provide("NotesConfigValue", { useValue: { noteDefault: 'example of passing param to component via DI' } }),
            ],
            template: "<button type=\"button\" (click)=\"onPrev($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-left \"></span>\n                </button>\n                <hr/>\n                <small>I am notes5 component</small>\n                <!--<div>-->\n                   <!--<small>I am CountDown component</small>-->\n                    <!--<h2>CountDown</h2>-->\n                    <!--<div class=\"timer\" *CountDown=\"let timer=timerApi\">-->\n                      <!--<div class=\"time\">{{ timer.getTime() }}</div>-->\n                      <!--<div class=\"controls\">-->\n                        <!--<button (click)=\"timer.toggle()\">Toggle</button>-->\n                        <!--<button (click)=\"timer.reset()\">Reset</button>-->\n                      <!--</div>-->\n                    <!--</div>-->\n                <!--</div>-->\n                <!--<label>A unique example of how to <u>manually</u> create and bind a Template to a view using our very own *CountDown directive (note that asterisk)</label>-->\n                <!--<br/>-->\n                <!--<label>Check the code to learn more...</label>-->\n\n\n                "
        }), 
        __metadata('design:paramtypes', [NotesService, Sliderpanel_1.Sliderpanel, CommBroker_1.CommBroker])
    ], Notes5);
    return Notes5;
}(NotesBase_1.NotesBase));
exports.Notes5 = Notes5;
//# sourceMappingURL=Notes5.js.map