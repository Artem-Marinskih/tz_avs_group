import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { MainPage } from './pages/MainPage/MainPage';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__main">
        <MainPage />
      </div>
      <Footer title={'Copyright © 2021 Donatello Inc.'} />
    </div>
  );
}

export default App;
