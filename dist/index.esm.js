import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@byte-design/ui';

var AllModules = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(Button, null, "lalalal"),
        React.createElement("span", null, "lalallala")));
};

var adFixModule = document.createElement("div");
adFixModule.id = "ad-diagnosis-sdk";
document.body.appendChild(adFixModule);
ReactDOM.render(React.createElement(React.StrictMode, null,
    React.createElement(AllModules, null)), document.getElementById("ad-diagnosis-sdk"));
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

export { AdFix, Log };
//# sourceMappingURL=index.esm.js.map
