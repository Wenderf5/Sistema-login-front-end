export async function verifySession(): Promise<boolean> {
    const response = await fetch('https://sistema-login-back-7sj862rro-wenders-projects-77aa5607.vercel.app/verify-session', {
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