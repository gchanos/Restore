import Paper from '@mui/material/Paper';
import { Item } from '../../app/models/basket';
import { Box } from '@mui/system';
import { Grid2, IconButton, Typography } from '@mui/material';
import { Add, Close, Remove } from '@mui/icons-material';
import { useAddBasketItemMutation, useRemoveBasketItemMutation } from './basketApi';
import { currencyFormat } from '../../lib/util';

type Props = {
  item: Item;
};

export default function BasketItem({ item }: Props) {
  const [removeBasketItem] = useRemoveBasketItemMutation();
  const [addBasketItem] = useAddBasketItemMutation();

  return (
    <Paper
      sx={{
        height: 140,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 2,
        borderRadius: 3,
        padding: 2,
      }}
    >
      <Box display="flex" alignItems="center" sx={{ gap: 2 }}>
        <Box>
          <img
            src={item.pictureUrl}
            alt={item.name}
            style={{
              width: 100,
              height: 100,
              objectFit: 'cover',
              borderRadius: 4,
              marginRight: 8,
              marginLeft: 4,
            }}
          />
        </Box>
        <Box display="flex" flexDirection="column" gap={1}>
          <Typography variant="h6">{item.name}</Typography>

          <Box display="flex" alignItems="center" gap={3}>
            <Typography sx={{ fontSize: '1.1rem' }}>
              {currencyFormat(item.price)} x {item.quantity}
            </Typography>
            <Typography sx={{ fontSize: '1.1rem' }} color="primary">
              {currencyFormat(item.price * item.quantity)}
            </Typography>
          </Box>

          <Grid2 container spacing={1} alignItems="center">
            <IconButton
              onClick={() => removeBasketItem({productId: item.productId, quantity: 1})}
              color="error"
              size="small"
              sx={{ border: 1, borderRadius: 1, minWidth: 0 }}
            >
              <Remove />
            </IconButton>
            <Typography variant="h6">{item.quantity}</Typography>
            <IconButton
              onClick={() => addBasketItem({ product: item, quantity: 1 })}
              color="success"
              size="small"
              sx={{ border: 1, borderRadius: 1, minWidth: 0 }}
            >
              <Add />
            </IconButton>
          </Grid2>
        </Box>
      </Box>

      <IconButton
        onClick={() => removeBasketItem({productId: item.productId, quantity: item.quantity})}
        color="error"
        size="small"
        sx={{
          border: 1,
          borderRadius: 1,
          minWidth: 0,
          alignSelf: 'flex-start',
        }}
      >
        <Close />
      </IconButton>
    </Paper>
  );
}
