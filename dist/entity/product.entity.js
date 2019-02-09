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
const photo_entity_1 = require("./photo.entity");
const users_x_product_entity_1 = require("./users-x-product.entity");
let Product = class Product {
};
__decorate([
    formn_1.Column({ isNullable: false, maxLength: 255 }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    formn_1.Column({ hasDefault: true, isNullable: false }),
    __metadata("design:type", Boolean)
], Product.prototype, "isActive", void 0);
__decorate([
    formn_1.Column({ name: 'primaryPhotoID' }),
    __metadata("design:type", Number)
], Product.prototype, "primaryPhotoId", void 0);
__decorate([
    formn_1.Column({ name: 'productID', isPrimary: true, isGenerated: true, isNullable: false }),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    formn_1.ManyToOne(() => photo_entity_1.Photo, (l, r) => [l.primaryPhotoId, r.id]),
    __metadata("design:type", photo_entity_1.Photo)
], Product.prototype, "primaryPhoto", void 0);
__decorate([
    formn_1.OneToMany(() => photo_entity_1.Photo, (l, r) => [l.id, r.prodId]),
    __metadata("design:type", Array)
], Product.prototype, "photos", void 0);
__decorate([
    formn_1.OneToMany(() => users_x_product_entity_1.UsersXProduct, (l, r) => [l.id, r.productId]),
    __metadata("design:type", Array)
], Product.prototype, "usersXProducts", void 0);
Product = __decorate([
    formn_1.Table({ name: 'products' })
], Product);
exports.Product = Product;
