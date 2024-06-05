import { app } from '@azure/functions';
import { trigger_test } from '../handlers/greeting_handler';

// Define the HTTP route for 'greeting'
app.http('trigger_test', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: trigger_test
});