import styles from "./styles/footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <h3>NimbusHub, 2025</h3>
            <ul className={styles.links}>
                <li><a href="https://github.com/Jovinull/NimbusHub">GitHub</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Contatos</a></li>
            </ul>
        </footer>
    )
}