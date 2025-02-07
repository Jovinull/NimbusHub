import Header from './components/HeaderComp'
import Footer from './components/Footer'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <Header/>
      <main className={styles.main}>
        olá
      </main>
      <Footer/> 
    </>
  );
}