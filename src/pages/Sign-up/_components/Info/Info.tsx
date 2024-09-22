import style from './Info.module.css';
import icone from '../../../../assets/00001-1.png';

export function Info() {
    return (
        <div className={style.main}>
            <span className={style.txt_ttl}>Seja bem-vindo!</span>
            <span className={style.txt_info}>
                Este é um sistema de
                login de demonstração.
                Não utilize informações reais,
                pois os dados inseridos não
                são armazenados.
            </span>
            <img src={icone} width={300} alt="" />
        </div>
    )
}