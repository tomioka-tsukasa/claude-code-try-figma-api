import React from 'react'
import Button, { ButtonIconBlank } from '@/components/ui/Button/Button'
import ImgCaption from '@/components/ui/ImgCaption/ImgCaption'
import HeadlineMidashi from '@/components/ui/HeadlineMidashi/HeadlineMidashi'
import ImgTitleDesc from '@/components/ui/ImgTitleDesc/ImgTitleDesc'
import * as styles from './FigmaTest03.css'

const img2 = '/assets/images/figma-test-03/d5eeb7e244431d01789dac8816b8c1bd91caef9b.png'
const img3 = '/assets/images/figma-test-03/62376c705d19fc8c69b3b5cb640ca9a93fb2fe94.png'
const img4 = '/assets/images/figma-test-03/05d412cbc5e2790cd9caf00a4dc24e4b16672eee.png'
const img5 = '/assets/images/figma-test-03/ecd13fda0d81010e751d69484c9e7fdc3ca42723.png'
const img6 = '/assets/images/figma-test-03/5ee5ba04be89810e653c07f06d9003bbb54ed97c.png'
const img7 = '/assets/images/figma-test-03/361f5018219d398b995795cd6bdfdddee047104f.png'
const img8 = '/assets/images/figma-test-03/455727091b7e0fac8dfe78aacacb9cd041a0c33a.png'
const img9 = '/assets/images/figma-test-03/363c097f05b1eeb50ba6ed331c82ef1aacf48b0e.png'
const img10 = '/assets/images/figma-test-03/c032e6248e86eb0e3ee59f6ae2bd6b49aaef9b8b.png'
const img11 = '/assets/images/figma-test-03/00da018fd3dc3b8b29f22d7117a7505fb63b5f9c.png'
const img12 = '/assets/images/figma-test-03/ad891fbf70bc8d9d6b4335a2bf1c28db388e1cac.png'

