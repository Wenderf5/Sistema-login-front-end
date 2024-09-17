import style from './index.module.css';
import { Form } from '../../components/Form';
import icone from '../../assets/00001-1.png';
import { Link } from 'react-router-dom';
import { Error } from '../../components/Error';
import { useContext } from 'react';
import { ErroContext } from '../../context/erro';

export function SignIn() {
    const erroContext = useContext(ErroContext);
    if (!erroContext) {
        return "Erro no contexto 'erro' em 'src/pages/sign-in' linha 12!"
    }
    const { error, setError } = erroContext;

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
                    <Form
                        action='http://localhost:8080/sign-in'
                        btn_value='Entrar'
                        place_holder_a='Ex: Steve@123ght'
                        label_a='Nome do usuário:'
                        place_holder_b='Ex: 1234567890'
                        label_b='Senha:'
                    />
                    <span className={style.txt_sign_up}>Ainda não tem uma conta ? <Link to={'/sign-up'}>Crie uma por aqui!</Link></span>
                </div>
            </div>
        </main>
    )
}