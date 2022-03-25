import 'components/Icons/icons.scss';
import Header from 'views/Header/Header';
import Footer from 'views/Footer/Footer';
import Main from 'views/Main/Main';
import { UserContextProvider } from 'ContextProvider';

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
