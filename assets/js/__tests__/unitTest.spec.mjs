import {Elements} from "../Elements.mjs";

describe("Test unit Element class", function () {
    let unitTest = new Elements();

    it("UnitTest result transform margin", function () {
        expect(unitTest.transform(document.createElement("div"), "2", "2")).toMatch(/0 2rem/);
    });
});