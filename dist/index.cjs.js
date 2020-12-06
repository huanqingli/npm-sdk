Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ReactDOM = require('react-dom');
var ui = require('@byte-design/ui');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

var AllModules = function () {
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(ui.Button, null, "lalalal"),
        React__default['default'].createElement("span", null, "lalallala")));
};

var adFixModule = document.createElement("div");
adFixModule.id = "ad-diagnosis-sdk";
document.body.appendChild(adFixModule);
ReactDOM__default['default'].render(React__default['default'].createElement(React__default['default'].StrictMode, null,
    React__default['default'].createElement(AllModules, null)), document.getElementById("ad-diagnosis-sdk"));
var AdFix = /** @class */ (function () {
    function AdFix(from, uuid) {
        this.from = from;
        this.uuid = uuid;
    }
    AdFix.prototype.test1 = function () {
        console.log(22222222222);
    };
    return AdFix;
}());

var Log = function (a) { return console.log(1212121, a); };

exports.AdFix = AdFix;
exports.Log = Log;
//# sourceMappingURL=index.cjs.js.map
