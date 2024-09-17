import style from './index.module.css';
import { useContext } from 'react';
import { ErroContext } from '../../context/erro';
import { useNavigate } from 'react-router-dom';

interface props {
    action: string;
    btn_value: string;
    label_a?: string;
    label_b?: string;
    place_holder_a?: string;
    place_holder_b?: string;
}

export function Form({
    action,
    btn_value,
    label_a,
    label_b,
    place_holder_a,
    place_holder_b
}: props) {
    const navigate = useNavigate();
    const erroContext = useContext(ErroContext);
    if (!erroContext) {
        return "Erro no contexto 'erro' em 'src/components/form' linha 26!"
    }
    const { setError } = erroContext;

    const setTokenCookie = (token: string) => {
        document.cookie = "token=" + token + ";path=/;Secure;SameSite=Strict";
    };

    return (
        <main className={style.main}>
            <form
                action={action}
                method="post"
                onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const formObject: { [key: string]: string } = {};
                    formData.forEach((value, key) => {
                        formObject[key] = value.toString();
                    });
                    const response = await fetch(action, {
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
                    <label className={style.label} htmlFor="">{label_a}</label>
                    <input className={style.input} type="text" name="user_name" id="" placeholder={place_holder_a} />
                </div>
                <div className={style.input_b}>
                    <label className={style.label} htmlFor="">{label_b}</label>
                    <input className={style.input} type="password" name="password" id="" placeholder={place_holder_b} />
                </div>
                <input
                    className={style.btn_submit}
                    type="submit"
                    value={btn_value}
                />
            </form>
        </main >
    )
}