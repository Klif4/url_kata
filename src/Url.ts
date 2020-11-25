export class Url {
    private url: string;

    constructor(url: string) {
        this.url = url;
    }

    protocol = (): string => this.url.split("://")[0];
    protocol2 = () => {
        for (let protocolKey in Protocol) {

        }
	}
}

export enum Protocol {
	UNKNOWN= "unknown",
	HTTP= "http"

}
