import React from 'react';

import InstagramIcon from '../../assets/icon-instagram.svg';
import FacebookIcon from '../../assets/icon-facebook.svg';
import TwitterIcon from '../../assets/icon-instagram.svg';
import YoutubeIcon from '../../assets/icon-youtube.svg';

import { Container } from './styles';

interface IHeaderCardProps {
  data: IHeaderCard;
}

const HeaderCard: React.FC<IHeaderCardProps> = ({ data }) => {
  const SocialMediaIcon: React.FC = () => {
    switch (data.socialMedia) {
      case 'facebook':
        return <FacebookIcon />;
      case 'instagram':
        return <FacebookIcon />;
      case 'twitter':
        return <FacebookIcon />;
      default:
        return <YoutubeIcon />;
    }
  };

  return (
    <Container socialMedia={data.socialMedia}>
      <div className="header">
        <SocialMediaIcon />
        <strong>{data.userName}</strong>
      </div>
    </Container>
  );
};

export default HeaderCard;
