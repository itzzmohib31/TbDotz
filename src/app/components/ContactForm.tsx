
const ContactForm=()=>{

    return(

        <section className="w-4/5 m-auto md:flex justify-center h-80">
<form  className='w-full h-full rounded bg-blue md:w-1/2 p-8 m-auto shadow pt-5 mt-5 text-white '>

<div className="">
<input style={{borderBottom:'1px solid white'}}   className="bg-blue w-full m-auto shadow  p-3  border-solid border-black text-white" placeholder="Your Email"></input>
</div>
<div className="mt-2">
<textarea style={{border:'1px solid white',color:'white'}} rows={6} className="rounded border-solid border-orange bg-blue m-auto w-full p-3  border-solid border-black text-white" placeholder="Your Message"></textarea>
</div>
<div className="">
<button className="w-full m-auto bg-white text-black rounded shadow p-4 m-auto">Register</button>

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