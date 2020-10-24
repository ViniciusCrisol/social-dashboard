import styled, { css } from 'styled-components';

const gridTemplate = css`
  display: grid;
  grid-gap: 12px;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1280px) {
    width: fit-content;
    grid-template-columns: repeat(2, 296px);
  }

  @media (max-width: 660px) {
    width: 100%;
    grid-gap: 16px;
    grid-template-columns: 1fr;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 30px;
  max-width: 1280px;

  > h1 {
    color: ${({ theme }) => theme.colors.label};
  }
`;

export const Header = styled.div`
  ${gridTemplate};
  margin: -80px auto 40px;
`;

export const Content = styled.div`
  ${gridTemplate};
  margin: 60px auto;
  grid-row: repeat(2, 280px);
`;
