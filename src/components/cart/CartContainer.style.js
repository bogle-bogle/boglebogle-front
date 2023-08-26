import styled from 'styled-components';
import { RiDeleteBin6Line } from "react-icons/ri";

export const CartContentContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CartCardContainer = styled.div`
  flex: 70%;
`;

export const CartInfoContainer = styled.div`
  flex: 30%;
`;

export const CartCard = styled.div`
  background-color: transparent;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  margin-bottom: 10px; /* Add margin between each CartCard */
`

export const DeleteIcon = styled(RiDeleteBin6Line)`
  font-size: 27px;
`;