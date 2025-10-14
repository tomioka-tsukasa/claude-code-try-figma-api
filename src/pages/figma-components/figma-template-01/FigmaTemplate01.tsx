import { Button } from '@/components/figma-template/Button/Button'
import { Heading2 } from '@/components/figma-template/Heading2/Heading2'
import { ProductCard } from '@/components/figma-template/ProductCard/ProductCard'
import { ImgCaption } from '@/components/figma-template/ImgCaption/ImgCaption'
import * as styles from './FigmaTemplate01.css'

export default function FigmaComponentsTest() {
  return (
    <main className={styles.main}>
      <h1 className={styles.pageTitle}>Figma Components Test</h1>

      <section className={styles.section}>
        <h2>ProductCard</h2>

        <div className={styles.item}>
          <h3>Default Direction</h3>
          <ProductCard
            direction='default'
            number='001'
            titleEn='PRODUCT TITLE'
            title='商品名'
            price='¥10,000'
          />
        </div>

        <div className={styles.item}>
          <h3>Reverse Direction</h3>
          <ProductCard
            direction='reverse'
            number='002'
            titleEn='ANOTHER PRODUCT'
            title='別の商品'
            price='¥15,000'
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2>Button</h2>

        <div className={styles.item}>
          <h3>Default Button</h3>
          <div className={styles.buttonContainer}>
            <Button label='ラベル' />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Heading2</h2>

        <div className={styles.item}>
          <h3>Default Heading</h3>
          <Heading2 titleEn='TITLE' title='タイトル' />
        </div>
      </section>

      <section className={styles.section}>
        <h2>ImgCaption</h2>

        <div className={styles.item}>
          <h3>Default Preset</h3>
          <ImgCaption
            preset='default'
            title='画像タイトル'
            caption='画像の説明文がここに入ります。'
          />
        </div>

        <div className={styles.item}>
          <h3>Caption Preset</h3>
          <ImgCaption
            preset='caption'
            caption='キャプションのみの表示です。'
          />
        </div>

        <div className={styles.item}>
          <h3>Image Preset</h3>
          <ImgCaption
            preset='image'
          />
        </div>
      </section>
    </main>
  )
}
