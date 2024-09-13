import { Input } from './_components/Input';
import style from './index.module.css';

interface props {
    btn_value: string;
}

export function Form({ btn_value }: props) {
    return (
        <main className={style.main}>
            <form action="http://localhost:5173/sign-in" method="post">
                <Input label='Nome de usuario:' place_holder='Ex: exemplo@gmail.com'/>
                <Input label='Senha:' place_holder='Ex: 1234567890'/>
                <input
                    className={style.btn_submit}
                    type="submit"
                    value={btn_value}
                />
            </form>
        </main>
    )
}