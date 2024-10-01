import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  padding: 0 1rem 1rem;
  max-width: 1500px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    padding: 0 5rem 1rem;
  }
`;
