import WordCount from "./wordCount"

describe("Test for Word Count", () => {
    test("returns the total amount of words in a string", () => {
        let testWordCount = 5
        expect(WordCount("github github github github github")).toBe(testWordCount)
    })
})