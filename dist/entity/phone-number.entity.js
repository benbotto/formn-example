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
const user_entity_1 = require("./user.entity");
let PhoneNumber = class PhoneNumber {
};
__decorate([
    formn_1.Column({ isNullable: false, maxLength: 255 }),
    __metadata("design:type", String)
], PhoneNumber.prototype, "phoneNumber", void 0);
__decorate([
    formn_1.Column({ name: 'phoneNumberID', isPrimary: true, isGenerated: true, isNullable: false }),
    __metadata("design:type", Number)
], PhoneNumber.prototype, "id", void 0);
__decorate([
    formn_1.Column({ maxLength: 255 }),
    __metadata("design:type", String)
], PhoneNumber.prototype, "type", void 0);
__decorate([
    formn_1.Column({ name: 'userID', isNullable: false }),
    __metadata("design:type", Number)
], PhoneNumber.prototype, "userId", void 0);
__decorate([
    formn_1.ManyToOne(() => user_entity_1.User, (l, r) => [l.userId, r.id]),
    __metadata("design:type", user_entity_1.User)
], PhoneNumber.prototype, "user", void 0);
PhoneNumber = __decorate([
    formn_1.Table({ name: 'phone_numbers' })
], PhoneNumber);
exports.PhoneNumber = PhoneNumber;
