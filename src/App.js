
import "components/Icons/icons.scss"
import Header from "views/Header/Header";
import Footer from "views/Footer/Footer";
import Main from "views/Main/Main";
import { UserContextProvider } from "ContextProvider";

import instance from "./api/get"



const fetchUser = async(id) => {
  const res = await instance.get(id+"/performance")
  return res
}

console.log(fetchUser(12))




function App() {

  return (
       <UserContextProvider>
      
      <Header />
      <div className="main_content">
        <Main />
        <Footer />
      </div>
   
</UserContextProvider>
  
  );
}

export default App;


