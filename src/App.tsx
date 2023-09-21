import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import Home from './Component/Home/Home'
import Products from './Component/Products/Products'
import Categories_electronics from './Component/categories/Categories_electronics'
import Categories_jewelery from './Component/categories/Categories_jewelery'
import Categories_men from './Component/categories/Categories_men'
import Categories_women from './Component/categories/Categories_women'
import Details from './Component/Details/Details'
import E_commerce_with_reduxTypeScript from './Component/Home/E_commerce_with_reduxTypeScript'

export default function App() {
  let router=createBrowserRouter([
    {path:"",element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:"Home",element:<Home/>},
      {path:"e-commerce_with_reduxTypeScript",element:<E_commerce_with_reduxTypeScript/>},
      {path:"Products",element:<Products/>},
      {path:"Categories_electronics",element:<Categories_electronics/>},
      {path:"Categories_jewelery",element:<Categories_jewelery/>},
      {path:"Categories_men",element:<Categories_men/>},
      {path:"Categories_women",element:<Categories_women/>},
      {path:"Details/:id",element:<Details/>}
    ]}
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}
