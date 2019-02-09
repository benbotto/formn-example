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
const formn_1 = require("formn");
const user_entity_1 = require("../entity/user.entity");
const connOpts = require('../../connections.json');
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const dataContext = new formn_1.MySQLDataContext();
        try {
            yield dataContext.connect(connOpts);
            const query = dataContext
                .from(user_entity_1.User)
                .select();
            console.log(query.toString());
            const users = yield query
                .execute();
            console.log(JSON.stringify(users, null, 2));
            yield dataContext.end();
        }
        catch (err) {
            console.error(err);
        }
    });
}
main();
