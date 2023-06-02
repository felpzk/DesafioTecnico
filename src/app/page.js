import styles from './page.module.css'

import Link from 'next/link'

export default function Home() {

  return (
    <main className={styles.main}>
      <Link className={styles.links} href="/conversor-numeros">Conversor de números romanos</Link>
    </main>
  )
}
