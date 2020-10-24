import styled from 'styled-components';

interface IContainerProps {
  socialMedia: ISocialMedia;
  footerColor: 'green' | 'red';
}

const headerColor = (socialMedia: ISocialMedia): string => {
  switch (socialMedia) {
    case 'facebook':
      return '#178FF5';
    case 'twitter':
      return '#178FF5';
    case 'instagram':
      return 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(252,176,69,1) 100%);';
    default:
      return '#FF1010';
  }
};

export const Container = styled.div<IContainerProps>`
  width: 100%;
  height: 280px;

  padding: 36px 12px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.primary};

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: filter 200ms;

  .header {
    display: flex;
    align-items: center;

    > svg {
      margin-right: 10px;
    }

    > strong {
      color: ${({ theme }) => theme.colors.label};
    }
  }

  .numbers {
    font-size: 18px;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.label};

    h1 {
      font-size: 52px;
      letter-spacing: 1px;
    }
  }

  .footer {
    display: flex;
    align-items: center;

    font-weight: bold;
    color: ${({ theme, footerColor }) =>
      footerColor === 'green' ? theme.colors.green : theme.colors.red};

    svg {
      margin-right: 4px;
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

  &:hover {
    filter: brightness(1.2);
  }
`;
