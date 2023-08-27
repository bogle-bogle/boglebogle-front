// import axios from 'axios';
import React from 'react';
import { DeleteIcon

} from './CartCard.style';
import { Checkbox } from '@mui/material';

function CartCard({cnt}) {
  // if (cart !== undefined) {
  //   console.log(cart)
  // }

  console.log(cnt)
  return (
    <CartCard>
      <Checkbox />
      <DeleteIcon />

    </CartCard>
  )
}

export default CartCard
