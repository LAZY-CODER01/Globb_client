import { useEffect, useState } from "react"
import { motion } from "framer-motion";
export default function Marketupdate(){
const prices=[
    "AAPL",  
    "MSFT",  
    "GOOGL", 
    "AMZN", "TSLA"
  ]
  
  const apikeys = JSON.parse(import.meta.env.VITE_API_KEYS || "[]");
  const apiKey=apikeys[Math.floor(Math.random() * 9)];
  const [det,setdetails]=useState([])
  

  useEffect( ()=>{

const fetchdata = async ()=>{
    const requests = prices.map(symbol => 
        fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`)
          .then(response =>response.json())
          .then(data => ({symbol, ...data }))
        )

          const data = await Promise.all(requests);
          setdetails(data)




}


fetchdata();




  },[])
  

return <motion.div className=" py-16 md:w-[80%] mx-auto text-white font-satoshi mt-[-40px]"

initial={{ opacity: 0, y:60 }} 
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, e1ase: 'easeOut' }}
viewport={{ once: false, amount: 0.5 }}

>
    <div className="flex flex-col space-y-8  ustify-center items-center "
    
    
 
    
    >




    <div className=" text-3xl  text-wrap "> Market <span className=" text-blue-600"> Overview</span> </div>

<div className=" w-11/12 isolate rounded-xl border-gray-800 border bg-gray-950 shadow-lg ring-1 ring-black/5 rounded-full  p-4 space-y-4">
<div className="overflow-x-auto ml-4 px-4 no-scrollbar  mt-8">
        <table className="min-w-full  border-collapse  border-gray-500 border-opacity-40 table-auto">
      
          <tbody>
            {det.map((e, index) => (
              <tr key={index} className="">
              
                <td className="px-4 py-2   border-opacity-40  border-gray-500 border-opacity-4   ">
                    <div className=" flex justify-center items-center space-x-5 md:space-x-10">
                                             <img className=" " src={`/images/${e.symbol}.png`} alt="" /> 
                                        
                            
                    
                    
                                    <img 
                    className="w-8 md:h-8 h-8 "
                      src={e.c > e.pc ? "/images/up.png" : "/images/down.png"} 
                      alt="Stock Trend" 
                    />
                    </div>



                </td>
                <td className="px-4 py-2  border-opacity-40  border-gray-500 border-opacity-4 "> $  {e.c} </td>
                <td className={`px-4 py-2    border-opacity-40  border-gray-500 border-opacity-4 ${e.d >= 0 ? "text-green-500" : "text-red-500"}`}>
                  {e.d}
                </td>
                <td className={`px-4 py-2  border-opacity-40 border-gray-500 border-opacity-4 ${e.dp >= 0 ? "text-green-500" : "text-red-500"}`}>{e.dp}%</td>
             
              </tr>
            ))}
          </tbody>
        </table>
      </div>

</div>




    </div>

</motion.div>


}