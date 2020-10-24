import styled from 'styled-components';

export const Container = styled.div`
  padding: 45px 0 120px;
  border-radius: 0 0 30px 30px;
  background: ${({ theme }) => theme.colors.header};
`;

export const Content = styled.div`
  margin: 0 auto;
  padding: 0 30px;
  max-width: 1280px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 660px) {
    flex-direction: column;
  }

  h1 {
    font-size: 28px;
  }

  strong {
    color: ${({ theme }) => theme.colors.label};
  }

  .switch-container {
    display: flex;
    align-items: center;

    > span {
      margin-right: 5px;
      width: fit-content;

      font-size: 14px;
      font-weight: bold;
      text-transform: capitalize;
    }
  }

  @media (max-width: 660px) {
    flex-direction: column;
    align-items: unset;

    .switch-container {
      width: 100%;
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px solid ${({ theme }) => theme.colors.label};
    }
  }
`;

export const Switch = styled.label`
  width: 60px;
  height: 30px;

  margin-left: auto;
  position: relative;
  display: inline-block;

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    border-radius: 16px;
    background: linear-gradient(
      90deg,
      rgba(80, 151, 228, 1) 0%,
      rgba(69, 207, 147, 1) 100%
    );

    transition: 0.4s;
    -webkit-transition: 0.4s;

    &:before {
      position: absolute;
      bottom: 4px;
      left: 5px;

      width: 22px;
      height: 22px;

      border-radius: 13px;
      background: ${({ theme }) => theme.colors.primary};

      content: '';
      transition: 0.4s;
      -webkit-transition: 0.4s;
    }
  }

  input:checked + .slider:before {
    transform: translateX(29px);
    -ms-transform: translateX(29px);
    -webkit-transform: translateX(29px);
  }
`;
