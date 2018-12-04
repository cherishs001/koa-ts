"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionController = {
    session(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            ctx.body = {
                'ok': 1234,
            };
        });
    },
    auth(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            ctx.badRequest('you have no access to the authority.');
        });
    },
    validate(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                ctx.body = {
                    'ok': 123,
                };
            }
            catch (e) {
                ctx.catch(e);
            }
        });
    },
};
//# sourceMappingURL=session.controller.js.map