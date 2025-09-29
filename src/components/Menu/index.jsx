import styles from './Menu.module.css';

export default function Menu() {
  return (
    <header className={styles.header}>
      <div>
        <img src="/imagens/logo.png" alt="Logo" />
      </div>
      <nav>
        <li>
          <a href="#">Como fazer</a>
          /
        </li>
        <li>
          <a href="#">Ofertas</a>
          /
        </li>
        <li>
          <a href="#">Depoimentos</a>
          /
        </li>
        <li>
          <a href="#">Vídeos</a>
          /
        </li>
        <li>
          <a href="#">Meu carrinho</a>
        </li>
      </nav>
    </header>
  );
}
