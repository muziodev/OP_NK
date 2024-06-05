export function validate_name(name: string): boolean {
    // Regular expression to match allowed characters
    const valid_name_regex = /^[a-zA-Z0-9_ ]*$/;
    return valid_name_regex.test(name);
}
