import "./styles/app.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

function App() {
  return (
    <div>
      <Header/>
      <div className="main_content">
       <Main />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
