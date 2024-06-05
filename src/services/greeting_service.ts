import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function trigger_test(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    try{    
        context.log(`Http function processed request for url "${request.url}"`);
        const name: string = request.query.get('name') || await request.text() || 'world';
        return { body: `Hello, ${name}!` };
    } 
    catch (error) {
        context.log(`Error handling request: ${error}`);
        return { status: 500, body: 'Internal server error' };
    }
};

app.http('trigger_test', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: trigger_test
});

