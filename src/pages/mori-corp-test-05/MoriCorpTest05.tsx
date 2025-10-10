import React from 'react'
import { Button } from '@/components/mori-corp/Button/Button'
import { ImgCaption } from '@/components/mori-corp/ImgCaption/ImgCaption'
import { ImgTitleDesc } from '@/components/mori-corp/ImgTitleDesc/ImgTitleDesc'
import * as styles from './MoriCorpTest05.css'

// 画像パス定数
const img2 = '/src/pages/mori-corp-test-05/d5eeb7e244431d01789dac8816b8c1bd91caef9b.png'
const img3 = '/src/pages/mori-corp-test-05/62376c705d19fc8c69b3b5cb640ca9a93fb2fe94.png'
const img4 = '/src/pages/mori-corp-test-05/05d412cbc5e2790cd9caf00a4dc24e4b16672eee.png'
const img5 = '/src/pages/mori-corp-test-05/ecd13fda0d81010e751d69484c9e7fdc3ca42723.png'
const img6 = '/src/pages/mori-corp-test-05/5ee5ba04be89810e653c07f06d9003bbb54ed97c.png'
const img7 = '/src/pages/mori-corp-test-05/361f5018219d398b995795cd6bdfdddee047104f.png'
const img8 = '/src/pages/mori-corp-test-05/455727091b7e0fac8dfe78aacacb9cd041a0c33a.png'
const img9 = '/src/pages/mori-corp-test-05/363c097f05b1eeb50ba6ed331c82ef1aacf48b0e.png'
const img10 = '/src/pages/mori-corp-test-05/c032e6248e86eb0e3ee59f6ae2bd6b49aaef9b8b.png'
const img11 = '/src/pages/mori-corp-test-05/00da018fd3dc3b8b29f22d7117a7505fb63b5f9c.png'
const img12 = '/src/pages/mori-corp-test-05/ad891fbf70bc8d9d6b4335a2bf1c28db388e1cac.png'

