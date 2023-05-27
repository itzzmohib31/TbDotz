// import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';

const Process:any=[
    {
        title:'Hard to find designers who can grasp complex systems?',
        text:'No matter the scope of your system, our UX experts will find a practical design solution.',
        link:'Hire UX Designers'
    },
    {
        title:'Want to turn your idea into a real business?',
        text:'We take you through the journey of planning, designing and building a growth-ready web app.',
        link:'Get full-cycle development'
    },

    {
        title:'Does your legacy system block your growth?',
        text:'We’ll help you implement a full redesign for better usability and scalability.',
        link:'Redesign Your App'
    },

    {
        title:'Dealing with inconsistent design?',
        text:'No matter the scope of your system, our UX experts will find a practical design solution.',
        link:'Hire UX Designers'
    },

    {
        title:'Hard to find designers who can grasp complex systems?',
        text:'We’ll rework your UX/UI for clean, consistent design throughout your web app.',
        link:'Get consistent design'
    },


]

const Timeline=()=>{
    return(
     
        <div >
 
            {Process.map((e:any,index:any)=>{
                     return(
                         <div className='flex justify-center text-2xl items-center '>
                         <div className='w-1/4 hidden md:block'>
                             <p className="text-center p-4" style={{border:'2px solid #005cff',borderRadius:'10rem',width:'60px',height:'60px'}}>{index+1}</p>
                             <div style={{left:'19%', borderLeft:'2px solid ',height:'13%',position:'absolute',margin:'auto'}} ></div>
                        </div>



                        <div style={{background:'#005cff'}} key={index} className='mt-4  p-5 w-4/5 md:w-2/5 rounded text-white'>
                            <h2 className='text-xl font-bold'>{e.title}</h2>
                            <p className='text-lg'>{e.text}</p>
                            <a className='text-sm'>{e.link}</a>
                        </div>


                         </div>
                            
                     )
                        
                })}
        </div>

     
    )
}
export default Timeline;