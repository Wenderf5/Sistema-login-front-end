import style from './index.module.css';
import { useNavigate } from 'react-router-dom';
import { validateForm } from '../../../../utils/validateForm';
import { Context } from '../../../../context/context';
import { useContext } from 'react';

interface props {
    setError: React.Dispatch<React.SetStateAction<boolean>>;
}
export function Form({ setError }: props) {
    const navigate = useNavigate();

    const context = useContext(Context);
    if (!context) {
        return "Erro no context 'context' 'src/pages/sign-up/_components/Form' linha 15!"
    }
    const { setValidation } = context;

    return (
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

                if (!validateForm(formObject)) {
                    return;
                }

                const response = await fetch('http://localhost:8080/sign-up', {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify(formObject)
                });
                const result = await response.json();
                if (result === 201) {
                    setValidation(true);
                    setTimeout(() => {
                        setValidation(false)
                    }, 5000);
                    navigate('/sign-in');
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
                value='Criar Conta'
            />
        </form>
    )
}