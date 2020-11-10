import CharacterCount from "./charCount"

describe("Test for Character Count", () => {
    test("returns the total amount of characters in a string", () => {
        let testCharCount = 34
        expect(CharacterCount("github github github github github")).toBe(testCharCount)
    })
})