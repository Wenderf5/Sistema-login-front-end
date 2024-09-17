import style from './index.module.css';
import icone from '../../assets/00001-1.png';
import { Link, useNavigate } from 'react-router-dom';
import { Error } from '../../components/Error';
import { useState } from 'react';

export function SignUp() {
    const [error, setError] = useState<boolean>(false);
    const navigate = useNavigate();

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
                    <span className={style.txt_login}>Crie sua conta!</span>
                    <span className={style.txt_login1}>Junte-se à nossa comunidade! Crie uma conta para ter acesso imediato a todas as nossas ferramentas e serviços.</span>
                    {error && (
                        <Error label='Este usuário já existe!' />
                    )}
                    <form
                        action='http://localhost:8080/sign-up'
                        method="post"
                        onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
                            e.preventDefault();
                            const formData = new FormData(e.currentTarget);
                            const formObject: { [key: string]: string } = {};
                            formData.forEach((value, key) => {
                                formObject[key] = value.toString();
                            });
                            const response = await fetch('http://localhost:8080/sign-up', {
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                method: 'POST',
                                body: JSON.stringify(formObject)
                            });
                            const result = await response.json();
                            if (result === 201) {
                                navigate('/sign-in');
                            } else {
                                console.log(result)
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
                            value='Criar Conta'
                        />
                    </form>
                    <span className={style.txt_sign_up}>Já tem uma conta ? <Link to={'/sign-in'}>Faça login por aqui!</Link></span>
                </div>
            </div>
        </main>
    )
}