export async function verifySession(): Promise<boolean> {
    const response = await fetch('https://sistema-login-back-end-production.up.railway.app/verify-session', {
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