"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const { getAllVehicles } = require('./Vehicle');
const sandbox = sinon.createSandbox();
beforeEach(() => {
});
describe("smoke test", function () {
    it("checks equality", function () {
        chai_1.expect(true).to.be.true;
    });
});
