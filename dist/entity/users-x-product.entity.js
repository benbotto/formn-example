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
const product_entity_1 = require("./product.entity");
const user_entity_1 = require("./user.entity");
let UsersXProduct = class UsersXProduct {
};
__decorate([
    formn_1.Column({ name: 'productID', isPrimary: true, isNullable: false }),
    __metadata("design:type", Number)
], UsersXProduct.prototype, "productId", void 0);
__decorate([
    formn_1.Column({ name: 'userID', isPrimary: true, isNullable: false }),
    __metadata("design:type", Number)
], UsersXProduct.prototype, "userId", void 0);
__decorate([
    formn_1.ManyToOne(() => product_entity_1.Product, (l, r) => [l.productId, r.id]),
    __metadata("design:type", product_entity_1.Product)
], UsersXProduct.prototype, "product", void 0);
__decorate([
    formn_1.ManyToOne(() => user_entity_1.User, (l, r) => [l.userId, r.id]),
    __metadata("design:type", user_entity_1.User)
], UsersXProduct.prototype, "user", void 0);
UsersXProduct = __decorate([
    formn_1.Table({ name: 'users_x_products' })
], UsersXProduct);
exports.UsersXProduct = UsersXProduct;
