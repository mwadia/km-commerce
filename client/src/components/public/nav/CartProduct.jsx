import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Stack, Chip, CardActionArea } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function CartProduct({ item }) {
  const { id, name, price, count, productImg } = item.Product;
  console.log(item.count);
  return (
    <Box
      maxWidth='100%'
      position='relative'
      boxShadow='none'
      borderBottom='1px solid grey'
    >
      <Card sx={{ width: '100%', boxShadow: 'none' }}>
        <CardActionArea >
          <Stack direction='row' position='relative'>
            <CardMedia
              component='img'
              height='140' 
              sx={{ width: '140px'}}
              image={productImg}
              alt='green iguana'
            />
            <CardContent  >
              <Typography
                gutterBottom
                variant='h5'
                fontWeight='light'
                component='div'
              >
                {name}
              </Typography>
              <Stack direction='row' justifyContent='space-between'>
                <Typography
                  variant='h5'
                  fontWeight='light'
                  display='block'
                  color='text.secondary'
                >
                  ${price}
                </Typography>

                <Chip
                  color='success'
                  variant='outlined'
                  label={`quantity: ${count}`}
                />
              </Stack>
            </CardContent>
            <Stack
              position='absolute'
              top='20%'
              right='0'
              alignItems='center'
              marginRight='20px'
            >
              <KeyboardArrowUpIcon color='secondary' />
              <Typography
                variant='h5'
                fontWeight='normal'
                display='block'
                color='text.secondary'
                fontSize='30px'
              >
                {0}
              </Typography>
              <KeyboardArrowDownIcon color='secondary' />
            </Stack>
          </Stack>
        </CardActionArea>
      </Card>
    </Box>
  );
}
