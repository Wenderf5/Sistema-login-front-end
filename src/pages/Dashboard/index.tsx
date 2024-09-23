import style from './index.module.css';
import icone from '../../assets/00001-1.png';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Dashboard() {
    const endpoint = import.meta.env.VITE_ENDPOINT_BACK_END;
    const navigate = useNavigate();

    async function logout() {
        const response = await fetch(`${endpoint}/logout`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET',
            credentials: 'include'
        });
        if (response.status === 200) {
            navigate('/sign-in');
        }
    }

    return (
        <main className={style.main}>
            <div className={style.div_center}>
                <span className={style.txt_ttl}>Seja bem-vindo!</span>
                <img className={style.img} src={icone} alt="" />
                <button className={style.btn} onClick={() => logout()}><LogOut size={18} />Deslogar</button>
            </div>
        </main>
    )
}