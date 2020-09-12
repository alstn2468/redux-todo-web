export function getPayload(token) {
    const payload = token.split(".")[1];

    return payload ? btoa(payload) : {};
}

export function isExpired(payload) {
    const { exp } = payload;
    const now = new Date().getTime();

    return !exp || exp < now;
}
