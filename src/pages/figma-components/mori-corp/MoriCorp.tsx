import { Button, ImgTitleDesc, ImgCaption } from '@/components/mori-corp'
import * as styles from './MoriCorp.css'

function MoriCorp() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Figma Components 確認ページ</h1>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Button</h2>

        <div className={styles.item}>
          <h3 className={styles.itemTitle}>Default Size</h3>
          <Button size='default'>
            ボタン
          </Button>
        </div>

        <div className={styles.item}>
          <h3 className={styles.itemTitle}>Large Size</h3>
          <Button size='large'>
            大きなボタン
          </Button>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>ImgTitleDesc</h2>

        <div className={styles.item}>
          <h3 className={styles.itemTitle}>Default Pattern</h3>
          <div className={styles.componentWrapper}>
            <ImgTitleDesc
              title='サンプルタイトル'
              description='これはサンプルの説明文です。'
              pattern='default'
            />
          </div>
        </div>

        <div className={styles.item}>
          <h3 className={styles.itemTitle}>White Background Pattern</h3>
          <div className={styles.componentWrapper}>
            <ImgTitleDesc
              title='ホワイト背景タイトル'
              description='白い背景のパターンです。'
              pattern='white_bg'
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>ImgCaption</h2>

        <div className={styles.item}>
          <h3 className={styles.itemTitle}>Default</h3>
          <div className={styles.componentWrapper}>
            <ImgCaption
              caption='これは画像のキャプションです。画像の説明や補足情報をここに記載します。'
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default MoriCorp
