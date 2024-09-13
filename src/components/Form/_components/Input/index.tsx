import style from './index.module.css';

interface props {
    label: string;
    place_holder: string;
}

export function Input({ label, place_holder }: props) {
    return (
        <main className={style.main}>
            <label className={style.label} htmlFor="">{label}</label>
            <input className={style.input} type="text" name="" id="" placeholder={place_holder} />
        </main>
    )
}