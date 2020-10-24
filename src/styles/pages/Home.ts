import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 30px;
  max-width: 1280px;
`;

export const Header = styled.div`
  width: fit-content;
  margin: -80px auto 40px;

  display: grid;
  grid-gap: 12px;
  justify-items: center;
  grid-template-columns: repeat(4, 280px);

  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, 280px);
  }

  @media (max-width: 660px) {
    grid-template-columns: 280px;
  }
`;
