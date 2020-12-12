var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(vec, zrost) {
        this.vaga = vec;
        this.rost = zrost;
    }
    return Human;
}());
var deputat = /** @class */ (function (_super) {
    __extends(deputat, _super);
    function deputat(vec, zrost, firstname, lastname, age, habarnik, suma) {
        var _this = _super.call(this, vec, zrost) || this;
        _this.firstname = firstname;
        _this.lastname = lastname;
        _this.age = age;
        _this.habarnik = habarnik;
        _this.suma = suma;
        return _this;
    }
    deputat.prototype.giveHabar = function () {
        return (this.habarnik === false ? 'NOT' : 'YeS');
    };
    return deputat;
}(Human));
var tkach = new deputat(150, 170, 'roman', 'tkach', 50, true, 100000);
var habar = tkach.giveHabar();
console.log(habar);
