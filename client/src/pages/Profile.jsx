import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Profile({ setShowNav }) {
  const paramsId = useParams();
  useEffect(() => {
    setShowNav(true);
  }, []);
  console.log(paramsId);
  return <div>im owner</div>;
}

export default Profile;
