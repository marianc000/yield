export function pause() {
    return new Promise(resolve => setTimeout(resolve));
}