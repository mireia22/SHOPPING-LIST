import { styled } from "styled-components";

export const NavWrp = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  > a {
    background-color: var(--secondary);
    padding: 1rem;
    font-weight: bold;
    color: var(--text);
    text-transform: uppercase;
    border-radius: 5px;
  }
`;
