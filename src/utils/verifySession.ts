export async function verifySession(): Promise<boolean> {
    const response = await fetch('http://localhost:8080/verify-session', {
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