import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TestimonialList from '../utils/testimonial-list';
const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    
  };

  return (
    <Slider {...settings} className='m-auto w-4/5 p-5 text-black bg-blue mt-5'>
            {TestimonialList.map((e,index)=>{
                return(
                    <div key={index} className='w-2 p-12 shadow rounded bg-white' style={{width:'100px'}}>
                        <h2>{e.title}</h2>
                        <p>{e.desc}</p>
                    </div>
                )
            })}
    </Slider>
  );
};

export default Testimonials;


