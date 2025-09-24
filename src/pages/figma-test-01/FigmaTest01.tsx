const FigmaTest01 = () => {
  return (
    <div className='figma-test-01'>
      <div className='body-frame'>
        <div className='frame-1'>
          <div className='headline-midashi'>
            <h2 className='headline-text'>テキストダミー</h2>
          </div>
        </div>
        <div className='text-section'>
          <div className='image-caption'>
            <div className='image-placeholder'></div>
            <div className='caption'>
              <div className='author-name'>辻 慎吾</div>
              <div className='author-title'>代表取締役社長</div>
            </div>
          </div>
          <div className='text-content'>
            テキストダミー。テキストダミー。テキストダミー。テキストダミー。テキストダミー。テキストダミー。テキストダミー。テキストダミー。テキストダミー。
          </div>
          <div className='button-list'>
            <button className='detail-button'>
              <span>詳しく見る</span>
              <span className='arrow'>＞</span>
            </button>
          </div>
        </div>
      </div>
      <style>{`
        .figma-test-01 {
          position: relative;
          width: 100%;
          background: #ffffff;
          padding: 50px;
        }

        .body-frame {
          display: flex;
          gap: 50px;
          width: 1212px;
          height: 549px;
        }

        .frame-1 {
          display: flex;
          flex-direction: column;
          width: 371px;
          height: 100%;
        }

        .headline-midashi {
          display: flex;
          padding-top: 116px;
          width: 354px;
          height: 148px;
        }

        .headline-text {
          font-family: 'A P-OTF Midashi Go MB31 Pr6N', 'Hiragino Sans', sans-serif;
          font-weight: 600;
          font-size: 21px;
          line-height: 31.5px;
          color: rgba(81, 82, 82, 1);
          margin: 0;
          letter-spacing: 0px;
        }

        .text-section {
          display: flex;
          flex-direction: column;
          width: 791px;
          height: 549px;
          gap: 50px;
        }

        .image-caption {
          display: flex;
          flex-direction: column;
          gap: 11px;
          width: 100%;
          height: 333px;
        }

        .image-placeholder {
          width: 791px;
          height: 333px;
          background: #e5e5e5;
          border-radius: 3px;
        }

        .caption {
          display: none;
        }

        .author-name {
          font-family: 'A P-OTF Midashi Go MB31 Pr6N', 'Hiragino Sans', sans-serif;
          font-weight: 400;
          font-size: 12px;
          line-height: 19px;
          color: #000;
        }

        .author-title {
          font-family: 'A P-OTF Gothic BBB Pr6N', 'Hiragino Sans', sans-serif;
          font-weight: 400;
          font-size: 12px;
          line-height: 19px;
          color: rgba(81, 82, 82, 1);
        }

        .text-content {
          width: 791px;
          font-family: 'A P-OTF Gothic BBB Pr6N', 'Hiragino Sans', sans-serif;
          font-weight: 400;
          font-size: 16px;
          line-height: 32px;
          color: #000;
        }

        .button-list {
          display: flex;
          justify-content: flex-end;
          width: 100%;
        }

        .detail-button {
          display: flex;
          align-items: center;
          gap: 20px;
          background: #000;
          color: #fff;
          border: none;
          border-radius: 3px;
          padding: 18px 22px 18px 20px;
          width: 370px;
          height: 52px;
          cursor: pointer;
          font-family: 'A P-OTF Midashi Go MB31 Pr6N', 'Hiragino Sans', sans-serif;
          font-weight: 600;
          font-size: 14px;
          line-height: 16px;
        }

        .detail-button:hover {
          background: #333;
        }

        .arrow {
          margin-left: auto;
        }
      `}</style>
    </div>
  )
}

export default FigmaTest01
