import {Url} from "../src/Url";

it("should extract protocol (http)", () => {
	const url = "http://localhost:8080/test"
	expect(new Url(url).protocol()).toBe("http")
})

it("should extract protocol (https)", () => {
	const url = "https://localhost:8080/test";
	expect(new Url(url).protocol()).toBe("https")
})

