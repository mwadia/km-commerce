import { Stack } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserInfo from '../components/profile/UserInfo';
import UserProducts from '../components/profile/UserProducts';
import { Store } from '../components/Storage';
import Apiservices from '../services/ApiServices';

function Profile({ setShowNav }) {
  const paramsId = useParams().id;
  const {openCart}=useContext(Store)
  const [userProducts,setUserProducts]=useState([])
  const [userInfo,setUserInfo]=useState({})
  useEffect(() => {
    setShowNav(true);
    Apiservices.get(`/getuser/${paramsId}`).then(res=>setUserInfo(res.data.data))
  }, []);
  useEffect(() => {
    Apiservices.get(`/allproducts/${paramsId}`).then((res) =>{ 
      setUserProducts(res.data)});
  }, [openCart]);
  return <Stack sx={{width:{sm:'100%'},minHeight:{sm:'90vh',xs:'0'}}} direction={{sm:'row',xs:'column-reverse'}} justifyContent='space-between'>
    <UserProducts setUserProducts={setUserProducts} userProducts={userProducts}/>
  <UserInfo userProducts={userProducts} setUserProducts={setUserProducts} paramsId={paramsId} userInfo={userInfo}/>
  </Stack>;
}

export default Profile;
