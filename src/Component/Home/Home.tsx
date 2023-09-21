import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../app/productapi';
import style from "./style.module.css"
import Slider from 'react-slick';
import img1 from "../../images/51Y5NI-I5jL._AC_UX679_.jpg"
import img2 from "../../images/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
import img3 from "../../images/71YXzeOuslL._AC_UY879_.jpg"
import img4 from "../../images/71li-ujtlUL._AC_UX679_.jpg"
import img5 from "../../images/81fPKd-2AYL._AC_SL1500_.jpg"
import img6 from "../../images/81XH0e8fefL._AC_UY879_.jpg"
import img7 from "../../images/71YXzeOuslL._AC_UY879_.jpg"
import Products from '../Products/Products';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Home() {

  const dispatch = useDispatch();
  let [data,setdata]=useState([])
  let [loading,setloading]=useState(true)
  let ref=useRef(null)
  async function fetchData() {
    setloading(false)
      const action = await dispatch(fetchProducts());
      setdata(action.payload)
      console.log(action.payload);
      setloading(true)
  }
  
  useEffect(() => {
   
    fetchData();
  }, []);
  const settings = {
    dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
  };
  return (
    <>
    {loading?<>
      <div className={`data my-5 ${style.body}`}>
      <div className="container">
    <div className="row">
        <Slider {...settings}>
      <div className="img1">
        <img  src={img1} alt="" className='w-100' height={300}  />
      </div>
      <div className="img2">
        <img src={img2} alt=""  className='w-100' height={300} />
      </div> 
      <div className="img3">
        <img src={img3} alt="" className='w-100' height={300} />
      </div> 
      <div className="img4">
        <img src={img4} alt="" className='w-100' height={300} />
      </div> 
      <div className="img5">
        <img src={img5} alt="" className='w-100' height={300} />
      </div> 
      <div className="img6">
        <img src={img6} alt="" className='w-100' height={300} />
      </div> 
      <div className="img7">
        <img src={img7} alt="" className='w-100' height={300} />
      </div> 
</Slider>
        </div>
    </div>
      <div className={`data my-5 ${style.body}`}>
    <div className="container">
      <div className="row">
       {data.map((items:any)=>{
        return <div className="col-md-6 col-sm-12 my-3" key={items.id}>
          <Link to={`/Details/${items.id}`} className='text-decoration-none' >
          <div className="d-flex align-items-streach justify-content-center" style={{ height: '200px' }}>
                <img src={items.image} alt="" className="w-100" />
                
              </div>
              <div className="text-center text-light fw-bold">
                <ul   className='' style={{"listStyle":"none"}}>
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
    </div>
        </div>
 
   </>: <>
    <div className="d-flex justify-content-center align-items-center vh-100 w-100" style={{"background":"rgb(61, 69, 21)"}}>
    <span className={`${style.loader}`}></span>
    </div>
    </>}
    <Helmet>
            
            <title>Home</title>
            
        </Helmet>
    </>
     
   
  )
}

/**
 *  
 */