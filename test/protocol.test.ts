class Url {
	constructor(url: string) {

	}

	protocol() {
		return "http";
	}
}

it("should extract protocol (http)", () => {
	let url = "http://localhost:8080/test"

	var ttt = new Url(url);

	expect(ttt.protocol()).toBe("http")
})


it("should extract protocol (https)", () => {
	let url = "https://localhost:8080/test"

	var ttt = new Url(url);

	expect(ttt.protocol()).toBe("https")
})

