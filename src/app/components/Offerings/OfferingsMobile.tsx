import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { OfferingList } from "@/app/utils/OfferingList";
import { OfferingTypes } from "@/app/utils/types";


const OfferingsMobile = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 2000,
    
  };

  return (



    <Slider {...settings} className='bg-orange shadow rounded p-2 md:p-12 text-white md:w-3/4 w-full'>
            {OfferingList.map((e,index)=>{
                return(
                    <div key={index} className='w-2 p-12 shadow rounded bg-orange' style={{width:'100px'}}>
                <h2 className="text-2xl md:text-3xl font-bold" >{e.title}</h2>
                <p className="mt-4 text-l md:text-xl font-light" >{e.desc}</p>
                    <ul className="md:grid grid-cols-2 mt-5 p-4" >
                    {e.list.map((e,index)=>{
                       return(
                        <li key={index} className="md:p-4 list-disc text-l md:text-xl">{e.title}</li>
                       )
                    })}
                </ul>
                    </div>
                )
            })}
    </Slider>
  );
};

export default OfferingsMobile;


