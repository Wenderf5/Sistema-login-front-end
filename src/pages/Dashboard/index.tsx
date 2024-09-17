import style from './index.module.css';
import icone from '../../assets/00001-1.png';
import { LogOut } from 'lucide-react';
import { verifySession } from '../../utils/verifySession';
import { useNavigate } from 'react-router-dom';

export function Dashboard() {
    verifySession();
    const navigate = useNavigate();

    function logout() {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; Secure; SameSite=Strict";
        navigate('/sign-in');
    }

    return (
        <main className={style.main}>
            <div className={style.div_center}>
                <span className={style.txt_ttl}>Seja bem-vindo!</span>
                <img src={icone} width={400} alt="" />
                <button className={style.btn} onClick={() => logout()}><LogOut size={18} />Deslogar</button>
            </div>
        </main>
    )
}