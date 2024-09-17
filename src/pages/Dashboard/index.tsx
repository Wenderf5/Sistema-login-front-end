import style from './index.module.css';
import icone from '../../assets/00001-1.png';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { useEffect } from 'react';

export function Dashboard() {
    const navigate = useNavigate();
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:8080/verify-session', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    token: document.cookie.slice(6)
                })
            });
            const result = await response.json();
            if (result === 401) {
                navigate('/sign-in');
            }
        }
        fetchData();
    }, [])

    return (
        <main className={style.main}>
            <div className={style.div_center}>
                <span className={style.txt_ttl}>Seja bem-vindo!</span>
                <img src={icone} width={400} alt="" />
                <button className={style.btn} onClick={() => navigate('/sign-in')}><LogOut size={18} />Deslogar</button>
            </div>
        </main>
    )
}