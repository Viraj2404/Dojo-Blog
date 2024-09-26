import { useState, useEffect } from "react"

const useFetch = (url)=>{

    const[data, setData]=useState(null)
    const[ispending, setIspending] = useState(true)
    const[error, setError]= useState(null)

    useEffect(()=>{
const abortCont = new AbortController();

        setTimeout(()=> {
            fetch(url, {signal: abortCont.signal})
            .then(res =>{
                if(!res.ok){
                    throw Error('could not found');
                }
    
               return res.json();
            })
            .then( data =>{
               setIspending(false)
               setData(data);
               setError(null);
               
            })
            .catch(err=>{
                if(err.name === 'AbortError'){
                    console.log('Fetch Aborted')
                }else{
                    setIspending(false)
                    setError(err.message)
                }
                
            })
        },1000)
       
return ()=>abortCont.abort();

       },[url]);

       return{data, ispending, error};
}

export default useFetch;