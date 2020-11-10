import MostCommon from "./mostCommon"

describe("Test for Common Words", () => {
    test("returns total number of common words in a string", () => {
        let testFreqMap = {"github": 5}
        expect(MostCommon("github github github github github")).toEqual(testFreqMap)
    })
})