import styles from './Card.module.css';

export default function Card({ planta }) {
    return (
        <div className={styles.card}>
            <img src={`./imagens/${planta.img}.png`} alt={planta.name} />
            <div className={styles.cardContent}>
                <h3>{planta.name}</h3>
                <p>R$ {planta.preco}</p>
                <a href="#">Comprar</a>
            </div>
        </div>
    )
}