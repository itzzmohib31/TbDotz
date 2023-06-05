import Mockup from '../assets/MobileMockup.png';
import Image from 'next/image';

const Visions=()=>{

    return(
        <section className='md:flex items-center w-4/5 m-auto justify-around'>
            <Image
             src={Mockup}
             alt={'VisionMockup'}
            />

            <div className='md:w-1/2'>
                <h2 className='font-bold text-4xl md:text-5xl'><span className='text-blue'>VISION:</span> MAKE DIGITAL FUTURE A REALITY</h2>
                <p className='font-light text-2xl'><span className='text-blue'>Mission:</span>TBDotz specializes in disruptive digital technologies and solutions that transforms lives, businesses and economies</p>
            </div>
        </section>
    )

}

export default Visions;