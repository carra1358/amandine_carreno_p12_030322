import {  useState, useEffect } from "react";
import instance from "api/get"

function useFetch (url)  {

  const [state , setState] = useState(null)
  

    useEffect(() => {

        const fetchUser = async() => {
        try{
          const response = await (instance.get(url))
          return setState(response.data.data)
        }catch(error){ console.log(error)}
       
       
      }    
    fetchUser();
    }, [url]);  

    return state

}





export default useFetch;

