import style from './index.module.css';

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
    return (
        <main className={style.main}>
            <form action={action} method="post">
                <div className={style.input_a}>
                    <label className={style.label} htmlFor="">{label_a}</label>
                    <input className={style.input} type="text" name="user" id="" placeholder={place_holder_a} />
                </div>
                <div className={style.input_b}>
                    <label className={style.label} htmlFor="">{label_b}</label>
                    <input className={style.input} type="text" name="password" id="" placeholder={place_holder_b} />
                </div>
                <input
                    className={style.btn_submit}
                    type="submit"
                    value={btn_value}
                />
            </form>
        </main>
    )
}