"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFullName = void 0;
var getFullName = function (contact) {
    return [contact.firstName, contact.middleName, contact.lastName]
        .filter(Boolean)
        .join(" ");
};
exports.getFullName = getFullName;
