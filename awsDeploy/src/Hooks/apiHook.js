import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ApiHook(api,...dataName) {
  const [data,setData] = useState([]);

  const cateApi = async ()=>{
    const Data = await axios.get(api);
    setData(Data.data)
  }

  useEffect(()=>{
    cateApi();
  },dataName)
  
  return [data,setData];
}

export default ApiHook