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
const vehicle_package_entity_1 = require("./vehicle-package.entity");
let Vehicle = class Vehicle {
};
__decorate([
    formn_1.Column({ isPrimary: true, isNullable: false, maxLength: 255 }),
    __metadata("design:type", String)
], Vehicle.prototype, "make", void 0);
__decorate([
    formn_1.Column({ isPrimary: true, isNullable: false, maxLength: 255 }),
    __metadata("design:type", String)
], Vehicle.prototype, "model", void 0);
__decorate([
    formn_1.OneToMany(() => vehicle_package_entity_1.VehiclePackage, (l, r) => [[l.make, r.make], [l.model, r.model]]),
    __metadata("design:type", Array)
], Vehicle.prototype, "vehiclePackages", void 0);
Vehicle = __decorate([
    formn_1.Table({ name: 'vehicles' })
], Vehicle);
exports.Vehicle = Vehicle;
