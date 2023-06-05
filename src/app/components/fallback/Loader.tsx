import { InfinitySpin } from "react-loader-spinner";


const Loader=()=>{
return(
<div style={{width:'20%', display:'flex',margin:'auto',alignItems:'center',height:'200px'}}>
<InfinitySpin 
  width='100%'
  color="#005cff"
/>
</div>

)
}

export default Loader;