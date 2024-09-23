import style from './index.module.css';
import { Info } from './_components/Info/Info';
import { Link } from 'react-router-dom';
import { Error } from '../../components/Error';
import { useState } from 'react';
import { Form } from './_components/Form';

export function SignUp() {
    const [error, setError] = useState<boolean>(false);

    return (
        <main className={style.main}>
            <div className={style.div_center}>
                <Info />
                <div className={style.div_login}>
                    <span className={style.txt_login}>Crie sua conta!</span>
                    <span className={style.txt_login1}>Junte-se à nossa comunidade! Crie uma conta para ter acesso imediato a todas as nossas ferramentas e serviços.</span>
                    {error && (
                        <Error label='Este usuário já existe!' />
                    )}
                    <Form setError={setError} />
                    <span className={style.txt_sign_up}>Já tem uma conta ? <Link to={'/sign-in'}>Faça login por aqui!</Link></span>
                </div>
            </div>
        </main>
    )
}