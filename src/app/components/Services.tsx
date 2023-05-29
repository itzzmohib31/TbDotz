import ServiceList from "../utils/ServiceList";
import Image from "next/image";

const Services = () => {
 

  return (
    <div>
    <div className="p-2">
    <h2 className="md:text-3xl hidden md:block  text-center">We Have <span className='text-blue'>Experts</span> Who Are Always Willing To Learn</h2>
    </div>
   
   <div className='grid md:grid-cols-3 gap-y-4  md:w-4/5 m-auto mt-5 ' >
            {ServiceList.map((e,index)=>{
                return( 
                    <div key={index} className=" md:h-56 items-center m-auto w-4/5 w bg-blue text-white p-5 shadow rounded">
                        <Image
                         src={e.img}
                         alt={'Serice'+index}
                         width={70}
                         height={70}
                        />

                        <h2 className="text-2xl" >{e.title}</h2>
                        <p>{e.desc}</p>
                    </div>
                )
            })}
    </div>
    </div>
 
  );
};

export default Services;


