import { useNavigate } from 'react-router-dom';
import style from './index.module.css';

interface props {
    setError: React.Dispatch<React.SetStateAction<boolean>>;
}
export function Form({ setError }: props) {
    const navigate = useNavigate();

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
    )
}