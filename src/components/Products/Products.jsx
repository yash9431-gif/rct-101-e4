import React from "react";

const Products = () => {
  const axios = require('axios').default;
  return <div>{
    axios.get('/user?ID=12345')
  .then(function (response) {
   
    console.log(response);
  })
  }</div>;
};

export default Products;
