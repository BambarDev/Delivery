import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from '@react-native-firebase/auth'

const auth = getAuth();

const useAuth = () => {
  const [ user, setUser ] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      console.log('got user:', user);
      if(user) {
        setUser(user);
      } else {
        setUser(null);
      }
    })
    return unsub;
  },[])

  return { user }
}

export default useAuth