import style from './index.module.css';
import { useNavigate } from 'react-router-dom';
import { validateForm } from '../../../../utils/validateForm';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface Props {
    setError: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Form({ setError }: Props) {
    const endpoint = import.meta.env.VITE_ENDPOINT_BACK_END;
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const navigate = useNavigate();

    return (
        <form
            action={`${endpoint}/sign-in`}
            method="post"
            onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
                //e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const formObject: { [key: string]: string } = {};
                formData.forEach((value, key) => {
                    formObject[key] = value.toString();
                });

                if (!validateForm(formObject)) {
                    return;
                }

                const response = await fetch(`${endpoint}/sign-in`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'POST',
                    credentials: 'include',
                    body: JSON.stringify(formObject)
                });

                if (response.status === 200) {
                    navigate('/');
                } else {
                    setError(true);
                    setTimeout(() => {
                        setError(false);
                    }, 3000);
                }
            }}>
            <div className={style.input_a}>
                <label className={style.label} htmlFor="user_name">Nome de usuário:</label>
                <input
                    className={style.input}
                    required
                    type="text"
                    name="user_name"
                    id="user_name"
                    placeholder="Ex: Steve@123ght"
                />
            </div>
            <div className={style.input_b}>
                <label className={style.label} htmlFor="password">Senha:</label>
                <div className={style.input_div}>
                    <input
                        required
                        type={isVisible ? "text" : "password"}
                        name="password"
                        id="password"
                        placeholder="Ex: 1234567890"
                    />
                    <button type="button" onClick={() => setIsVisible(!isVisible)}>
                        {isVisible ? <Eye size={21} /> : <EyeOff size={21} />}
                    </button>
                </div>
            </div>
            <input
                className={style.btn_submit}
                type="submit"
                value="Entrar"
            />
        </form>
    );
}
