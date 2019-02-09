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
var Photo_1;
const formn_1 = require("formn");
const product_entity_1 = require("./product.entity");
let Photo = Photo_1 = class Photo {
};
__decorate([
    formn_1.Column({ name: 'largeThumbnailID' }),
    __metadata("design:type", Number)
], Photo.prototype, "largeThumbnailId", void 0);
__decorate([
    formn_1.Column({ name: 'photoID', isPrimary: true, isGenerated: true, isNullable: false }),
    __metadata("design:type", Number)
], Photo.prototype, "id", void 0);
__decorate([
    formn_1.Column({ name: 'photoURL', isNullable: false, maxLength: 1000 }),
    __metadata("design:type", String)
], Photo.prototype, "photoUrl", void 0);
__decorate([
    formn_1.Column({ name: 'prodID', isNullable: false }),
    __metadata("design:type", Number)
], Photo.prototype, "prodId", void 0);
__decorate([
    formn_1.Column({ name: 'smallThumbnailID' }),
    __metadata("design:type", Number)
], Photo.prototype, "smallThumbnailId", void 0);
__decorate([
    formn_1.ManyToOne(() => Photo_1, (l, r) => [l.largeThumbnailId, r.id]),
    __metadata("design:type", Photo)
], Photo.prototype, "largeThumbnail", void 0);
__decorate([
    formn_1.ManyToOne(() => product_entity_1.Product, (l, r) => [l.prodId, r.id]),
    __metadata("design:type", product_entity_1.Product)
], Photo.prototype, "prod", void 0);
__decorate([
    formn_1.ManyToOne(() => Photo_1, (l, r) => [l.smallThumbnailId, r.id]),
    __metadata("design:type", Photo)
], Photo.prototype, "smallThumbnail", void 0);
__decorate([
    formn_1.OneToMany(() => product_entity_1.Product, (l, r) => [l.id, r.primaryPhotoId]),
    __metadata("design:type", Array)
], Photo.prototype, "products", void 0);
Photo = Photo_1 = __decorate([
    formn_1.Table({ name: 'photos' })
], Photo);
exports.Photo = Photo;
