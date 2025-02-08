import styles from './styles/main.module.css'

export default function Main() {
    return(
        <main className={styles.main}>
            <div className={styles.tempContainer}>
                <h2>Temperatura</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore a culpa hic eos temporibus itaque porro aut, soluta numquam accusamus consectetur reiciendis minus iure perferendis beatae asperiores quas commodi veniam.</p>
            </div>

            <div className={styles.humidityContainer}>
                <h2>Umidade</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sint reprehenderit optio? Velit voluptas iste quae necessitatibus aspernatur maiores labore consequuntur. Ad soluta officiis officia voluptatem placeat incidunt. Dicta, quia.</p>
            </div>
        </main>
    )
}