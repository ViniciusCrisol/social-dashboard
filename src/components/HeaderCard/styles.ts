import styled from 'styled-components';

interface IContainerProps {
  socialMedia: ISocialMedia;
}

const headerColor = (socialMedia: ISocialMedia): string => {
  switch (socialMedia) {
    case 'facebook':
      return '#178FF5';
    case 'twitter':
      return '#178FF5';
    case 'instagram':
      return 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);';
    default:
      return '#FF1010';
  }
};

export const Container = styled.div<IContainerProps>`
  width: 280px;
  height: 280px;

  padding: 36px 12px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.primary};

  display: flex;
  align-items: center;
  flex-direction: column;

  overflow: hidden;
  position: relative;

  .header {
    display: flex;
    align-items: center;

    > svg {
      margin-right: 5px;
    }

    > strong {
      color: ${({ theme }) => theme.colors.headerLabel};
    }
  }

  &::after {
    position: absolute;
    content: '';
    top: 0;

    width: 100%;
    height: 5px;

    background: ${({ socialMedia }) => headerColor(socialMedia)};
  }
`;