export default function FigmaTest03() {
  return (
    <div className={styles.container} data-name='test-03' data-node-id='631:7519'>
      <div className={styles.contentIndexContainer} data-name='Contents + Index UI' data-node-id='631:7523'>
        <div className={styles.contentsContainer} data-name='Contents' data-node-id='631:7524'>

          {/* Movie Section */}
          <div className={styles.sectionContainer} data-name='movie' data-node-id='631:7539'>
            <div className={styles.sectionBody} data-name='Body' data-node-id='631:7542'>
              <div className={styles.headlineContainer} data-node-id='631:7543'>
                <div className={styles.headlineSticky}>
                  <HeadlineMidashi color='black'>ムービー</HeadlineMidashi>
                </div>
              </div>

              <div className={styles.textContainer} data-name='Text' data-node-id='631:7545'>
                <div className={styles.imagesRow} data-name='Images' data-node-id='631:7546'>
                  <ImgCaption
                    src={img2}
                    caption='森ビル ブランドムービー｜DESIGNING TOKYO（2023）'
                  />
                  <ImgCaption
                    src={img3}
                    caption='麻布台ヒルズコンセプトムービー｜都市に生きる（2019）'
                  />
                </div>

                <div className={styles.imagesRow} data-name='Images' data-node-id='631:7549'>
                  <ImgCaption
                    src={img4}
                    caption='「DESIGNING TOKYO」Full Ver.（2019年）'
                  />
                  <ImgCaption
                    src={img5}
                    caption='麻布台ヒルズコンセプトムービー｜都市に生きる（2019）'
                  />
                </div>

                <div className={styles.buttonCol} data-name='button_col' data-node-id='631:7552'>
                  <Button label='ムービー 一覧' className={styles.movieButton} />
                </div>
              </div>
            </div>
          </div>

          {/* Graphic Section */}
          <div className={styles.sectionContainer} data-name='graphic' data-node-id='631:7554'>
            <div className={styles.sectionBody} data-name='Body' data-node-id='631:7557'>
              <div className={styles.headlineContainer} data-node-id='631:7558'>
                <div className={styles.headlineSticky}>
                  <HeadlineMidashi color='gray'>グラフィック広告</HeadlineMidashi>
                </div>
              </div>

              <div className={styles.textContainer} data-name='Text' data-node-id='631:7560'>
                <div className={styles.graphicImagesRow} data-name='Images' data-node-id='631:7561'>
                  <ImgCaption
                    src={img6}
                    caption='2023年　麻布台ヒルズ開業広告「GREEN, LIFE, TOKYO. AZABUDAI HILLS」'
                    width='230px'
                    height='218px'
                  />
                  <ImgCaption
                    src={img7}
                    caption='2023年　虎ノ門ヒルズ ステーションタワー開業広告「WELCOME TO TORANOMON HILLS」'
                    width='231px'
                    height='378px'
                  />
                  <ImgCaption
                    src={img8}
                    caption='2021年「Hello, Mirai Tokyo！2021→」'
                    width='230px'
                    height='389px'
                  />
                </div>

                <div className={styles.buttonCol} data-name='button_col' data-node-id='631:7565'>
                  <Button label='グラフィック広告 一覧' className={styles.graphicButton} />
                </div>
              </div>
            </div>
          </div>

          {/* Radio Section */}
          <div className={styles.sectionContainer} data-name='radio' data-node-id='631:7567'>
            <div className={styles.sectionBody} data-name='Body' data-node-id='631:7570'>
              <div className={styles.headlineContainer} data-node-id='631:7571'>
                <div className={styles.headlineSticky}>
                  <HeadlineMidashi color='gray'>ラジオ</HeadlineMidashi>
                </div>
              </div>

              <div className={styles.textContainer} data-name='Text' data-node-id='631:7573'>
                <ImgTitleDesc
                  title='森ビル提供のラジオ番組　J-WAVE「MORI BUILDING GO NEXT TOKYO」　（月～木曜 13:45～13:55）'
                  desc='東京のホットなイベントや情報をお届けしています。'
                  pattern='default'
                  imageUrl={img9}
                />

                <div className={styles.radioDescription}>
                  <p className={styles.radioDescriptionP}>
                    J-WAVEのラジオ番組「MORI BUILDING GO NEXT TOKYO」などで放送中の<br />
                    森ビルのラジオCMは、さまざまなクリエイターとコラボレーションしています。
                  </p>
                </div>

                <div className={styles.buttonCol} data-name='button_col' data-node-id='631:7576'>
                  <Button icon={<ButtonIconBlank />} label='ラジオCM' className={styles.radioButton} />
                </div>
              </div>
            </div>
          </div>

          {/* Book Section */}
          <div className={styles.sectionContainer} data-name='book' data-node-id='631:7578'>
            <div className={styles.sectionBody} data-name='Body' data-node-id='631:7581'>
              <div className={styles.headlineContainer} data-node-id='631:7582'>
                <div className={styles.headlineSticky}>
                  <HeadlineMidashi color='gray'>出版物</HeadlineMidashi>
                </div>
              </div>

              <div className={styles.textContainer} data-name='Text' data-node-id='631:7584'>
                <div className={styles.bookImagesRow} data-name='Images' data-node-id='631:7585'>
                  <ImgTitleDesc
                    title='「ヒルズ　挑戦する都市」'
                    desc='2009年10月発行 朝日新聞出版'
                    pattern='white_bg'
                    imageUrl={img10}
                  />
                  <ImgTitleDesc
                    title='「森ビル［まんがで学ぶ 成功企業の仕事術］」'
                    desc='2013年11月発行 BookLive'
                    pattern='white_bg'
                    imageUrl={img11}
                  />
                  <ImgTitleDesc
                    title='新建築 別冊「森ビル 建築から都市へ」'
                    desc='2012年7月発行 新建築社'
                    pattern='white_bg'
                    imageUrl={img12}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={styles.overlay} data-name='rgab(#9FA0A0, .3);' data-node-id='631:7603' /> */}
    </div>
  )
}
