import { styled } from "styled-components";

export const ItemsWrp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

export const ItemWrp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem;
  gap: 1rem;
  margin-top: 1rem;
  border-radius: 5px;
  border: 2px solid var(--text);
  background-color: #ffffff;

  > p {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
  }
`;

export const ItemData = styled.li`
  display: flex;
  gap: 0.8rem;
`;

export const ImgWrp = styled.div`
  width: 1.2rem;
  > img {
    width: 100%;
    cursor: pointer;
    object-fit: contain;
  }
`;
