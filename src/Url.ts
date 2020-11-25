export class Url {
    private url: string;

    constructor(url: string) {
        this.url = url;
    }

    protocol() {
        if (this.url.startsWith("https")) {
            return "https";
        }
        return "http"
    }
}