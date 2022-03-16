import "./styles/app.scss";
import "components/Icons/icons.scss"
import Header from "views/Header/Header";
import Footer from "views/Footer/Footer";
import Main from "views/Main/Main";
import { UserContextProvider } from "ContextProvider";










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


