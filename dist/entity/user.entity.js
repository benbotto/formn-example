"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const formn_1 = require("formn");
const phone_number_entity_1 = require("./phone-number.entity");
const users_x_product_entity_1 = require("./users-x-product.entity");
let User = class User {
};
__decorate([
    formn_1.Column({ hasDefault: true, isNullable: false }),
    __metadata("design:type", Date)
], User.prototype, "createdOn", void 0);
__decorate([
    formn_1.Column({ maxLength: 255 }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    formn_1.Column({ maxLength: 255 }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    formn_1.Column({ name: 'userID', isPrimary: true, isGenerated: true, isNullable: false }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    formn_1.OneToMany(() => phone_number_entity_1.PhoneNumber, (l, r) => [l.id, r.userId]),
    __metadata("design:type", Array)
], User.prototype, "phoneNumbers", void 0);
__decorate([
    formn_1.OneToMany(() => users_x_product_entity_1.UsersXProduct, (l, r) => [l.id, r.userId]),
    __metadata("design:type", Array)
], User.prototype, "usersXProducts", void 0);
User = __decorate([
    formn_1.Table({ name: 'users' })
], User);
exports.User = User;
