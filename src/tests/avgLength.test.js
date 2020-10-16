const Average = require("../services/avgLength")

describe("Test for Average Length", () => {
    test("returns an Average length of a string", () => {
        testAverage = "6.00"
        expect(Average("github github github github github")).toBe(testAverage)
    })
})