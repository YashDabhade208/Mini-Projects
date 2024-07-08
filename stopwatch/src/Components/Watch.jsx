import { useState,useRef,useEffect } from "react";

export default Watch

function Watch()
{


    
    const [time , setTime] = useState(null)
    const intervalref = useRef(0)
    const [now ,setnow] = useState(0)
    const [lap,setLap]  = useState(0)

    

    var currenttime = (time-now).toFixed()
   
  function start()
  { setnow(Date.now())
    intervalref.current =setInterval(() => {
        setTime(Date.now())
      
      }, 100);
   
   
    
  }
  function stop()
  {
   clearInterval (intervalref.current)

  }
  function reset()
  {  
    clearInterval (intervalref.current)
    setTime(0)
    setnow(0)
    

  }
  function llap()
  {
    setLap(currenttime)


  }

    return(<>
           <h1>{(currenttime)/1000}</h1>
           <h2>Lap:{(lap)/1000}</h2>
         <button onClick={start}>Start</button>
         <button onClick={stop}>stop</button>
         <button onClick={reset}>Reset</button>
         <button onClick={llap}>LAp</button>

    
    
    </>)
}
