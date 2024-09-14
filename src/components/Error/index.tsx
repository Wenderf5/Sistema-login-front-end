import style from './index.module.css';

interface props {
    label: string;
}

export function Error({ label }: props) {
    return (
        <main className={style.main}>
            <span>{label}</span>
        </main>
    )
}