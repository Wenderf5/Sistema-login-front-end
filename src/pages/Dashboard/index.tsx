import style from './index.module.css';
import icone from '../../assets/00001-1.png';
import { LogOut } from 'lucide-react';
import { verifySession } from '../../utils/verifySession';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function Dashboard() {
    const navigate = useNavigate();
    useEffect(() => {
        async function sessionVerify() {
            const session = await verifySession();
            if (!session) {
                navigate('/sign-in')
            }
        }
        sessionVerify();
    }, [])

    async function logout() {
        const response = await fetch('https://sistema-login-back-7sj862rro-wenders-projects-77aa5607.vercel.app/logout', {
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
                <img src={icone} width={400} alt="" />
                <button className={style.btn} onClick={() => logout()}><LogOut size={18} />Deslogar</button>
            </div>
        </main>
    )
}