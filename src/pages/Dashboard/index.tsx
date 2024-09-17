import style from './index.module.css';
import icone from '../../assets/00001-1.png';
import { useNavigate } from 'react-router-dom';

export function Dashboard() {
    const navigate = useNavigate();

    return (
        <main className={style.main}>
            <div className={style.div_center}>
                <span className={style.txt_ttl}>Seja bem-vindo!</span>
                <img src={icone} width={400} alt="" />
                <button className={style.btn} onClick={()=> navigate('/sign-in')}>Deslogar</button>
            </div>
        </main>
    )
}