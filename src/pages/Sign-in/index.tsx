import style from './index.module.css';
import { Form } from '../../components/Form';
import icone from '../../assets/00001-1.png';
import { Link } from 'react-router-dom';

export function SignIn() {
    return (
        <main className={style.main}>
            <div className={style.div_center}>
                <div className={style.div_info}>
                    <span className={style.txt_ttl}>Seja bem-vindo!</span>
                    <span className={style.txt_info}>
                        Este é um sistema de
                        login de demonstração.
                        Não utilize informações reais,
                        pois os dados inseridos não
                        são armazenados.
                    </span>
                    <img src={icone} width={300} alt="" />
                </div>
                <div className={style.div_login}>
                    <span className={style.txt_login}>Login!</span>
                    <Form btn_value='Entrar'/>
                    <span className={style.txt_sign_up}>Ainda não tem uma conta ? <Link to={'/sign-up'}>Crie uma por aqui!</Link></span>
                </div>
            </div>
        </main>
    )
}