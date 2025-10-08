import ImgOpt, { ImgOptProps } from '@/components/utils/ImgOpt/ImgOpt'
import * as styles from './Image.css'

const Image = (props: ImgOptProps) => {
  return <>
    <div className={`${styles.root}`}>
      <ImgOpt {...props} />
    </div>
  </>
}

export default Image
