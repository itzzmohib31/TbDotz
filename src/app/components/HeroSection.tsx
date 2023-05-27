import PlanetModel from './PlanetModel';
import {useEffect,useState} from 'react';
const HeroSection=()=>{

    const text=["ENTERPRISE IT SOLUTION PROVIDER","REDUCE COST OF YOUR INTEGRATION","FULL CYCLE PORTAL DEVELOPMENT"];
    const [currentHeading,setHeading]=useState<number>(0);
    useEffect(()=>{
      setInterval(()=>{
         if(currentHeading<text.length-1)
         {
             setHeading(currentHeading+1);
         }
         else
         {
             setHeading(0);
         }
        
      },10000)
    })

    return(
        <div className='md:flex items-center justify-around'>
            <div className='w-1/5'>
            <h4  className='md:text-8xl text-5xl font-bold pt-6'>{text[currentHeading]}</h4>

            </div>
       <PlanetModel></PlanetModel>
        </div>
    )

}

export default HeroSection;