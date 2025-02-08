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

            <div className={styles.atmPressure}>
                <h2>Pressão Atmosférica</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci optio quasi, sequi corporis possimus aperiam unde odio ducimus ipsa dolore. Facere commodi quo officiis exercitationem explicabo voluptates ullam similique voluptatibus.</p>
            </div>

            <div className={styles.windSpeed}>
                <h2>Velocidade do Vento</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora adipisci blanditiis nobis aut voluptatem accusamus, magnam eos atque sed eaque officia. Quo cumque modi ex autem reiciendis maxime at dolorem!</p>
            </div>

            <div className={styles.windDirection}>
                <h2>Direção do Vento</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, labore sequi? Beatae, dolorum quos corporis nostrum consequuntur esse ab non nisi, nulla et debitis totam iste amet quaerat omnis. Repellendus!</p>
            </div>


        </main>
    )
}