"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandLoader = void 0;
const dataloader_1 = __importDefault(require("dataloader"));
const Vehicle_1 = require("../TypeDefs/Vehicle");
const loadBrands = (brandNames) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('getting values from the dataloader for brands ' + brandNames);
    const brands = brandNames.map((brand) => {
        return Vehicle_1.VEHICLES.filter(x => x.type === brand);
    });
    return brands;
});
exports.BrandLoader = new dataloader_1.default(loadBrands);
