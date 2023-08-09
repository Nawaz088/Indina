import React, { useState, useEffect } from 'react';
import cardsStyles from './cards.scss';
import Card from './Card';

const Cards = () => {
  const data = [
    // ... (unchanged)
    "https://s3-alpha-sig.figma.com/img/eb5c/29c2/4f3545dbf05f55e955991e8ee12be5cf?Expires=1692576000&Signature=gmgmvXMnHAcf0ma-Wc55OkR55EPJ-bcgeeuN6dN6Y~DLWAIk2BRnqCdK7f4kZTsi-tv56s13gMBJbFjwago9MBRwyC87OFE-9hnsIjcmRPHb1sUKMNkJCHst5anZffj8-nZXN8SNEaqNKVOx~ol3Kp5-mOfnDbXVhHyzMRpe9BAeNQ5aNp3HyNeo4iEm7r8SL5~m~a-PxYvu1y4GFysJiD2xLYdtHJuTluOx94t390mQSzXqkNqzzyaNsEQn~JLI3m-I7uk3LM0dAuI7tuF8Xc6iRgowbfx-PFLsD3I3lsbqllA8jgcoYt~xOd9sxCbzlfIkrtSoiZtZLQmH~ZzVEA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://s3-alpha-sig.figma.com/img/bb90/e4cf/f589e2474d42308b4f250c3e80178eef?Expires=1692576000&Signature=A0KFyGRazkDXGQHWcY9ado0mxem0tuMIgtT1zpZjqjUnyqwk0ga~i0YY6FZPOi~cOxfQ79jQ4m1kS~-LyN0Wb7PTW2duBiHAL51~udz~Dt1w2GN9O83GSKi57NXYUaByCglLMGSNmfFxaRrhbURvrClbpxGvnOl2VJQNs4-YH2I1BeUM9Nhk5C0BNdaFMnS1r449baudT7I3JIyJX55~BzaKH31VkOwsaOdWnz1e~HkiMFTh213fJ0qzQSf8zZDO6PTKisSCj1x1n~9ef8Jxzz8QlZPtLipa9rRn8~jStA4hAj3m03LL1OqaCIQAlYdXfpnew6ciqNy73QJ0qimxdA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://s3-alpha-sig.figma.com/img/3932/bf7e/58000ce04ecf7391bb6decbca367ebd1?Expires=1692576000&Signature=IsAHNdx4x919h8qafUPuv81QyXJzkyKAXQk4JknoDLS1UhqX6r0W2LWA~OqpMPzSF8HXCY9PxrD4kRzluO1hhNG0qzUPILpsKpWO4OccLQJSFEelnlRC8kqPffAwsrW7QBUHghbvoDOzTGb0hr55Uc7hCdicpxJjDV4VsdfQIypTcIxCXjHEcGg1jTWTi5Rkl0iW-j7Zw8d1VDhYQ1VfCRMuwCc-CaUx14FiGvX64kE~HHI5WCL-jeG~rxN1XSQxxdN3BoMbClnOjooEER2BMykJTCUUR3UNQ6t1MDiB3RtsF5Xl~zR2oOnIGf-o4KpbmrttZDt~-40lr5D3QYgQ-g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://s3-alpha-sig.figma.com/img/751b/09b1/4fadd5ab26eb22cbaa6aa3df1576cd74?Expires=1692576000&Signature=KZlujBAn7NB-hSdW-Jwqu14VK0P3w6rHFjTHB3mSw-uIqQ9XG0np3lwVdlmdV8T3mj3qRmuGNNdVBK9FAimqqE359kn~17XTFqFf-utLSxsmCoJi4DtphTQX3UPB~GzRwKTGGHs2RNSTPfTNbtopurAvd5R5V-S5K5dta7qUfVlo8sI52Lv2OqLn8BQARFAxfhvKKIPsKTa6C4iqXCiaukXLx7NeATRONjh-ERzwra5Ctgj11-7omoZjFs62ml12bnw2p7934GEadj6O7ARNFRc35PggTaq3l4w0UBOQfBNKpMWBt7rmxs16vnoaP3Ws9cFip31x7B-RkVL1xuhXbg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  const [sideBySide, setSideBySide] = useState(false);
  const [showPInRightColumn, setShowPInRightColumn] = useState(false);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const textElement = document.querySelector('.text');
    const textBottom = textElement.getBoundingClientRect().bottom;

    if (textBottom >= windowHeight) {
      setScrollPosition(window.scrollY);
      setSideBySide(false);
    } else {
      setScrollPosition(0);
      setSideBySide(true);
    }

    // Calculate when to show p tag in right column
    const navbarElement = document.querySelector('.navbar');
    if (navbarElement) {
      const navbarHeight = navbarElement.offsetHeight;
      setShowPInRightColumn(textBottom <= navbarHeight);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='cardContainer'>
      <div className='cardColumns'>
        <div className='column' style={{ transform: `translateY(-${scrollPosition * 0.5}px)` }}>
          <div className={`text ${sideBySide ? 'sideBySide' : ''}`}>
            <h2>New Arrivals</h2>
            <p>Embrace the unexpected Unveiling styles that redefine you!</p>
          </div>
          {data.slice(0, Math.ceil(data.length / 2)).map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
        <div className='column'>
          {data.slice(Math.ceil(data.length / 2)).map((item, index) => (
            <Card key={index} item={item} showP={showPInRightColumn} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
