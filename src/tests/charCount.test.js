const CharacterCount = require("../services/charCount")

describe("Test for Character Count", () => {
    test("returns the total amount of characters in a string", () => {
        testCharCount = 34
        expect(CharacterCount("github github github github github")).toBe(testCharCount)
    })
})