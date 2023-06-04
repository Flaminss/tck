import Image from 'next/image';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

import AffiliateBoxFeaturedBadge from '../AffiliateBoxFeaturedBadge/AffiliateBoxFeaturedBadge';
import AffiliateBoxCodeBox from '../AffiliateBoxCodeBox/AffiliateBoxCodeBox';
import Button from '../Button/Button';

import { AffiliateTag, IAffiliateCode } from '@/types/affiliate';

import classes from './AffiliateBox.module.scss';

function AffiliateBox({
  image,
  reward,
  name,
  codes,
  tags,
  featured
}: {
  image: string;
  reward: string;
  name: string;
  codes: IAffiliateCode[];
  tags: AffiliateTag[];
  featured?: boolean;
}) {
  function handleClick(link: string) {
    window.open(link, '_blank');
  }

  return (
    <div className={clsx(classes.root, featured && classes.featured)}>
      {featured && <AffiliateBoxFeaturedBadge />}
      <div className={classes.top}>
        <div className={classes.image}>
          <Image src={image} alt={name} width={200} height={100} style={{ objectFit: 'contain' }} />
        </div>
        <div className={classes.info}>
          <div className={classes.reward}>{reward}</div>
          <div className={classes.name}>{name}</div>
        </div>
        <div className={classes.redeemWrapper}>
          {codes.map((code) => {
            return (
              <div className={classes.redeem} key={code.code}>
                <AffiliateBoxCodeBox>{code.code}</AffiliateBoxCodeBox>
                <Button
                  rightIcon={faAngleRight}
                  variant='gradient'
                  onClick={() => {
                    handleClick(code.link);
                  }}
                >
                  Claim
                </Button>
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.bottom}>
        {tags.map((tag) => {
          return (
            <span className={classes.tag} key={tag}>
              {tag}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default AffiliateBox;
