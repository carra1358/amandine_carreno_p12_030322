import { createContext, useState, useEffect } from "react";
import { userRequests} from "requests"
import { useParams } from "react-router-dom";


const UserContext = createContext();



const UserContextProvider = ({children}) => {
    
  
   
const urlParams = useParams()

 
const [user , setUser] = useState(null)

    useEffect(() => {
        const fetchUser = () => {
          
          if(user === null){
           return userRequests(urlParams.id).then((response)=> setUser(response)) 
          }

          window.addEventListener('locationchange', () => {
            return userRequests(urlParams.id).then((response)=> setUser(response))
            
           })
       

        }; 
    
        fetchUser();
      }, []);  
    
      return (
        // the Provider gives access to the context to its children
        <UserContext.Provider value={user}>
          {children}
        </UserContext.Provider>
      );


}

export { UserContext, UserContextProvider };