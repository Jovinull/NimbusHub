import styles from "./styles/footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <h3>NimbusHub, 2025</h3>
            <ul className={styles.links}>
                <li><a target="_blank" href="https://github.com/Jovinull/NimbusHub">GitHub</a></li>
                <li><a target="_blank" href="#">Sobre</a></li>
                <li><a target="_blank" href="#">Contatos</a></li>
            </ul>
        </footer>
    )
}