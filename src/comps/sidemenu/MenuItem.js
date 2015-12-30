System.register(["angular2/core", "./Menu"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Menu_1;
    var MenuItem;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Menu_1_1) {
                Menu_1 = Menu_1_1;
            }],
        execute: function() {
            MenuItem = (function () {
                function MenuItem(i_appMenu) {
                    this.title = 'no name';
                    this.m_appMenu = i_appMenu;
                    this.m_appMenu.addMenuItem(this);
                }
                MenuItem.prototype.ngAfterViewInit = function () {
                    var self = this;
                };
                MenuItem = __decorate([
                    core_1.Component({
                        inputs: ['localTabTitle:tabtitle', 'localFontAwesome:fontAwesome'],
                        selector: 'MenuItem',
                        template: ""
                    }), 
                    __metadata('design:paramtypes', [Menu_1.Menu])
                ], MenuItem);
                return MenuItem;
            })();
            exports_1("MenuItem", MenuItem);
        }
    }
});
//# sourceMappingURL=MenuItem.js.map