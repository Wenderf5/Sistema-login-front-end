import { useNavigate } from "react-router-dom";

export async function verifySession() {
    const navigate = useNavigate();
    const response = await fetch('http://localhost:8080/verify-session', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'GET',
        credentials: 'include'
    });
    const result = await response.json();
    if (result === 401) {
        navigate('/sign-in');
    }
}