// import ImgTitleDesc from '../../components/ui/ImgTitleDesc/ImgTitleDesc'
import * as styles from './FigmaTest01.css'

const img = 'http://localhost:3845/assets/ad89cca48a4f5ea415d85c91d56e54b9de58d4b3.png'
const img1 = 'http://localhost:3845/assets/40aa15a7e813bc19c0db61cfda5fe1ff05332cb6.svg'
// const img2 = 'http://localhost:3845/assets/33065a1e70a02517793cc55f68c49578d4c48d39.png'

const FigmaTest01: React.FC = () => {
  return <>
    {/* <div
      style={{
        width: '791px',
        height: '370px',
      }}
    >
      <ImgTitleDesc
        title='森ビル提供のラジオ番組　J-WAVE「MORI BUILDING GO NEXT TOKYO」　（月～木曜 13:45～13:55）'
        desc='東京のホットなイベントや情報をお届けしています。'
        iconIsArrow={false}
        iconIsExternal={false}
        pattern='white_bg'
        imageUrl={img2}
      />
    </div> */}
    <div className={styles.container} data-name='Contents + Index UI' data-node-id='570:37920'>
      <div className={styles.contents} data-name='Contents' data-node-id='570:37921'>
        <div className={styles.backgroundOverlay} data-name='■' data-node-id='570:37922' />
        <div className={styles.movieSection} data-name='movie' data-node-id='570:37935'>
          <div className={styles.bodySection} data-name='Body' data-node-id='570:37938'>
            <div className={styles.headlineArea} data-node-id='570:37939'>
              <div className={styles.headlineWrapper}>
                <div className={styles.headlineSticky} data-name='Headline_midashi' data-node-id='584:6730'>
                  <div className={styles.headlineText} data-node-id='584:6731'>
                    <p>テキストダミー</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.textArea} data-name='Text' data-node-id='570:37941'>
              <div className={styles.imageSection} data-name='Image + Caption' data-node-id='570:37942'>
                <div className={styles.imageContainer} data-name='image' data-node-id='I570:37942;24012:5334'>
                  <div className={styles.imageWrapper}>
                    <img alt='' className={styles.image} src={img} />
                  </div>
                </div>
              </div>
              <div className={styles.descriptionText} data-node-id='570:37943'>
                <p>テキストダミー。テキストダミー。テキストダミー。テキストダミー。テキストダミー。テキストダミー。テキストダミー。テキストダミー。テキストダミー。</p>
              </div>
              <div className={styles.buttonList} data-name='btn_list' data-node-id='570:37944'>
                <button className={styles.button} data-name='Button' data-node-id='570:37945'>
                  <div className={styles.buttonText} data-node-id='I570:37945;16017:2182'>
                    <p>詳しく見る</p>
                  </div>
                  <div className={styles.buttonIcon} data-name='＞' data-node-id='I570:37945;16017:2181'>
                    <img alt='' className={styles.buttonIconImg} src={img1} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default FigmaTest01
