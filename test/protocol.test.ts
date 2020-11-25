import {Protocol, Url} from "../src/Url";
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

each([
	[Protocol.HTTP, "http://localhost:8080/test"],
	[Protocol.UNKNOWN, "ssh://localhost:8080/ssh"]
]).it("should extract protocol %s", (protocol, url) => {
	expect(new Url(url).protocol2()).toBe(protocol)
});

