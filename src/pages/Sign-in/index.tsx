import style from './index.module.css';
import { Info } from './_components/Info/Info';
import { Link } from 'react-router-dom';
import { Error } from '../../components/Error';
import { useState } from 'react';
import { Form } from './_components/Form';

export function SignIn() {
    const [error, setError] = useState<boolean>(false);

    return (
        <main className={style.main}>
            <div className={style.div_center}>
                <Info />
                <div className={style.div_login}>
                    <span className={style.txt_login}>Bem-vindo!</span>
                    <span className={style.txt_login1}>Por favor, insira suas informações de login para acessar sua conta e continuar utilizando nossos serviços.</span>
                    {error && (
                        <Error label='Usuario ou senha incorretos!' />
                    )}
                    <Form setError={setError} />
                    <span className={style.txt_sign_up}>Ainda não tem uma conta ? <Link to={'/sign-up'}>Crie uma por aqui!</Link></span>
                </div>
            </div>
        </main>
    )
}