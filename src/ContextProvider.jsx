import { createContext} from "react";
import useFetch from "hooks/useFetch";







const UserContext = createContext();



const UserContextProvider = ({children}) => {
    

const id = "12";

const  summary = useFetch(id)
const performance= useFetch(`${id}/performance`)
const activity = useFetch(`${id}/activity`)
const averageSession = useFetch(`${id}/average-sessions`)

   

  const user = {
    summary : summary ,
    performance: performance,
    activity: activity,
    averageSession: averageSession,
  }

    
      return (
        // the Provider gives access to the context to its children
        <UserContext.Provider value={user}>
          {children}
        </UserContext.Provider>
      );


}

export { UserContext, UserContextProvider };



