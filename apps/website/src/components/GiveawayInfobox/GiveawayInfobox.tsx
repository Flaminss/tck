import { IGiveaway } from 'types';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import {
  faAngleLeft,
  faAngleRight,
  faBalanceScale,
  faUser
} from '@fortawesome/free-solid-svg-icons';

import Button from '../Button/Button';
import JaggedBackgroundItem from '../JaggedBackgroundItem/JaggedBackgroundItem';
import IconBubble from '../IconBubble/IconBubble';
import EntryCounter from '../EntryCounter/EntryCounter';

import classes from './GiveawayInfobox.module.scss';

function GiveawayInfobox({ giveaway }: { giveaway: IGiveaway }) {
  const router = useRouter();

  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <Button
          leftIcon={faAngleLeft}
          onClick={() => {
            router.push('/giveaways');
          }}
        >
          Back
        </Button>
        <Button>
          <FontAwesomeIcon icon={faBalanceScale} />
        </Button>
      </div>
      <div className={classes.middle}>
        <Image
          width={268}
          height={136}
          src={`https://cdn.tck.gg/giveaways/${giveaway.image}`}
          alt={giveaway.name}
          style={{
            objectFit: 'contain'
          }}
        />

        <div className={classes.info}>
          <p className={classes.name}>{giveaway.name}</p>
          <p className={classes.brand}>{giveaway.brand}</p>
        </div>

        <div className={classes.infoSection}>
          <JaggedBackgroundItem fill='#26263A' withShadow>
            <p>nice</p>
          </JaggedBackgroundItem>
          <div className={classes.entriesSection}>
            <div className={classes.entriesCounter}>
              <IconBubble icon={faUser} size={16} />
              <EntryCounter count={giveaway.entries.length} max={giveaway.maxEntries} />
            </div>
            <p className={classes.giveawayEntriesDescription}>Giveaway Entries</p>
          </div>
        </div>
      </div>
      <div className={classes.bottom}>
        <Button variant='gradient' rightIcon={faAngleRight} fullWidth>
          Enter Giveaway
        </Button>
      </div>
    </div>
  );
}

export default GiveawayInfobox;
