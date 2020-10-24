import styled from 'styled-components';

interface IContainerProps {
  labelColor: 'green' | 'red';
}

export const Container = styled.div<IContainerProps>`
  width: 100%;
  height: 140px;

  padding: 24px 32px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.primary};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .footer span {
    display: flex;
    align-items: center;

    font-weight: bold;
    color: ${({ theme, labelColor }) =>
      labelColor === 'green' ? theme.colors.green : theme.colors.red};

    svg {
      margin-right: 4px;
    }
  }
`;
