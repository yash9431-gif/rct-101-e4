import React, { useEffect, useState } from "react";

const Login = () => {
  const axios = require('axios').default;
  var [val, setVal] = useState([])

  useEffect(() => {
    
    axios.get('http://localhost:8080/products')
      .then(function (response) {
        // handle successuse

        setVal(response.data)
    
  
      })
    
  }, []);
  
  console.log(val)
  return (
    

    <div>
      <form>
        <input data-cy="login-email" placeholder="email" />
        <input data-cy="login-password" placeholder="password" />
        <button data-cy="login-submit" type="submit" >Login</button>
      </form>
    </div>
  
    
  
  
  )
  ;
};

export default Login;
