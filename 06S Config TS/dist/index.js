"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.print = void 0;
var add_1 = require("./add");
var printFullName_1 = require("./printFullName");
var print = function (value) {
    console.log(value);
};
exports.print = print;
exports.print(add_1.add(2, 3));
var contact = {
    firstName: "Vilva",
    lastName: "Athiban"
};
exports.print(printFullName_1.getFullName(contact));
