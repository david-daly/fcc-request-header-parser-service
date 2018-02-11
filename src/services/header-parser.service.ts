import { Response } from '../utils/Response';

export class URLHeaderParserService {
    private headers: any;
    private requestContext;

    constructor(event: any) {
        this.headers = event.headers;
        this.requestContext = event.requestContext;
    }

    public getUserDetails() {
        const ipaddress = this.requestContext.identity.sourceIp || null;
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
