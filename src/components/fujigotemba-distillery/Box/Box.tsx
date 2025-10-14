import React from 'react'
import ImgOpt from '@/components/utils/ImgOpt/ImgOpt'
import * as styles from './Box.css'

const img1 = '/assets/figma/8ca755dd25ada908ff9ec2f62a66104ec9a53182.png'
const img2 = '/assets/figma/0f4c69a8dbb32fd2511f40f9caef2aeff178a6db.svg'

interface BoxProps {
  className?: string
  prop1?: 'jp' | 'en' | 'ch' | 'ko' | 'FRA'
}

export default function Box({ className, prop1 = 'jp' }: BoxProps) {
  const imageComponent = (
    <div className={styles.imageContainer} data-name='img'>
      <div className={styles.imageMask} data-name='tasting-with-a-wineglass@2x 1'>
        <ImgOpt
          src={img1}
          alt='Tasting with a wineglass'
          className={styles.mainImage}
        />
      </div>
    </div>
  )

  const numberElement = (
    <p className={styles.number}>01</p>
  )

  const lineElement = (
    <div className={styles.lineContainer} data-name='line'>
      <ImgOpt src={img2} alt='' className={styles.lineImage} />
    </div>
  )

  if (prop1 === 'en') {
    return (
      <div className={`${styles.container} ${className || ''}`} data-name='プロパティ1=en' data-node-id='25:1976'>
        <div className={styles.titleSection} data-name='title' data-node-id='25:1985'>
          {numberElement}
          {lineElement}
          <p className={styles.titleEn} data-node-id='25:1988'>
            clean & esthetic
          </p>
        </div>
        <div className={styles.textSection} data-name='text' data-node-id='25:1977'>
          {imageComponent}
          <div className={styles.textContent} data-name='text' data-node-id='25:1982'>
            <p className={styles.headlineEn} data-node-id='25:1983'>
              What we aimed for was the Japanese climate and Whiskey that matches the food culture.
            </p>
            <p className={styles.bodyTextEn} data-node-id='25:1984'>
              Fuji Gotemba Distillery aims to express the flavor of "Clean & Estery." Since its inception in 1973, Fuji Gotemba Distillery has aimed to create whiskey that suits Japan's climate and food culture. It is a smooth and harmonious whiskey with a mellow taste that captures the distinctive characteristics of whiskey while maintaining a pleasant balance. We describe this clean and fruity flavor with the words "Clean" for its lack of impurities and clear aroma, and "Estery" for its fruity and vibrant complexity.
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (prop1 === 'FRA') {
    return (
      <div className={`${styles.container} ${className || ''}`} data-name='プロパティ1=FRA' data-node-id='25:1989'>
        <div className={styles.titleSection} data-name='title' data-node-id='25:1998'>
          {numberElement}
          {lineElement}
          <p className={styles.titleFra} data-node-id='25:2001'>
            clean & esthetic
          </p>
        </div>
        <div className={styles.textSection} data-name='text' data-node-id='25:1990'>
          {imageComponent}
          <div className={styles.textContent} data-name='text' data-node-id='25:1995'>
            <p className={styles.headlineFra} data-node-id='25:1996'>
              What we aimed for was the Japanese climate and Whiskey that matches the food culture.
            </p>
            <p className={styles.bodyTextFra} data-node-id='25:1997'>
              Fuji Gotemba Distillery aims to express the flavor of "Clean & Estery." Since its inception in 1973, Fuji Gotemba Distillery has aimed to create whiskey that suits Japan's climate and food culture. It is a smooth and harmonious whiskey with a mellow taste that captures the distinctive characteristics of whiskey while maintaining a pleasant balance. We describe this clean and fruity flavor with the words "Clean" for its lack of impurities and clear aroma, and "Estery" for its fruity and vibrant complexity.
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (prop1 === 'ch') {
    return (
      <div className={`${styles.container} ${className || ''}`} data-name='プロパティ1=ch' data-node-id='25:2002'>
        <div className={styles.titleSection} data-name='title' data-node-id='25:2011'>
          {numberElement}
          {lineElement}
          <p className={styles.titleCh} data-node-id='25:2014'>
            清洁与美观
          </p>
        </div>
        <div className={styles.textSection} data-name='text' data-node-id='25:2003'>
          {imageComponent}
          <div className={styles.textContent} data-name='text' data-node-id='25:2008'>
            <p className={styles.headlineCh} data-node-id='25:2009'>
              我们的目标是日本的气候和
              <br />
              符合饮食文化的威士忌。
            </p>
            <p className={styles.bodyTextCh} data-node-id='25:2010'>
              富士御殿场酿酒厂理想的威士忌可以用"干净、空灵"四个字来概括，来表达它的风味。自 1973 年开业以来，富士御殿场酿酒厂就致力于酿造适合日本气候和饮食文化的威士忌。这是一款平衡良好、口感醇厚、同时仍具有强烈特色的威士忌。我们用"Clean & Esthetic"这个词来表达这种干净的味道和果香、华丽的香气。 <br />
              【洁净】无异味，香气清亮，口感醇厚。
              <br />
              [Ester] 果香浓郁，味道浓郁。
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (prop1 === 'ko') {
    return (
      <div className={`${styles.container} ${className || ''}`} data-name='プロパティ1=ko' data-node-id='25:2015'>
        <div className={styles.titleSection} data-name='title' data-node-id='25:2024'>
          {numberElement}
          {lineElement}
          <p className={styles.titleKo} data-node-id='25:2027'>
            클린 & 에스테리
          </p>
        </div>
        <div className={styles.textSection} data-name='text' data-node-id='25:2016'>
          {imageComponent}
          <div className={styles.textContent} data-name='text' data-node-id='25:2021'>
            <p className={styles.headlineKo} data-node-id='25:2022'>
              목표로 한 것은 일본의 풍토입니다.
              <br />
              음식 문화에 맞는 위스키.
            </p>
            <p className={styles.bodyTextKo} data-node-id='25:2023'>
              후지 고텐바 증류소가 이상으로 하고 있는 위스키는, 「클린＆에스테리」라고 하는 향미를 표현하는 말에 집약됩니다. 맞는 위스키였습니다. 는 위스키의 특징이 제대로 느껴지면서도 조화를 이루고 있어 부드러운 맛이 기분 좋은 위스키. 하고 있습니다. <br />
              【클린】잡미가 없고, 맑은 향기와 부드러운 입맛.
              <br />
              【에스테리】프루티로 화려한 깊은 향미.
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Default: Japanese (jp)
  return (
    <div className={`${styles.container} ${className || ''}`} data-name='プロパティ1=jp' data-node-id='25:1963'>
      <div className={styles.titleSection} data-name='title' data-node-id='25:1972'>
        {numberElement}
        {lineElement}
        <p className={styles.titleJp} data-node-id='25:1975'>
          クリーン＆エステリー
        </p>
      </div>
      <div className={styles.textSection} data-name='text' data-node-id='25:1964'>
        {imageComponent}
        <div className={styles.textContent} data-name='text' data-node-id='25:1969'>
          <div className={styles.headlineJp} data-node-id='25:1970'>
            <p>目指したのは、日本の風土や</p>
            <p>食文化に合ったウイスキー。</p>
          </div>
          <p className={styles.bodyTextJp} data-node-id='25:1971'>
            富士御殿場蒸溜所が理想としているウイスキーは、「クリーン＆エステリー」という香味を表現する言葉に集約されます。富士御殿場蒸溜所が1973年の操業当初から目指したのは、日本の風土や食文化に合うウイスキーでした。それは、ウイスキーの特長がしっかりと感じられながらも調和が取れていて、まろやかな味わいが心地良いウイスキー。こうした清らかな味わいとフルーティで華やかな香りを、私たちは「クリーン & エステリー」という言葉で表現しています。 【クリーン】雑味がなく、澄んだ香りとまろやかな口当たり。 【エステリー】フルーティで華やかな深い香味。
          </p>
        </div>
      </div>
    </div>
  )
}
