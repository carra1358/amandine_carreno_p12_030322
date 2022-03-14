import { createContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const UserContext = createContext();



const UserContextProvider = ({children}) => {
    const [user , setUser] = useState(null)
const urlParams = useParams()
    useEffect(() => {
        const fetchUser = () => {
          // this would usually be your own backend, or localStorage
          // for example
             // this would usually be your own backend, or localStorage
          // for example
          
          fetch(`http://localhost:3000/user/${urlParams.id}`)
            .then((response) => response.json())
            //.then((data) => console.log(data.data))
            .then((result) => setUser(result.data))
            .catch((error) => console.log(error));


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