import React  from "react";

function useAuth(){
  return true
}

const HomeGuard = ({children}) => {
  const auth = useAuth();
  return auth ? children : <React.Fragment />
}

export default HomeGuard