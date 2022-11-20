import { Avatar, Container, Typography } from '@mui/material'
import { Stack ,Box} from '@mui/system'
import React from 'react'
import { useContext } from 'react'
import { Store } from '../Storage'
import AddNewProduct from './AddNewProduct'

function UserInfo({userInfo,paramsId,userProducts,setUserProducts}) {
  const {user}=useContext(Store)
  return (
    <Container sx={{background:{sm:'#f5f0f0',xs:'none'},padding:'70px 0',minHeight:{sm:'100vh',xs:'0'},position:'relative',top:'-10vh',zIndex:'1',right:{sm:'-2vw',xs:'0'}}} maxWidth='xs'>
      <Stack width='100%' gap='20px' alignItems='center'>
        <Box position='relative'  borderRadius='50%'>
        <Avatar sx={{width:'200px',height:'200px'}} src={userInfo.userImg}/>
        </Box>
      <Typography variant='h3'>{userInfo.name}</Typography>
      <Typography variant='h5'>Boket Mony:{user &&user.id==paramsId?userInfo.mony:'*****'}</Typography>
      <Typography variant='h5'>{user && user.id==paramsId?userInfo.email:'*********'}</Typography>
      {
        user && <AddNewProduct userProducts={userProducts} setUserProducts={setUserProducts}/>
      }
      </Stack>
    </Container>
  )
}

export default UserInfo
