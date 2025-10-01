import AdquirirPlanta from "../components/AdquirirPlanta";
import Menu from "../components/Menu";
import Newsletter from "../components/Newsletter";
import Ofertas from "../components/Ofertas";

export default function Home() {
    return (
        <main>
            <Menu />
            <Newsletter />
            <AdquirirPlanta />
            <Ofertas />
        </main>
    )
}
