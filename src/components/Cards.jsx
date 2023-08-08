// Cards.js

import React from 'react';
import cardsStyles from './cards.scss';
import Card from './Card';

const Cards = () => {
  const data = [
    "https://s3-alpha-sig.figma.com/img/eb5c/29c2/4f3545dbf05f55e955991e8ee12be5cf?Expires=1692576000&Signature=gmgmvXMnHAcf0ma-Wc55OkR55EPJ-bcgeeuN6dN6Y~DLWAIk2BRnqCdK7f4kZTsi-tv56s13gMBJbFjwago9MBRwyC87OFE-9hnsIjcmRPHb1sUKMNkJCHst5anZffj8-nZXN8SNEaqNKVOx~ol3Kp5-mOfnDbXVhHyzMRpe9BAeNQ5aNp3HyNeo4iEm7r8SL5~m~a-PxYvu1y4GFysJiD2xLYdtHJuTluOx94t390mQSzXqkNqzzyaNsEQn~JLI3m-I7uk3LM0dAuI7tuF8Xc6iRgowbfx-PFLsD3I3lsbqllA8jgcoYt~xOd9sxCbzlfIkrtSoiZtZLQmH~ZzVEA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://s3-alpha-sig.figma.com/img/bb90/e4cf/f589e2474d42308b4f250c3e80178eef?Expires=1692576000&Signature=A0KFyGRazkDXGQHWcY9ado0mxem0tuMIgtT1zpZjqjUnyqwk0ga~i0YY6FZPOi~cOxfQ79jQ4m1kS~-LyN0Wb7PTW2duBiHAL51~udz~Dt1w2GN9O83GSKi57NXYUaByCglLMGSNmfFxaRrhbURvrClbpxGvnOl2VJQNs4-YH2I1BeUM9Nhk5C0BNdaFMnS1r449baudT7I3JIyJX55~BzaKH31VkOwsaOdWnz1e~HkiMFTh213fJ0qzQSf8zZDO6PTKisSCj1x1n~9ef8Jxzz8QlZPtLipa9rRn8~jStA4hAj3m03LL1OqaCIQAlYdXfpnew6ciqNy73QJ0qimxdA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  ];

  return (
    <div className='cardContainer'>
      <div className='text'>
        <h2>New Arrivals</h2>
        <p>Embrace the unexpected Unveiling styles that redefine you!</p>
      </div>
      <div className='cardRow'>
        <Card item={data[0]} />
        <Card item={data[1]} />
      </div>
    </div>
  );
};

export default Cards;
