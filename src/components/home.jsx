


import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import { motion } from "framer-motion";

export default function Home(){

return <motion.div className=" py-10  mt-[-10] flex justify-center ">

<div className="relative ">

<div className=" bg-opacity-40 flex-col  text-white font-satoshi flex items-center font-light    justify-center text-center space-y-6">


{/* Glow behind the title */}
<div className="absolute top-[35%] left-1/2 w-[250px] h-[120px] bg-blue-500 blur-[100px] opacity-40 rounded-full -translate-x-1/2"></div>

{/* Bottom glow near the button */}
<div className="absolute bottom-[12%] left-1/2 w-24 h-24 bg-blue-500 blur-3xl opacity-30 rounded-full -translate-x-1/2"></div>


<div className=" flex justify-center items-center space-x-4">
    <h1 className=" md:text-[128px] text-[64px]"> G</h1>
    <h1 className=" md:text-[128px] text-[64px]"> l</h1>
    <img src="images/logo.png" 
     className="animate-pulse md:h-32 md:w-32 h-16 w-16 drop-shadow-[0_0_10px_rgba(144,175,238,0.8)]" 
     alt="" />
    <h1 className=" md:text-[128px] text-[64px]"> b</h1>
    <h1 className=" md:text-[128px] text-[64px]"> b</h1>

</div>

<div className=" md:text-3xl text-lg  text-wrap "> Trade without limits, learn without risks.<br/>  <span className=" sm:text-sm opacity-75 ">real-time, and 100% educational.</span> </div>


<div className=" flex flex-row items-center justify-center p-4 space-x-4">

<div className="py-2 px-4 animate-bounce flex flex-row  justify-center  active:scale-90 border-[0.25px]  border-[#90AFEE] opacity-80 shadow-inner shadow-[#90AFEE] rounded-full  " >
Get Started 
</div>





</div>


{/* <div className=" bg-none absolute x-[-200px] y  "  >
<img src="images/homebg.gif"  className="w-[200px] h-[500px]" /> */}

{/* </div> */}

</div>





</div>

</motion.div>





}