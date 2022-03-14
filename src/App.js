import "./styles/app.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import { UserContextProvider } from "./DataProvider";





function App() {


  return (
    <UserContextProvider>
        <div>
      <Header />
      <div className="main_content">
        <Main />
        <Footer />
      </div>
    </div>
  </UserContextProvider>
  
  );
}

export default App;


