import React from 'react'
import Home from './Home'
import { Helmet } from 'react-helmet'
import img from "../../images/shoppingcart-1066110386.png"
import { useNavigate } from 'react-router-dom'
export default function E_commerce_with_reduxTypeScript() {
    let nav=useNavigate()
    nav("/Home")
  return (
<>
<Home/>

    <Helmet>
            
    <title>Home</title>
    <link rel="icon" type="image/png" href={img}/>      

</Helmet>
</>
  )
}
