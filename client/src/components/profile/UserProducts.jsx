import { Stack } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Product from '../products/Product'

function UserProducts({userProducts,setUserProducts}) {
  return (
    <Container maxWidth='lg'>
      <Stack width='100%' direction='row' justifyContent={{sm:'flex-start',xs:'center'}} flexWrap='wrap' gap='20px' >
      {userProducts.map(item=> <Product setUserProducts={setUserProducts} userProducts={userProducts} item={item} key={item.id}/> )
      }
      </Stack>
     
    
    </Container>
  )
}

export default UserProducts
