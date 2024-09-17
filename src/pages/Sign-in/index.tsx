import style from './index.module.css';
import icone from '../../assets/00001-1.png';
import { Link, useNavigate } from 'react-router-dom';
import { Error } from '../../components/Error';
import { useState } from 'react';

export function SignIn() {
    const [error, setError] = useState<boolean>(false);
    const navigate = useNavigate();

    const setTokenCookie = (token: string) => {
        document.cookie = "token=" + token + ";path=/;Secure;SameSite=Strict";
    };

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
                    <span className={style.txt_login}>Bem-vindo!</span>
                    <span className={style.txt_login1}>Por favor, insira suas informações de login para acessar sua conta e continuar utilizando nossos serviços.</span>
                    {error && (
                        <Error label='Usuario ou senha incorretos!' />
                    )}
                    <form
                        action='http://localhost:8080/sign-in'
                        method="post"
                        onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
                            e.preventDefault();
                            const formData = new FormData(e.currentTarget);
                            const formObject: { [key: string]: string } = {};
                            formData.forEach((value, key) => {
                                formObject[key] = value.toString();
                            });
                            const response = await fetch('http://localhost:8080/sign-in', {
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                method: 'POST',
                                body: JSON.stringify(formObject)
                            });
                            const result = await response.json();
                            if (result.code === 200) {
                                setTokenCookie(result.token);
                                navigate('/');
                            } else {
                                setError(true);
                                setTimeout(() => {
                                    setError(false);
                                }, 3000)
                            }
                        }}>
                        <div className={style.input_a}>
                            <label className={style.label} htmlFor="">Nome de usuário:</label>
                            <input className={style.input} type="text" name="user_name" id="" placeholder='Ex: Steve@123ght' />
                        </div>
                        <div className={style.input_b}>
                            <label className={style.label} htmlFor="">Senha:</label>
                            <input className={style.input} type="password" name="password" id="" placeholder='Ex: 1234567890' />
                        </div>
                        <input
                            className={style.btn_submit}
                            type="submit"
                            value="Entrar"
                        />
                    </form>
                    <span className={style.txt_sign_up}>Ainda não tem uma conta ? <Link to={'/sign-up'}>Crie uma por aqui!</Link></span>
                </div>
            </div>
        </main>
    )
}