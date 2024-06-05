import { HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { create_greeting } from '../services/greeting_service';
import { validate_name } from '../utils/validation';

export async function trigger_test(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    try {
        const name: string = request.query.get('name') || await request.text() || 'world';
        
        if (!validate_name(name)) {
            return {
                status: 400,
                body: 'Invalid name provided.'
            };
        }

        const greeting = create_greeting(name);
        return {
            status: 200,
            body: greeting
        };
    } catch (error) {
        return {
            status: 500,
            body: 'Internal server error'
        };
    }
};