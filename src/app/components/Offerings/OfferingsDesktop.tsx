import { useState,useEffect } from "react";
import { OfferingList } from "@/app/utils/OfferingList";
import { OfferingTypes } from "@/app/utils/types";

const OfferingsDesktop=()=>{
    const [selectedService,setSelectedService]=useState<OfferingTypes>(OfferingList[0]);
    const ServiceChangeHandler=(service:OfferingTypes)=>{
        setSelectedService(service);
    }
   const obj={
    Bg:'bg-orange', 
    P:'p-2',
    W: 'w-full' 
   }
    return(
        <section className="md:flex w-4/5 m-auto">

            <div className=" w-full md:w-1/5 p-6 bg-blue text-white shadow rounded">
            {OfferingList.map((e,index)=>{
                return(
                    <p className="w-full text-xl mt-6 cursor-pointer"  onClick={()=>ServiceChangeHandler(e)} >{e.title}</p>
                )
            })}
            </div>

            <div className="shadow rounded bg-white p-2 md:p-12 text-black md:w-3/4 w-full">
                <h2 className="text-2xl md:text-3xl font-bold" >{selectedService.title}</h2>
                <p className="mt-4 text-l md:text-xl font-light" >{selectedService.desc}</p>
                <ul className="md:grid grid-cols-2 mt-5 p-4" >
                    {selectedService.list.map((e,index)=>{
                       return(
                        <li className="md:p-4 list-disc text-l md:text-xl">{e.title}</li>
                       )
                    })}
                </ul>

            </div>
          
        </section>
    )

}

export default OfferingsDesktop;