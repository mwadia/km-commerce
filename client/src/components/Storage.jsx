import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import Axios from 'axios';
export const Store = createContext(0);
function Storage(props) {
  const [user, setUser] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [cartProduct, setCartProduct] = useState([]);
  const [countCart, SetCountCart] = useState(0);
  const [openCart, setOpenCart] = React.useState(false);
  const [total,setTotal]=useState(0)

  const [filter, SetFilter] = useState({
    q: '',
    c: '',
  });
  useEffect(() => {
    Axios.get('/user').then((res) => {
      if (res.data.data) {
        setUser(res.data.data);
      }
    });
  }, []);
  useEffect(() => {
    if (user) {
      Axios('/getcartproduct').then((res) => {
        setCartProduct(res.data.data);
        SetCountCart(res.data.data.length);
          setTotal(res.data.data.reduce((a,b)=>
            a +b.Product.price,0))
      });
    }
  }, [user, openCart]);
  return (
    <div>
      <Store.Provider
        value={{
          setUser,
          user,
          filter,
          SetFilter,
          open,
          setOpen,
          cartProduct,
          setCartProduct,
          countCart,
          SetCountCart,
          openCart,
          setOpenCart,
          total,setTotal
        }}
      >
        {props.children}
      </Store.Provider>
    </div>
  );
}

export default Storage;
