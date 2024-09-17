import style from './index.module.css';
import { useNavigate } from 'react-router-dom';
import { validateForm } from '../../../../utils/validateForm';

interface props {
    setError: React.Dispatch<React.SetStateAction<boolean>>;
}
export function Form({ setError }: props) {
    const navigate = useNavigate();
    const setTokenCookie = (token: string) => {
        document.cookie = "token=" + token + ";path=/;Secure;SameSite=Strict";
    };

    return (
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

                if (!validateForm(formObject)) {
                    return;
                }

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
                <input className={style.input} required type="text" name="user_name" id="" placeholder='Ex: Steve@123ght' />
            </div>
            <div className={style.input_b}>
                <label className={style.label} htmlFor="">Senha:</label>
                <input className={style.input} required type="password" name="password" id="" placeholder='Ex: 1234567890' />
            </div>
            <input
                className={style.btn_submit}
                type="submit"
                value="Entrar"
            />
        </form>
    )
}