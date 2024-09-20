import style from './index.module.css';
import { BadgeCheck } from 'lucide-react';

export function Validation() {
    return (
        <main className={style.main}>
            <div className={style.color}></div>
            <BadgeCheck color='green' />
            <span>Cadastro concluído! Faça login para aproveitar os recursos.</span>
        </main>
    )
}