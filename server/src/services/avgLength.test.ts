import Average from "./avgLength"

describe("Test for Average Length", (): void => {
    test("returns an Average length of a string", (): void => {
        let testAverage = "6.00"
        expect(Average("github github github github github")).toBe(testAverage)
    })
})