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
const vehicle_entity_1 = require("./vehicle.entity");
let VehiclePackage = class VehiclePackage {
};
__decorate([
    formn_1.Column({ isNullable: false }),
    __metadata("design:type", Boolean)
], VehiclePackage.prototype, "heatedSeats", void 0);
__decorate([
    formn_1.Column({ isNullable: false, maxLength: 255 }),
    __metadata("design:type", String)
], VehiclePackage.prototype, "interior", void 0);
__decorate([
    formn_1.Column({ isNullable: false, maxLength: 255 }),
    __metadata("design:type", String)
], VehiclePackage.prototype, "make", void 0);
__decorate([
    formn_1.Column({ isNullable: false, maxLength: 255 }),
    __metadata("design:type", String)
], VehiclePackage.prototype, "model", void 0);
__decorate([
    formn_1.Column({ name: 'vehiclePackageID', isPrimary: true, isGenerated: true, isNullable: false }),
    __metadata("design:type", Number)
], VehiclePackage.prototype, "id", void 0);
__decorate([
    formn_1.ManyToOne(() => vehicle_entity_1.Vehicle, (l, r) => [[l.make, r.make], [l.model, r.model]]),
    __metadata("design:type", vehicle_entity_1.Vehicle)
], VehiclePackage.prototype, "vehicle", void 0);
VehiclePackage = __decorate([
    formn_1.Table({ name: 'vehicle_packages' })
], VehiclePackage);
exports.VehiclePackage = VehiclePackage;
