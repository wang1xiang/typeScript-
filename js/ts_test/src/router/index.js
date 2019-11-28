"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __importDefault(require("vue"));
var vue_router_1 = __importDefault(require("vue-router"));
var User_vue_1 = __importDefault(require("../components/User.vue"));
vue_1.default.use(vue_router_1.default);
var routes = [
    {
        path: '/',
        component: User_vue_1.default
    }
];
var route = new vue_router_1.default({
    mode: 'history',
    routes: routes
});
route.beforeEach(function (to, from, next) {
    next();
});
route.afterEach(function (route) {
    console.log(route);
});
exports.default = route;
