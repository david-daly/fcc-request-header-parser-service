import { Response } from '../utils/Response';

export class URLHeaderParserService {
    private headers: any;

    constructor(event: any) {
        this.headers = event.headers;
    }

    public getUserDetails() {
        const ipaddress = this.headers.Host || null;
        const system = this.headers['User-Agent'] || null;
        const language = this.headers['Accept-Language']
            && this.headers['Accept-Language'].split(',')[0] || null;
        return {
            ipaddress,
            language,
            system,
        };
    }
}
