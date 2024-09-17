import style from './index.module.css';
import icone from '../../assets/00001-1.png';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { verifySession } from '../../utils/verifySession';

export function Dashboard() {
    verifySession();
    const navigate = useNavigate();

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