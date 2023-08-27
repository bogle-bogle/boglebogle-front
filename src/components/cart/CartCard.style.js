import styled from 'styled-components';
import { RiDeleteBin6Line } from 'react-icons/ri';

export const CartCard = styled.div`
  background-color: transparent;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 1px;
  margin-bottom: 10px; /* Add margin between each CartCard */
`;

export const DeleteIcon = styled(RiDeleteBin6Line)`
  font-size: 27px;
`;
