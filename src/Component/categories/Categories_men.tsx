import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import style from "./jewelery.module.css"
import { jeweleryApi } from '../../app/jewelery';
import { MenApi } from '../../app/Menapi';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import img from "../../images/shoppingcart-1066110386.png"
export default function Products() {
  const dispatch = useDispatch();
  let [data,setdata]=useState([])
  let [loading,setloading]=useState(true)
  async function fetchData() {
    setloading(false)
      const action = await dispatch(MenApi());
      setdata(action.payload)
      console.log(action.payload);
      setloading(true)
  }
  
  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <>
    {loading?<>
      <div className={`data my-5 ${style.body}`}>
    <div className="container">
      <div className="row">
       {data?.map((items:any)=>{
        return <div className="col-md-6 col-sm-12 my-3" key={items.id}>
          <Link to={`/Details/${items.id}`} className='text-decoration-none' >
          <div className="d-flex align-items-streach justify-content-center" style={{ height: '200px' }}>
                <img src={items.image} alt="" className="w-100" />
                
              </div>
              <div className="text-center text-light fw-bold">
                <ul className='' style={{"listStyle":"none"}}>
                <li>category : {items.category}</li>
                  <li>{items.title}</li>
                  <li>price : {items.price}EG</li>
                  <li> {items?.rating?.rate} <i className='fas fa-star text-warning fs-5'></i></li>
                </ul>
              {/* <p>{items.title}</p>
              <p>price : {items.price}</p> */}
              </div>
          </Link>
         
        </div>
       })}
      </div>
    </div>
    <footer className={` text-white text-center fw-bold `} style={{"backgroundColor" :"rgb(61, 69, 0)"}}>
     
     <p className='py-5'>
       &copy; {new Date().getFullYear()} جميع حقوق النشر محفوظة. تم انشاؤها من خلال يوسف دردير موسي.
     </p>
   </footer>
    </div></>: <>
    <div className="d-flex justify-content-center align-items-center vh-100 w-100 " style={{"backgroundColor":"rgb(61, 69, 21)"}} >
    <span className={`${style.loader}`}></span>
    </div>
    </>}
    <Helmet>
            
            <title>clothes of men</title>
            <link rel="icon" type="image/png" href={img} />      

        </Helmet>
    </>
  );
}
