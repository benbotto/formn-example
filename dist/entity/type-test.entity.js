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
let TypeTest = class TypeTest {
};
__decorate([
    formn_1.Column(),
    __metadata("design:type", Number)
], TypeTest.prototype, "c1", void 0);
__decorate([
    formn_1.Column(),
    __metadata("design:type", Date)
], TypeTest.prototype, "c10", void 0);
__decorate([
    formn_1.Column(),
    __metadata("design:type", Date)
], TypeTest.prototype, "c11", void 0);
__decorate([
    formn_1.Column(),
    __metadata("design:type", Date)
], TypeTest.prototype, "c12", void 0);
__decorate([
    formn_1.Column(),
    __metadata("design:type", Number)
], TypeTest.prototype, "c2", void 0);
__decorate([
    formn_1.Column(),
    __metadata("design:type", Number)
], TypeTest.prototype, "c3", void 0);
__decorate([
    formn_1.Column(),
    __metadata("design:type", Number)
], TypeTest.prototype, "c4", void 0);
__decorate([
    formn_1.Column(),
    __metadata("design:type", Number)
], TypeTest.prototype, "c5", void 0);
__decorate([
    formn_1.Column(),
    __metadata("design:type", Number)
], TypeTest.prototype, "c6", void 0);
__decorate([
    formn_1.Column(),
    __metadata("design:type", Boolean)
], TypeTest.prototype, "c7", void 0);
__decorate([
    formn_1.Column(),
    __metadata("design:type", Number)
], TypeTest.prototype, "c8", void 0);
__decorate([
    formn_1.Column(),
    __metadata("design:type", Buffer)
], TypeTest.prototype, "c9", void 0);
__decorate([
    formn_1.Column({ name: 'typeTestID', isPrimary: true, isGenerated: true, isNullable: false }),
    __metadata("design:type", Number)
], TypeTest.prototype, "id", void 0);
TypeTest = __decorate([
    formn_1.Table({ name: 'type_test' })
], TypeTest);
exports.TypeTest = TypeTest;
