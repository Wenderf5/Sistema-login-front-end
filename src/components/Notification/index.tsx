import style from './index.module.css';

interface props {
    icon: React.ReactNode;
    txt: string;
}

export function Notification({ icon, txt }: props) {
    return (
        <main className={style.main}>
            {icon}
            <span>{txt}</span>
        </main>
    )
}