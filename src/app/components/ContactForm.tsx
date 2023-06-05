import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const ContactForm=()=>{
    const form = useRef<any>();

   

    const sendEmail = (e:any) => {
        e.preventDefault();
    
        emailjs.sendForm('service_7vgzs6q', 'template_b4lr9dl', form.current, 'ObdLC-mCGHjho92Tc')
          .then((result:any) => {
              console.log(result.text);
          }, (error:any) => {
              console.log(error.text);
          });

          emailjs.sendForm('service_7vgzs6q', 'template_ddvdfpk', form.current, 'ObdLC-mCGHjho92Tc')
          .then((result:any) => {
              console.log(result.text);
          }, (error:any) => {
              console.log(error.text);
          });
      };


    return(

    <section className="w-4/5 m-auto md:flex justify-center h-96">
<form ref={form}  onSubmit={sendEmail}   className='w-full h-full rounded bg-blue md:w-1/2 p-8 m-auto shadow pt-5 mt-5 text-white '>
<div className="">
<input name="user_name" style={{borderBottom:'1px solid white'}}   className="bg-blue w-full m-auto shadow  p-3  border-solid border-black text-white" placeholder="Your Name"></input>
</div>
<div className="">
<input name="user_email" style={{borderBottom:'1px solid white'}}   className="bg-blue w-full m-auto shadow  p-3  border-solid border-black text-white" placeholder="Your Email"></input>
</div>
<div className="mt-2">
<textarea name='message' style={{border:'1px solid white',color:'white'}} rows={6} className="rounded border-solid border-orange bg-blue m-auto w-full p-3  border-solid border-black text-white" placeholder="Your Message"></textarea>
</div>
<div className="">
<input type={'submit'}  value='Send' className="w-full m-auto bg-white text-black rounded shadow p-4 m-auto"></input>
</div>



</form>

<div className="w-full md:w-1/2 bg-orange shadow rounded h-full md:mt-5 p-12 h-full text-white items-center">
<h4 className="text-2xl">Contact Information</h4>
<p>We're open for any suggestion or just to have a chat</p>
<p><span className="font-bold" >Location:</span>SA 57 Block 4 KAECHS Karachi</p>
<p><span className="font-bold">Phone:</span>+92 3122061060</p>
<p><span className="font-bold">Email:</span>admin@tbdotz.com</p>
<p><span className="font-bold">Website:</span>www.tbdotz.com</p>

</div>


        </section>


    )

}

export default ContactForm;