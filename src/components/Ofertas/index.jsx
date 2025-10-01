import { useEffect, useState } from "react";
import Card from "./components/Card";
import styles from "./Ofertas.module.css";

export default function Ofertas() {
    //estado onde ira armzenar os dados da api
    const [plantas, setPlantas] = useState([])

    //useEffect para fazer a requisisção da api
    useEffect(() => {
        fetch("https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw?utm_medium=email&_hsenc=p2ANqtz-_Me6GaIXDr-wFbImxTaWj6232EScz6jpqEOYCExgWl21T8n9nNV342SF0XoxrX61jZq9H4bIE63urwscEyOMZjPc05zg&_hsmi=231361624&utm_content=231361624&utm_source=hs_automation")
            .then(resposta => resposta.json())//transforma a resposta em json
            .then(dados => {
                setPlantas(dados)//aqui eu vou armazenar os dados no estado
            })
    }, [])//o array vazio faz com que o useEffect rode apenas uma vez quando o componente for montado

    return (
        <section className={styles.ofertas}>
            <h2>
                Conheça nossas <br />
                <strong>ofertas</strong>
            </h2>
            <div className={styles.cardsContainer}>
                {plantas.map((planta) => {
                    return (
                        <Card key={planta.ordem} planta={planta} />
                    )
                })}
            </div>
        </section>
    )
}