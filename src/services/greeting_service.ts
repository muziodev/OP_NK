export function create_greeting(name: string): string {
    if (!name) {
        throw new Error("No name provided");
    }
    return `Hello, ${name}!`;
}
