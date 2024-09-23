export async function verifySession(): Promise<boolean> {
    const endpoint = import.meta.env.VITE_ENDPOINT_BACK_END;
    const response = await fetch(`${endpoint}/verify-session`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'GET',
        credentials: 'include'
    });
    const result = await response.json();
    if (result === 401) {
        return false;
    } else {
        return true;
    }
}