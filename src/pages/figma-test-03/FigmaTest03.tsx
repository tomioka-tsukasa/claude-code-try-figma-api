import ImgTitleDesc from '../../components/ui/ImgTitleDesc/ImgTitleDesc'
import * as styles from './FigmaTest03.css'

const imgImage = 'http://localhost:3845/assets/08858ea7d4d5e661c7bd2e77864e81e16663ec55.png'
const img = 'http://localhost:3845/assets/a4400242ed2ba42db482e0ec1b26f28af181f1f6.png'
const img1 = 'http://localhost:3845/assets/fa87a0623c391557d777697f5661cb49b29dbdc4.png'
const img2 = 'http://localhost:3845/assets/e3ee52ba33de1632ee01a67cb6372d43a025cd17.png'
const img4 = 'http://localhost:3845/assets/a75648455e17c69fba1b0f7a882dafb90b1b1516.png'
const img6 = 'http://localhost:3845/assets/f2c42036ff8b3fccc65a6f5c9177e3deec4e488b.png'
const img7 = 'http://localhost:3845/assets/758526123e5ae8b85a9084cf0958a767f6c6d07a.png'
const img3 = 'http://localhost:3845/assets/40aa15a7e813bc19c0db61cfda5fe1ff05332cb6.svg'

const FigmaTest03: React.FC = () => {
  return (
    <div className={styles.container} data-name='Test-02' data-node-id='610:7754'>
      <div className={styles.backgroundBorder} data-name='□' data-node-id='610:7755' />

      <div className={styles.contentsWrapper} data-name='Contents + Index UI' data-node-id='610:7758'>
        <div className={styles.contents} data-name='Contents' data-node-id='610:7759'>
          <div className={styles.backgroundOverlay} data-name='■' data-node-id='610:7760' />

          {/* Movie Section */}
          <div className={styles.movieSection} data-name='movie' data-node-id='610:7761'>
            <div className={styles.movieInner} data-name='movie' data-node-id='610:7841'>
              <div className={styles.bodySection} data-name='Body' data-node-id='610:7844'>
                <div className={styles.headlineArea} data-node-id='610:7845'>
                  <div className={styles.headlineWrapper}>
                    <div className={styles.headlineSticky} data-name='Headline_midashi' data-node-id='610:7846'>
                      <div className={styles.headlineText} data-node-id='I610:7846;32499:11858'>
                        <p className={styles.headlineParagraph}>ムービー</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.textArea} data-name='Text' data-node-id='610:7847'>
                  <div className={styles.imagesRow} data-name='Images' data-node-id='610:7848'>
                    <div className={styles.imageContainer}>
                      <ImgTitleDesc
                        title='森ビル ブランドムービー｜DESIGNING TOKYO（2023）'
                        desc=''
                        iconIsArrow={false}
                        iconIsExternal={false}
                        pattern='default'
                        imageUrl={imgImage}
                      />
                    </div>
                    <div className={styles.imageContainer}>
                      <ImgTitleDesc
                        title='麻布台ヒルズコンセプトムービー｜都市に生きる（2019）'
                        desc=''
                        iconIsArrow={false}
                        iconIsExternal={false}
                        pattern='default'
                        imageUrl={img}
                      />
                    </div>
                  </div>

                  <div className={styles.imagesRow} data-name='Images' data-node-id='610:7851'>
                    <div className={styles.imageContainer}>
                      <ImgTitleDesc
                        title='「DESIGNING TOKYO」Full Ver.（2019年）'
                        desc=''
                        iconIsArrow={false}
                        iconIsExternal={false}
                        pattern='default'
                        imageUrl={img1}
                      />
                    </div>
                    <div className={styles.imageContainer}>
                      <ImgTitleDesc
                        title='麻布台ヒルズコンセプトムービー｜都市に生きる（2019）'
                        desc=''
                        iconIsArrow={false}
                        iconIsExternal={false}
                        pattern='default'
                        imageUrl={img2}
                      />
                    </div>
                  </div>

                  <div className={styles.buttonList} data-name='btn_list' data-node-id='610:7854'>
                    <button className={styles.button} data-name='Button' data-node-id='610:7855'>
                      <div className={styles.buttonText} data-node-id='I610:7855;16017:2182'>
                        <p className={styles.buttonParagraph}>ムービー 一覧</p>
                      </div>
                      <div className={styles.buttonIcon} data-name='＞' data-node-id='I610:7855;16017:2181'>
                        <img alt='' className={styles.buttonIconImg} src={img3} />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Graphic Section */}
          <div className={styles.graphicSection} data-name='graphic' data-node-id='610:7856'>
            <div className={styles.bodySection} data-name='Body' data-node-id='610:7859'>
              <div className={styles.headlineArea} data-node-id='610:7860'>
                <div className={styles.headlineWrapper}>
                  <div className={styles.headlineSticky} data-name='Headline_midashi' data-node-id='610:7861'>
                    <div className={styles.headlineTextGray} data-node-id='I610:7861;32499:11858'>
                      <p className={styles.headlineParagraph}>グラフィック広告</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.textArea} data-name='Text' data-node-id='610:7862'>
                <div className={styles.imagesRow} data-name='Images' data-node-id='610:7863'>
                  <div className={styles.imageContainer}>
                    <ImgTitleDesc
                      title='2023年　麻布台ヒルズ開業広告「GREEN, LIFE, TOKYO. AZABUDAI HILLS」'
                      desc=''
                      iconIsArrow={false}
                      iconIsExternal={false}
                      pattern='default'
                      imageUrl={img4}
                    />
                  </div>
                  <div className={styles.imageContainer}>
                    <ImgTitleDesc
                      title='2023年　虎ノ門ヒルズ ステーションタワー開業広告「WELCOME TO TORANOMON HILLS」'
                      desc=''
                      iconIsArrow={false}
                      iconIsExternal={false}
                      pattern='default'
                      imageUrl={img6}
                    />
                  </div>
                  <div className={styles.imageContainer}>
                    <ImgTitleDesc
                      title='2021年「Hello, Mirai Tokyo！ 2021→」'
                      desc=''
                      iconIsArrow={false}
                      iconIsExternal={false}
                      pattern='default'
                      imageUrl={img7}
                    />
                  </div>
                </div>

                <div className={styles.buttonList} data-name='btn_list' data-node-id='610:7867'>
                  <button className={styles.button} data-name='Button' data-node-id='610:7868'>
                    <div className={styles.buttonText} data-node-id='I610:7868;16017:2182'>
                      <p className={styles.buttonParagraph}>グラフィック広告 一覧</p>
                    </div>
                    <div className={styles.buttonIcon} data-name='＞' data-node-id='I610:7868;16017:2181'>
                      <img alt='' className={styles.buttonIconImg} src={img3} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.backgroundOverlayMain} data-name='rgab(#9FA0A0, .3);' data-node-id='610:7773' />
    </div>
  )
}

export default FigmaTest03
