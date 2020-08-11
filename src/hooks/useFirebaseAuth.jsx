import React, { useState, useEffect } from "react"

import { auth, createUser } from "../firebase"

const useFirebaseAuth = (firebase) => {
  const [ authUser, setAuthUser ] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(
      authUser => {
        authUser
          ? setAuthUser(authUser)
          : setAuthUser(null);
      },
    );
    return () => {
      unsubscribe();
    }
  },[]);

  return authUser
}

export default useFirebaseAuth;