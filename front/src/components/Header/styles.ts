import styled from "styled-components";

export const Container = styled.header`
  background: var(--purple);
  height: 200px;
  .logo {
    color: var(--white);
  }
  .headerContainerContent {
    height: 60%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 991px) {
      & {
        padding-top: 1rem;
        flex-direction: column;
      }
    }
  }

  .newTransactionButton {
    background: var(--purpleLight);
    color: var(--grey);
  }
`;
