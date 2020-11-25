export class Url {
    private url: string;

    constructor(url: string) {
        this.url = url;
    }

    protocol = (): string => this.url.split("://")[0];
}
