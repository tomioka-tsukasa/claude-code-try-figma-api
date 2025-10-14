import React from 'react'
import { Box } from '@/components/fujigotemba-distillery'
import * as styles from './FujigotembaDistillery.css'

export function FujigotembaDistillery() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Box</h2>

          <div className={styles.item}>
            <h3>Japanese (Default)</h3>
            <Box />
          </div>

          <div className={styles.item}>
            <h3>English</h3>
            <Box prop1='en' />
          </div>

          <div className={styles.item}>
            <h3>French</h3>
            <Box prop1='FRA' />
          </div>

          <div className={styles.item}>
            <h3>Chinese</h3>
            <Box prop1='ch' />
          </div>

          <div className={styles.item}>
            <h3>Korean</h3>
            <Box prop1='ko' />
          </div>
        </section>
      </div>
    </main>
  )
}

export default FujigotembaDistillery
