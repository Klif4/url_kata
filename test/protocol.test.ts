import {Url} from "../src/Url";
import each from "jest-each";

it("init", () => {
	expect(true).toBe(true);
})

each([
	["http://localhost:8080/test", "http"],
	["https://localhost:8080/test", "https"],
	["ftp://localhost:8080/test", "ftp"],
	["sftp://localhost:8080/test", "sftp"],
]).it("should extract protocol", (url, protocol) => {
	expect(new Url(url).protocol()).toBe(protocol)
});

it("should not extract protocol", () => {
	const url: string = "ssh://localhost:8080/test"
	expect(new Url(url).protocol()).toBe("unknown");
})
