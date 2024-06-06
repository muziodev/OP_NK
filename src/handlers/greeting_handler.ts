import { HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { create_greeting } from '../services/greeting_service';
import { validate_name } from '../utils/validation';

export async function trigger_test(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    try {
        console.log("Received request:", request.body);  // Log incoming request data
        const name: string = request.query.get('name') || await request.text();
        console.log("Extracted name:", name);  // Confirm name is extracted correctly
        if (!name || !name.trim()) {
            throw new Error("No name provided or name is empty");
        }
        if (!validate_name(name)) {
            return {
                status: 400,
                body: 'Invalid name provided.'
            };
        }
        console.log("Name is valid, creating greeting...");
        const greeting = create_greeting(name);
        return {
            status: 200,
            body: greeting
        };
    } catch (error) {
        console.error("Error in greetingHandler:", error.message);
        return {
            status: 500,
            body: 'Internal server error'
        };
    }
};