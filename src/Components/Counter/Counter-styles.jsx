import { styled } from "styled-components";

export const CounterWrp = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  > p {
    font-weight: bold;
  }
`;

export const CounterButton = styled.button`
  background: var(--buttons);
  color: white;
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
  border: none;
`;
