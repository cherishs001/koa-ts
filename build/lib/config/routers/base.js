"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("../../app/controllers");
const router = require('koa-router')();
exports.default = router.get('/test', controllers_1.SessionController.session);
//# sourceMappingURL=base.js.map