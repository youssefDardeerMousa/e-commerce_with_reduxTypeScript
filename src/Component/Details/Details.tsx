import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import style from "./style.module.css"
import { DetailsApi } from '../../app/GetDetails';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import img from "../../images/shoppingcart-1066110386.png"

interface ProductData {
  image?: string;
  title?:string;
  description?:string;
  category?:string;
  price?:string;
  rating?:{
    rate?:any
  };
  
  // Add other properties here if needed
}

export default function Products() {
  const dispatch = useDispatch();
  let [data, setData] = useState<ProductData>(); // Specify the type as ProductData
  let [loading, setLoading] = useState(true)
  let { id } = useParams();
  console.log(id);
  
  async function fetchData() {
    setLoading(false);
    const action = await dispatch(DetailsApi(id));
    setData(action.payload);
    console.log(action.payload);
    setLoading(true);
  }
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
  {loading? <div className={`${style.body} pt-5`}>
    <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-md-4 col-sm-12 py-5">
            <img src={data?.image} alt="" className='w-100' /> {/* Use optional chaining */}
          </div>
          <div className="col-md-8 col-sm-12 py-5 text-light">
            <h3 className="title">
              {data?.title}
            </h3>
            <p className="fw-bolder">
            {data?.description}
            </p>
            <ul className='' style={{"listStyle":"none"}}>
                <li className='fw-bold fs-5'>category : {data?.category}</li>
                  
                  <li className='fw-bold fs-5'>price : {data?.price}EG</li>
                  <li className='fw-bold fs-5'> Rate:  {data?.rating?.rate} <i className='fas fa-star text-warning fs-5'></i></li>
                </ul>
                <a href="https://registration.gopay.com/merchant/1" target="_blank" className='btn btn-success w-100'>Buy Now</a>
                
          </div>
        </div>
      </div>
    </div> : <>
    <div className="d-flex justify-content-center align-items-center vh-100 w-100" style={{"background":"rgb(61, 69, 21)"}}>
    <span className={`${style.loader}`}></span>
    </div>
    
    </>}
    <Helmet>
            
                <title>Details</title>
                <link rel="icon" type="image/png" href={img} />      

            </Helmet>
            <footer className={` text-white text-center py-5 fw-bold `} style={{"backgroundColor" :"rgb(61, 69, 0)"}}>
     
     <p>
       &copy; {new Date().getFullYear()} جميع حقوق النشر محفوظة. تم انشاؤها من خلال يوسف دردير موسي.
     </p>
   </footer>
    </>
  )
}