export function MoriCorpTest05() {
  return (
    <div className={styles.container} data-name='test-05' data-node-id='719:1649'>
      <div className={styles.contentsWrapper} data-name='Contents + Index UI' data-node-id='719:1651'>
        <div className={styles.contents} data-name='Contents' data-node-id='719:1652'>

          {/* Movie Section */}
          <section className={styles.section} data-name='movie' data-node-id='719:1653'>
            <div className={styles.sectionBody} data-name='Body' data-node-id='719:1656'>
              <div className={styles.sidebarColumn} data-node-id='719:1657'>
                <div className={styles.stickyHeadline} data-name='Headline_midashi' data-node-id='719:1658'>
                  <h2 className={styles.headline}>
                    ムービー
                  </h2>
                </div>
              </div>
              <div className={styles.contentColumn} data-name='Text' data-node-id='719:1659'>
                <div className={styles.imageGrid} data-name='Images' data-node-id='719:1660'>
                  <ImgCaption
                    src={img2}
                    caption='森ビル ブランドムービー｜DESIGNING TOKYO（2023）'
                    className={styles.imgCaption}
                  />
                  <ImgCaption
                    src={img3}
                    caption='麻布台ヒルズコンセプトムービー｜都市に生きる（2019）'
                    className={styles.imgCaption}
                  />
                </div>
                <div className={styles.imageGrid} data-name='Images' data-node-id='719:1663'>
                  <ImgCaption
                    src={img4}
                    caption='「DESIGNING TOKYO」Full Ver.（2019年）'
                    className={styles.imgCaption}
                  />
                  <ImgCaption
                    src={img5}
                    caption='麻布台ヒルズコンセプトムービー｜都市に生きる（2019）'
                    className={styles.imgCaption}
                  />
                </div>
                <div className={styles.buttonWrapper} data-name='button_col' data-node-id='719:1666'>
                  <Button className={styles.button}>
                    ムービー 一覧
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Graphic Section */}
          <section className={styles.section} data-name='graphic' data-node-id='719:1668'>
            <div className={styles.sectionBody} data-name='Body' data-node-id='719:1671'>
              <div className={styles.sidebarColumn} data-node-id='719:1672'>
                <div className={styles.stickyHeadline} data-name='Headline_midashi' data-node-id='719:1673'>
                  <h2 className={styles.headline}>
                    グラフィック広告
                  </h2>
                </div>
              </div>
              <div className={styles.contentColumn} data-name='Text' data-node-id='719:1674'>
                <div className={styles.graphicGrid} data-name='Images' data-node-id='719:1675'>
                  <ImgCaption
                    src={img6}
                    caption='2023年　麻布台ヒルズ開業広告「GREEN, LIFE, TOKYO. AZABUDAI HILLS」'
                    className={styles.imgCaptionSmall}
                  />
                  <ImgCaption
                    src={img7}
                    caption='2023年　虎ノ門ヒルズ ステーションタワー開業広告「WELCOME TO TORANOMON HILLS」'
                    className={styles.imgCaptionMedium}
                  />
                  <ImgCaption
                    src={img8}
                    caption='2021年「Hello, Mirai Tokyo！2021→」'
                    className={styles.imgCaptionSmall}
                  />
                </div>
                <div className={styles.buttonWrapper} data-name='button_col' data-node-id='719:1679'>
                  <Button className={styles.button}>
                    グラフィック広告 一覧
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Radio Section */}
          <section className={styles.section} data-name='radio' data-node-id='719:1681'>
            <div className={styles.sectionBody} data-name='Body' data-node-id='719:1684'>
              <div className={styles.sidebarColumn} data-node-id='719:1685'>
                <div className={styles.stickyHeadline} data-name='Headline_midashi' data-node-id='719:1686'>
                  <h2 className={styles.headline}>
                    ラジオ
                  </h2>
                </div>
              </div>
              <div className={styles.contentColumn} data-name='Text' data-node-id='719:1687'>
                <ImgTitleDesc
                  src={img9}
                  title='森ビル提供のラジオ番組　J-WAVE「MORI BUILDING GO NEXT TOKYO」　（月～木曜 13:45～13:55）'
                  description='東京のホットなイベントや情報をお届けしています。'
                  className={styles.imgTitleDesc}
                />
                <div className={styles.radioDescription}>
                  <p>J-WAVEのラジオ番組「MORI BUILDING GO NEXT TOKYO」などで放送中の</p>
                  <p>森ビルのラジオCMは、さまざまなクリエイターとコラボレーションしています。</p>
                </div>
                <div className={styles.buttonWrapper} data-name='button_col' data-node-id='719:1690'>
                  <Button className={styles.button}>
                    ラジオCM
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Book Section */}
          <section className={styles.section} data-name='book' data-node-id='719:1692'>
            <div className={styles.sectionBody} data-name='Body' data-node-id='719:1695'>
              <div className={styles.sidebarColumn} data-node-id='719:1696'>
                <div className={styles.stickyHeadline} data-name='Headline_midashi' data-node-id='719:1697'>
                  <h2 className={styles.headline}>
                    出版物
                  </h2>
                </div>
              </div>
              <div className={styles.contentColumn} data-name='Text' data-node-id='719:1698'>
                <div className={styles.bookGrid} data-name='Images' data-node-id='719:1699'>
                  <ImgTitleDesc
                    src={img10}
                    title='「ヒルズ　挑戦する都市」'
                    description='2009年10月発行 朝日新聞出版'
                    pattern='white_bg'
                    className={styles.imgTitleDescBook}
                  />
                  <ImgTitleDesc
                    src={img11}
                    title='「森ビル［まんがで学ぶ 成功企業の仕事術］」'
                    description='2013年11月発行 BookLive'
                    pattern='white_bg'
                    className={styles.imgTitleDescBook}
                  />
                  <ImgTitleDesc
                    src={img12}
                    title='新建築 別冊「森ビル 建築から都市へ」'
                    description='2012年7月発行 新建築社'
                    pattern='white_bg'
                    className={styles.imgTitleDescBook}
                  />
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}

export default MoriCorpTest05
