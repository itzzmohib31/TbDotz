import Mockup from '../assets/MobileMockup.png';
import Image from 'next/Image';

const Visions=()=>{

    return(
        <section className='md:flex items-center w-4/5 m-auto justify-around'>
            <Image
             src={Mockup}
             alt={'VisionMockup'}
            />

            <div className='md:w-1/2'>
                <h2 className='font-bold text-4xl md:text-5xl'>VISION: MAKE DIGITAL FUTURE A REALITY</h2>
                <p className='font-light text-2xl'>Mission:TBDotz specializes in disruptive digital technologies and solutions that transforms lives, businesses and economies</p>
            </div>
        </section>
    )

}

export default Visions;