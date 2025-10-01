import styles from './AdquirirPlanta.module.css'

export default function AdquirirPlanta() {
    return (
        <div className={styles.container}>
            <img src="./imagens/img_lateral.png" alt="Imagem de planta" />
            <div className={styles.conteudo}>
                <h2>
                    Como conseguir <br /> 
                    <strong>minha planta</strong>
                </h2>
                <ul>
                    <li>Escolha suas plantas</li>
                    <li>Faça seu pedido</li>
                    <li>Aguarde na sua casa</li>
                </ul>
            </div>
        </div>
    )
}