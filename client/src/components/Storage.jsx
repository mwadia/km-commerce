import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import Axios from 'axios';
export const Store = createContext(0);
function Storage(props) {
  const [user, setUser] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [cartProduct, setCartProduct] = useState([]);

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
      });
    }
  }, [user]);
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
        }}
      >
        {props.children}
      </Store.Provider>
    </div>
  );
}

export default Storage;
