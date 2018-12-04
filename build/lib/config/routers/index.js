"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const router = require('koa-router')();
exports.router = router;
router.use('/api/v1', base_1.default.routes(), base_1.default.allowedMethods());
//# sourceMappingURL=index.js.map