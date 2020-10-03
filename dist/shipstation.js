"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var base64 = require('base-64');
var stopcock = require('stopcock');
var rateLimitOpts = {
    limit: 40,
    interval: 1000 * 40
};
var RequestMethod;
(function (RequestMethod) {
    RequestMethod["GET"] = "GET";
    RequestMethod["POST"] = "POST";
    RequestMethod["DELETE"] = "DELETE";
})(RequestMethod = exports.RequestMethod || (exports.RequestMethod = {}));
var Shipstation = (function () {
    function Shipstation(key, secret) {
        var _this = this;
        if (key === void 0) { key = process.env.SS_API_KEY; }
        if (secret === void 0) { secret = process.env.SS_API_SECRET; }
        this.baseUrl = 'https://ssapi.shipstation.com/';
        this.request = function (_a) {
            var url = _a.url, method = _a.method, _b = _a.useBaseUrl, useBaseUrl = _b === void 0 ? true : _b, data = _a.data;
            var opts = {
                headers: {
                    Authorization: "Basic " + _this.authorizationToken
                },
                method: method,
                url: "" + (useBaseUrl ? _this.baseUrl : '') + url
            };
            if (data) {
                opts.data = data;
            }
            return axios_1.default.request(opts);
        };
        if (!key || !secret) {
            throw new Error("APIKey and API Secret are required! Provided API Key: " + key + " API Secret: " + secret + " either in ctor or through environment variables SS_API_KEY and SS_API_SECRET");
        }
        this.authorizationToken = base64.encode(process.env.SS_API_KEY + ":" + process.env.SS_API_SECRET);
        this.request = stopcock(this.request, rateLimitOpts);
    }
    return Shipstation;
}());
exports.default = Shipstation;
