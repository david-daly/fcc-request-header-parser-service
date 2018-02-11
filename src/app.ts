import { URLHeaderParserService } from './services/header-parser.service';
import { Response } from './utils/Response';

export const handler = (event, context, callback) => {
    const service = new URLHeaderParserService(event);

    try {
        const payload = service.getUserDetails();
        const response = new Response(200, payload);
        context.succeed(response);
    } catch (error) {
        context.fail(new Response(500, error));
    }
};
