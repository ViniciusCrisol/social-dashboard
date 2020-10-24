import React from 'react';

import formatNumber from '../../lib/formatNumber';
import InstagramIcon from '../../assets/icon-instagram.svg';
import FacebookIcon from '../../assets/icon-facebook.svg';
import TwitterIcon from '../../assets/icon-instagram.svg';
import YoutubeIcon from '../../assets/icon-youtube.svg';
import UpIcon from '../../assets/icon-up.svg';
import DownIcon from '../../assets/icon-down.svg';

import { Container } from './styles';

interface IOverviewCardProps {
  data: IOverviewCard;
}

const OverviewCard: React.FC<IOverviewCardProps> = ({ data }) => {
  const SocialMediaIcon: React.FC = () => {
    switch (data.socialMedia) {
      case 'facebook':
        return <FacebookIcon />;
      case 'instagram':
        return <InstagramIcon />;
      case 'twitter':
        return <TwitterIcon />;
      default:
        return <YoutubeIcon />;
    }
  };

  return (
    <Container labelColor={data.percent < 0 ? 'red' : 'green'}>
      <div className="header">
        <strong>{data.label}</strong>
        <SocialMediaIcon />
      </div>

      <div className="footer">
        <h1>{formatNumber(data.quantity)}</h1>

        <span>
          {data.percent < 0 ? <DownIcon /> : <UpIcon />}
          {data.percent < 0
            ? data.percent.toString().split('-')[1]
            : data.percent}
          %
        </span>
      </div>
    </Container>
  );
};

export default OverviewCard;
