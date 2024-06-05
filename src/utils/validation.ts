export function validate_name(name: string): boolean {
    // Regular expression to match allowed characters
    const validNameRegex = /^[a-zA-Z0-9_ ]*$/;
    return validNameRegex.test(name);
}
