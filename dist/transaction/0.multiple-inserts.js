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
const phone_number_entity_1 = require("../entity/phone-number.entity");
const connOpts = require('../../connections.json');
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const dataContext = new formn_1.MySQLDataContext();
        try {
            yield dataContext.connect(connOpts);
            yield dataContext
                .beginTransaction((transDC) => __awaiter(this, void 0, void 0, function* () {
                const user = new user_entity_1.User();
                user.firstName = 'Pete';
                user.lastName = 'Rose';
                user.phoneNumbers = [];
                const insUserQuery = transDC.insert(user_entity_1.User, user);
                console.log(insUserQuery.toString());
                yield insUserQuery.execute();
                const mobile = new phone_number_entity_1.PhoneNumber();
                mobile.userId = user.id;
                mobile.type = 'mobile';
                mobile.phoneNumber = '321-456-7894';
                user.phoneNumbers.push(mobile);
                const insMobileQuery = transDC.insert(phone_number_entity_1.PhoneNumber, mobile);
                console.log(insMobileQuery.toString());
                const home = new phone_number_entity_1.PhoneNumber();
                home.userId = user.id;
                home.type = 'home';
                home.phoneNumber = '664-456-7879';
                user.phoneNumbers.push(home);
                const insHomeQuery = transDC.insert(phone_number_entity_1.PhoneNumber, home);
                console.log(insHomeQuery.toString());
                yield Promise.all([insMobileQuery.execute(), insHomeQuery.execute()]);
                console.log(JSON.stringify(user, null, 2));
                yield transDC.rollbackTransaction();
            }));
        }
        catch (err) {
            console.error(err);
        }
        finally {
            yield dataContext.end();
        }
    });
}
main();
