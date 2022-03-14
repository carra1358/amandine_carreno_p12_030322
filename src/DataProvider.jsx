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
          /** 
          fetch(`http://localhost:3000/user/${urlParams.id}`)
            .then((response) => response.json())
            //.then((data) => console.log(data.data))
            .then((result) => setUser(result.data))
            .catch((error) => console.log(error));

*/        
         const userCall = fetch(`http://localhost:3000/user/${urlParams.id}`)
         const performanceCall = fetch(`http://localhost:3000/user/${urlParams.id}/performance`)

          Promise.all([userCall, performanceCall])
         .then(responses => Promise.all(responses.map(reponse => reponse.json())))
         .then(data => data)
         .then(data => {
             const combinedData = [data[0].data,data[1].data]
             let performance = data[1].data
           //  console.log(user,performance)
             return setUser(combinedData)
         })
         //.then(data => console.log(data[0].data))
         .catch(() => console.log("Oopps"))

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