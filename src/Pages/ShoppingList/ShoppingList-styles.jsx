import { styled } from "styled-components";

export const ListWrp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const InputsWrp = styled.div`
  display: flex;
  gap: 1rem;

  > input {
    padding: 0.5rem;
    border: 2px solid var(--buttons);
    border-radius: 5px;
    width: 100%;
  }
`;

export const AppButton = styled.button`
  border: none;
  padding: 0.5rem;
  background-color: var(--secondary);
  border-radius: 5px;
  font-weight: bold;
`;
