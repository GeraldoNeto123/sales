import styled from "styled-components";

export const Container = styled.div`
  margin-top: -3rem;

  .summaryContent {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    @media (max-width: 991px) {
      & {
        flex-direction: column;
      }
    }
  }
`;

export const Card = styled.header`
  width: 100%;
  border-radius: 8px;
  background: var(--white);
  padding: 1rem 2rem 2rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  &:last-child {
    background: var(--green);
    color: var(--white);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  strong {
    display: block;
    font-weight: 600;
    margin-top: 2rem;
    font-size: 2rem;
  }
`;
